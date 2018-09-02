import 'regenerator-runtime/runtime'; // only for tests, because async/await needs it

import chai from 'chai';
import { createBuilder, createTempDir } from 'broccoli-test-helper';

import Favicon from '../';

import path from 'path';
import fs from 'fs';

import Mocks from './fixtures/mocks';

const { expect } = chai;

chai.config.truncateThreshold = 1000;

describe('Favicon', function() {
  let input;

  beforeEach(function() {
    return createTempDir().then(tempDir => (input = tempDir));
  });

  afterEach(function() {
    return input.dispose();
  });

  it('creates favicons', async function() {
    this.timeout(60000);

    let inputPath = path.join('tests', 'fixtures');
    let node = new Favicon(inputPath);
    let builder = await createBuilder(node);

    await builder.build();

    expect(fs.existsSync(path.join(builder.builder.outputPath, 'favicon-16x16.png'))).to.be.true;
  });

  it('does do nothing if there is no favicon', async function() {
    this.timeout(60000);

    let inputPath = path.join('tests', 'fixtures');
    let node = new Favicon(inputPath, { iconPath: 'none.png' });
    let builder = await createBuilder(node);

    await builder.build();

    expect(fs.existsSync(path.join(builder.builder.outputPath, 'favicon-16x16.png'))).to.be.false;
  });

  it('calls onSuccess callback with proper data', async function() {
    this.timeout(60000);

    let inputPath = path.join('tests', 'fixtures');
    let onSuccess = (html, rawObjects) => {
      expect(html).to.be.deep.equal(Mocks.htmlArrayMock);
      expect(rawObjects).to.be.deep.equal(Mocks.rawObjectsMock);
    }

    let node = new Favicon(inputPath, { onSuccess });
    let builder = await createBuilder(node);

    await builder.build();

    expect(fs.statSync(path.join(builder.builder.outputPath, 'favicon-16x16.png')).isFile());
  });
});
