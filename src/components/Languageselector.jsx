import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "French" },
    { code: "hi", lang: "Hindi" },
];

const Languageselector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className='btn-container'>
      {languages.map((lang) => (
        <button
          key={lang.code}
          className={i18n.language === lang.code ? "selected" : ""}
          onClick={() => changeLanguage(lang.code)}
        >
          {lang.lang}
        </button>
      ))}
    </div>
  );
};

export default Languageselector;
