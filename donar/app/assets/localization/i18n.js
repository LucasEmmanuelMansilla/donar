import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import es from './language/es';

const locales = RNLocalize.getLocales();

//1 languange
I18n.defaultLocale = 'es';
I18n.locale = 'es';
I18n.translations = {
  es,
};

//multilanguage
/*
if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  es,
  en,
};
*/
export default I18n;
