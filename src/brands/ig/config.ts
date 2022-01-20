/**
 * @param id:
 * @param screenSizes:
 * @param entry:
 * @param settings:
 */
interface IGameConfiguration {
  id: string;
  screenSizes: IScreenSizeConfiguration;
  entry: IEntryConfiguration;
  settings: ISettingsConfiguration;
}

/**
 * @param maxDesktopScreen:
 * @param mobileScreen:
 * @param mediumScreen:
 * @param smallScreen:
 */
interface IScreenSizeConfiguration {
  maxDesktopScreen: number;
  mobileScreen: number;
  mediumScreen: number;
  smallScreen: number;
}

/**
 * @param redirectURL:
 * @param type:
 * @param loginURL:
 * @param registrationURL:
 * @param tokenFromParentType:
 * @param tokenCookieName:
 */
interface IEntryConfiguration {
  redirectURL: string;
  type: string;
  loginURL: string;
  registrationURL: string;
  tokenFromParentType: string;
  tokenCookieName: string;
}

/**
 * @param defaultLocale: sets to true if the client wants us to directly manipulate the parent
 * @param poweredByIncentiveLogo:
 * @param clickLogoToGoHome:
 * @param languageFromParentType:
 * @param languageCodeIdentifier:
 * @param defaultLanguage:
 * @param fallbackLanguage:
 * @param supportedLanguages:
 * @param storageType: localStorage or Cookies
 * @param defaultCurrency:
 * @param currencyFromParentType:
 * @param currencyCodeIdentifier:
 * @param supportedCurrencies:
 * @param allowParentChanges: sets to true if the client wants us to directly manipulate the parent
 */
interface ISettingsConfiguration {
  defaultLocale: string;
  poweredByIncentiveLogo: boolean;
  clickLogoToGoHome: boolean;
  languageFromParentType: string;
  languageCodeIdentifier: string;
  defaultLanguage: string;
  fallbackLanguage: string;
  supportedLanguages: string[];
  storageType: string;
  defaultCurrency: string;
  currencyFromParentType: string;
  currencyCodeIdentifier: string;
  supportedCurrencies: string[];
  allowParentChanges: boolean; //sets to true if the client wants us to directly manipulate the parent
}

const gameConfigurations: IGameConfiguration[] = [
  {
    id: 'game',
    screenSizes: {
      maxDesktopScreen: 768,
      mobileScreen: 480,
      mediumScreen: 420,
      smallScreen: 360
    },
    entry: {
      redirectURL: '/',
      type: 'Redirect',
      loginURL: '/login',
      registrationURL: '/register',
      tokenFromParentType: 'Cookies',
      tokenCookieName: 'AppSession'
    },
    settings: {
      defaultLocale: '',
      languageFromParentType: 'PostMessage',
      languageCodeIdentifier: 'l',
      defaultLanguage: 'en',
      fallbackLanguage: 'en',
      supportedLanguages: ['en'],
      poweredByIncentiveLogo: true,
      clickLogoToGoHome: false,
      storageType: 'localStorage',
      defaultCurrency: 'VND',
      currencyFromParentType: 'PostMessage',
      currencyCodeIdentifier: 'c',
      supportedCurrencies: ['CNY', 'VND'],
      allowParentChanges: false
    }
  }
];

export default gameConfigurations[0];
