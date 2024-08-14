"use server";

import * as fs from 'fs';
import * as path from 'path';

interface ImageInfo {
    path: string;
    name: string;
}

export async function getImageFiles(folder: string): Promise<ImageInfo[]> {
    const imageFiles: ImageInfo[] = [];
    const folderPath = path.join(process.cwd(), "./public", folder);
  
    await traverseFolder(folderPath, imageFiles);
  
    return imageFiles;
}

async function traverseFolder(folderPath: string, imageFiles: ImageInfo[]) {
    const files = await fs.promises.readdir(folderPath);
    for (const file of files) {
        const filePath = path.join(folderPath, file);
        const fileStat = await fs.promises.stat(filePath);

        if (fileStat.isDirectory()) {
            await traverseFolder(filePath, imageFiles);
        } else if (fileStat.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(file)) {
            imageFiles.push({
                path: filePath,
                name: file
            });
        }
    }
}

/* export async function getImageFiles(): Promise<ImageInfo[]> {
    const imageFiles: ImageInfo[] = [];
    const publicFolderPath = path.join(process.cwd(), "./public");
  
    await traverseFolder(publicFolderPath, imageFiles);
  
    return imageFiles;
  }
  
  async function traverseFolder(folderPath: string, imageFiles: ImageInfo[]) {
    const files = await fs.promises.readdir(folderPath);
    for (const file of files) {
      const filePath = path.join(folderPath, file);
      const fileStat = await fs.promises.stat(filePath);
  
      if (fileStat.isDirectory()) {
        await traverseFolder(filePath, imageFiles);
      } else if (fileStat.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(file)) {
        imageFiles.push({
          path: filePath,
          name: file
        });
      }
    }
  } */


/*   export default function getImagesFromFolder(allImages, folder) {
    return Object.entries(allImages).reduce((all, [key, path]) => {
      if (key.includes(folder)) {
        all[key.replace(`${folder}/`, "")] = path;
      }
      return all;
    }, {})
  } */