import translationEn from './locales/en/translation.json';
import Config from './config';
import { buildI18n, ILocaleOptions } from '@incentivegames/ig-frontend-common/lib/utilities/i18n';

const languageConfig: ILocaleOptions = {
  resources: {
    en: {
      translations: translationEn,
    },
  },
  language: Config.settings.defaultLanguage,
  fallback: Config.settings.fallbackLanguage,
};

export default buildI18n(languageConfig);
