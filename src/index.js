
import path from 'path';
import express from 'express';

export default function spa_express(app, distpath, options = {}) {
  return function (req, res, next) {
    const basedir = process.cwd();
    app.use(express.static(path.join(basedir, distpath),{
        index: false,
        maxAge: '1d'
    }));
    app.use((req, res, next) => {
      const filePath = path.join(basedir, distpath, 'index.html');
      return res.sendFile(filePath);
    });
    next();
  };
}
