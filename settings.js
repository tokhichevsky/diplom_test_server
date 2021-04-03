const settings = {
  dirName: __dirname,
  getPath(path) {
    return this.dirName + path
  }
}

module.exports = settings;
