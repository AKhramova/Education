import crypto from 'crypto';
import sharp from 'sharp';
import { AWS } from './AWS';

export class Image {
  public file: Express.Multer.File;
  private largeName: string;
  private mediumName: string;
  private thumbName: string;
  private ext: string;
  private fileName: string;
  private AWS: AWS;
  
  public constructor(file: Express.Multer.File) {
    this.file = file;
    this.largeName = '';
    this.mediumName = '';
    this.thumbName = '';
    this.fileName = '';
    this.ext = file.originalname.split('.')[1].trim();
    this.AWS = new AWS();
  }

  public processImage = () => {
    this.generateName();

    Promise.all([
      this.uploadImage(2048, this.largeName),
      this.uploadImage(1024, this.mediumName),
      this.uploadImage(300, this.thumbName),
    ]).then((values) => {
      console.log('Uploaded successfully');
    });
  };

  public getUrl = () => {
    const { url } = this.AWS;

    return JSON.stringify({
      large: url + this.largeName,
      medium: url + this.mediumName,
      thumb: url + this.thumbName,
    });
  };

  private generateName = () => {
    const rawBytes = crypto.randomBytes(16);
    const imageName = rawBytes.toString('hex');

    this.largeName = `large_${imageName}.${this.ext}`;
    this.mediumName = `medium_${imageName}.${this.ext}`;
    this.thumbName = `thumb_${imageName}.${this.ext}`;
  };

  private uploadImage = (size: number, filename: string) =>
    new Promise((resolve, reject) => {
      sharp(this.file.buffer)
        .resize(size, size)
        .toBuffer()
        .then((buffer) => {
          this.AWS.upload(buffer, filename);
        });
    });
}
