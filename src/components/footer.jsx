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
            <a href="/about">{t('About Us')}</a>
          </li>
          <li className="mx-2">
            <a href="/contact">{t('Contact Us')}</a>
          </li>
          <li className="mx-2">
            <a href="/developers">{t('Developers')}</a>
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
            <a href="https://example.com/developer2" target="_blank" rel="noopener noreferrer">{t('Developer 2')}</a>
          </li>
        </ul>
      </div>
      <p>&copy; {date} {t('Hate Speech Detector')}. {t('All rights reserved')}.</p>
    </footer>
  );
};

export default Footer;
