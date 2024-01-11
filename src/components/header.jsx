// src/components/Header.js
import React from 'react';

import { useTranslation } from 'react-i18next';
const Header = () => {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    const handleLanguage = (e) => {
        i18n.changeLanguage(e.target.value);
    }
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold">{t('Hate Speech Detector')}</h1>
            <nav className="flex items-center">
                <ul className="flex">
                    <li className="mr-4">
                        <a href="https://github.com/Usmaelabdureman/hate-speech-detector" target="_blank" rel="noopener noreferrer">{t('Github')}</a>
                    </li>
                    <li className="mr-4">
                        <a href= 'mailto:uabdureman@gmail.com'> {t('Message Us')}</a>
                    </li>
                </ul>
                <span className="flex justify-between items-center round">
                    <select onChange={handleLanguage} className="bg-gray-800 text-white p-2">
                        <option value="am">Amharic</option>
                        <option value="en">English</option>
                        <option value="or">Oromiffa</option>
                    </select>
                </span>
            </nav>
        </header>
    );
};

export default Header;
