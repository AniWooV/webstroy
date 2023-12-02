const placeholders = ["city"];

function getKeysWithPlaceholders(entity) {
  const keys = {};

  for (let key in entity) {
    const placehldrs = [];

    placeholders.forEach((placeholder) => {
      if (
        new RegExp(`(.*\{\{${placeholder}\}\}.*)`).test(entity[key].toString())
      ) {
        placehldrs.push(placeholder);
      }
    });

    if (placehldrs.length > 0) {
      keys[key] = placehldrs;
    }
  }

  return keys;
}

function replacePlaceholdersWithValues(entity, keys, values) {
  for (let key in keys) {
    keys[key].forEach((placeholder) => {
      entity[key] = entity[key].split(`{{${placeholder}}}`).join(values[placeholder]);
    });
  }

  return entity;
}

module.exports = { replacePlaceholdersWithValues, getKeysWithPlaceholders };
