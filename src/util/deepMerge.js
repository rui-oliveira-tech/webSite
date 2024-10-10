// deepMerge.js

// Define isObject function
function isObject(item) {
  return (
    item &&
    typeof item === "object" &&
    !Array.isArray(item) &&
    !(item instanceof Date)
  );
}

// Define deepMerge function
function deepMerge(target) {
  const sources = Array.prototype.slice.call(arguments, 1);
  if (!sources.length) return target;

  // Iterate through each source object without modifying the sources array
  sources.forEach(function (source) {
    if (isObject(target) && isObject(source)) {
      for (const key in source) {
        if (isObject(source[key])) {
          if (
            key === "__proto__" ||
            key === "constructor" ||
            key === "prototype"
          ) {
            continue; // Skip potentially dangerous keys to prevent prototype pollution.
          }

          if (!target[key] || !isObject(target[key])) {
            target[key] = {};
          }

          deepMerge(target[key], source[key]);
        } else if (Array.isArray(target[key]) && Array.isArray(source[key])) {
          // If both target[key] and source[key] are arrays, merge the objects within them recursively
          target[key] = target[key].map(function (item, index) {
            return deepMerge(item, source[key][index]);
          });
        } else {
          target[key] = source[key];
        }
      }
    }
  });

  return target;
}

// Export deepMerge function using ES module syntax
export default deepMerge;
