import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button onClick={toggleLanguage} className="lang-btn">
      {i18n.language === 'en' ? '🇷🇺' : 'en'}
    </button>
  );
}
export default LanguageSwitcher;
