
import path from 'path';
import mime from 'mime-types';
import fs from "fs";

export default function spa_express(distpath, options = {}) {
  return function (req, res, next) {
    const basedir = process.cwd();
    let file = path.join(basedir, distpath, req.path);
    try {
      let stats = fs.statSync(file);
      if (!stats.isFile()){
        file = path.join(basedir, distpath, 'index.html');
      }
    } catch (err) {
        file = path.join(basedir, distpath, 'index.html');
    }
    const mimeType = mime.lookup(file);
    res.set('Content-Type', mimeType);
    return res.sendFile(file);
  };
}
