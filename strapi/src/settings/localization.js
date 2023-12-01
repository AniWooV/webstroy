function getLocalizedData(entity, lang) {
  if (entity.locale === lang) {
    return (({ localizations, ...obj }) => obj)(entity);
  }

  return entity.localizations.find((e) => e.locale === lang);
}

module.exports = { getLocalizedData };
