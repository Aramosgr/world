import React from 'react';
import { useTranslation } from 'react-i18next';

import './Error.scss';

const Error = () => {
  const { t } = useTranslation();

  return (
    <div className="error">
      <div className="error__title">{t('error')}</div>
    </div>
  );
};

export default Error;
