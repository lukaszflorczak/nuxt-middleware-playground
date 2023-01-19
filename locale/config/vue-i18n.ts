import pluralizationRules from './pluralization'

export default () => {
  return {
    fallbackLocale: 'en',
    pluralizationRules,
    legacy: false,
    warnHtmlMessage: false,
  }
}
