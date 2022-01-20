import { ReactGACategories } from 'constants/appEnums';
import ReactGA from 'react-ga';

export const gaUtilities = {
  /**
   * Records an event in Google Analytics
   * @param category Type of category. Use the enum
   * @param action Type of action. i.e. failure, create...
   * @param label OPTIONAL
   * @param value OPTIONAL. Numeric value
   */
  recordEventGA: (category: ReactGACategories, action: string, label?: string, value?: number) => {
    ReactGA.event({
      category,
      action,
      label,
      value
    });
  }
};
