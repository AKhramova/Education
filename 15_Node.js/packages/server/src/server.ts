import path from 'path';
import { Methods } from './Methods';
import { App } from './App';
import { upload } from './multerConfig';
import { Image } from './Image';
import { envConfig } from './envConfig';

const app = new App();
const { allowedFormats, maxSize } = envConfig;
// const allowedFormats = ['raw', 'jpg', 'tiff', 'psd', 'bmp', 'png', 'jp2'];
const imageFormats = ['raw', 'jpg', 'tiff', 'psd', 'bmp', 'png', 'jp2'];

app.setStatic(path.resolve(__dirname, '../../web/dist/'));
app.setRoute('/*', Methods.POST, (req, res) => {
  const file = upload.single('file');
  file(req, res, (err) => {
    if (err) {
      throw err;
    }
    if (req.file) {
      const extension: string = req.file.originalname.split('.')[1].trim();
      if (!allowedFormats.includes(extension) || req.file.size > maxSize) {
        res.status(200).end();
      }
      if (imageFormats.includes(extension)) {
        const image = new Image(req.file);
        image.processImage();
        res.json(image.getUrl());
        res.end();
      }
    }
  });
});

app.run();