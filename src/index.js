import Plugin from "broccoli-caching-writer";
import FaviconsJs from "favicons";

import config from "./config";

import fs from "fs";
import path from "path";
import deepMerge from "lodash.merge";
import { parse as parseHtml } from "himalaya";
import { default as _logger } from "heimdalljs-logger";

const logger = _logger("broccoli-favicon");

export default class Favicon extends Plugin {
  constructor(node, options = {}) {
    super([node], {
      name: options.name,
      annotation: options.annotation,
    });

    this.config = deepMerge({}, config, options);
  }

  build() {
    let { iconPath, faviconsConfig } = this.config;
    iconPath = path.join(this.inputPaths[0], iconPath);

    if (!fs.existsSync(iconPath)) {
      logger.warn(
        `Favicon file has been not detected in specified path: "${iconPath}"`
      );
      return Promise.resolve();
    }

    return this._generateFavicons(iconPath, faviconsConfig).then(
      this._onSuccess.bind(this)
    );
  }

  _onSuccess(response) {
    let parsedHtml = parseHtml(response.html.join(""));

    this._saveFiles(response.images.concat(response.files));

    return this.config.onSuccess(response.html, parsedHtml);
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
    let { outputPath, placeIcoAtRoot } = this.config;

    let configPath = outputPath || "";
    outputPath = path.join(this.outputPath, configPath);

    placeIcoAtRoot = placeIcoAtRoot === undefined ? true : placeIcoAtRoot;

    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath);
    }

    files.forEach((file) => {
      fs.writeFileSync(path.join(outputPath, file.name), file.contents);

      if (placeIcoAtRoot && outputPath !== "" && file.name === "favicon.ico") {
        fs.writeFileSync(path.join(this.outputPath, file.name), file.contents);
      }
    });
  }
}
