// Define isObject function
const isObject = (item: any) => {
  return (
    item &&
    typeof item === "object" &&
    !Array.isArray(item) &&
    !(item instanceof Date)
  );
};

// Define deepMerge function
const deepMerge = (target: any, ...sources: any[]) => {
  if (!sources.length) return target;

  // Iterate through each source object without modifying the sources array
  sources.forEach((source) => {
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
          target[key] = target[key].map((item: any, index: number) =>
            deepMerge(item, source[key][index])
          );
        } else {
          target[key] = source[key];
        }
      }
    }
  });

  return target;
};

export default deepMerge;
