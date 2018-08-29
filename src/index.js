import Plugin from 'broccoli-caching-writer';
import FaviconsJs from 'favicons';

import deepMerge from 'lodash.merge';
import path from 'path';
import fs from 'fs';

import config from './config';
import { default as _logger } from 'heimdalljs-logger';

const logger = _logger('broccoli-favicon');

export default class Favicon extends Plugin {
  constructor(node, options = {}) {
    super([node], {
      name: options.name,
      annotation: options.annotation
    });

    this.config = deepMerge({}, config, options);
  }

  build() {
    let { iconPath, onSuccess, faviconsConfig } = this.config;
    iconPath = path.join(this.inputPaths[0], iconPath);

    if (!fs.existsSync(iconPath)) {
      logger.warn(`Favicon file has been not detected in specified path: "${iconPath}"`);
      return Promise.resolve()
    }

    return this._generateFavicons(iconPath, faviconsConfig).then((response) => {
      this._saveFiles(response.images.concat(response.files))
      return onSuccess(response);
    });
  }

  _generateFavicons(imagePath, options = {}) {
    return new Promise((resolve, reject) => {
      return FaviconsJs(imagePath, options, (error, response) => {
        if (error) {
          reject(new Error(`${error.name}: ${error.message}`));
        } else {
          resolve(response);
        }
      });
    });
  }

  _saveFiles(files) {
    files.forEach((file) => fs.writeFileSync(path.join(this.outputPath, file.name), file.contents));
  }
}
