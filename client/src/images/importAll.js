export default function ImportAllImg(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', '').substring(0, item.lastIndexOf('.') - 2)] = r(item)
  });
  return images;
}