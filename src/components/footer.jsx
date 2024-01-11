import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const date = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <div className="mt-2">
        <ul className="flex justify-center">
          <li className="mx-2">
            <span>{t('About Us')}</span>
          </li>
          <li className="mx-2">
            <span>{t('Contact Us')}</span>
          </li>
          <li className="mx-2">
            <span>{t('Developers')}</span>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <p>{t('Developed by:')}</p>
        <ul className="flex justify-center">
          <li className="mx-2">
            <a href="https://usmael.me/" target="_blank" rel="noopener noreferrer">{t('Developer 1')}</a>
          </li>
          <li className="mx-2">
            <a href="https://github.com/Felmeta-M" target="_blank" rel="noopener noreferrer">{t('Developer 2')}</a>
          </li>
        </ul>
      </div>
      <p>&copy; {date} {t('Hate Speech Detector')}. {t('All rights reserved')}.</p>
    </footer>
  );
};

export default Footer;
