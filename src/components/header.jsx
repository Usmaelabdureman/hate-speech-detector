// src/components/Header.js
import React from 'react';

import { useTranslation } from 'react-i18next';
const Header = () => {
    const { t } = useTranslation();
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-3xl font-bold">{t('Hate Speech Detector')}</h1>
            <nav>
                <ul className="flex">
                    <li className="mr-4">
                        <a href="https://github.com/Usmaelabdureman" target="_blank" rel="noopener noreferrer">{t('Github')}</a>
                    </li>
                    <li className="mr-4">
                        <a href="/contact">{t('Message Us')}</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
