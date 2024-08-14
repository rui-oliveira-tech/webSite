import { useState, useEffect } from "react";

export default function usePublicImages(pub) {
  const [images, setImages] = useState({});
  useEffect(() => {
    if (Object.keys(images).length === 0) {
      const publicImagesFound = pub.keys().reduce((allImages, item) => {
        const file = item.replace('./', '');
        const fileNameNoExtension = file.substring(0, file.lastIndexOf('.'));
        allImages[fileNameNoExtension] = pub(item)
        return allImages;
      }, {});
      setImages(publicImagesFound)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return images;
}