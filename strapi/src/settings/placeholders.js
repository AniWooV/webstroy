function replacePlaceholderWithInput(entity, keys, placeholder, input) {
  keys.forEach((key) => {
    entity[key] = entity[key].split(placeholder).join(input);
  });

  return entity;
}

function getKeysWithPlaceholder(entity, placeholder) {
  const keys = [];

  for (let key in entity) {
    if (
      new RegExp(`(.*\{\{${placeholder}\}\}.*)`).test(entity[key].toString())
    ) {
      keys.push(key);
    }
  }

  return keys;
}

module.exports = { replacePlaceholderWithInput, getKeysWithPlaceholder };
