export default function getImagesFromFolder(folder) {
  return Object.entries(allImages).reduce((all, [key, path]) => {
    if (key.includes(folder)) {
      all[key.replace(`${folder}/`, "")] = path;
    }
    return all;
  }, {})
}
