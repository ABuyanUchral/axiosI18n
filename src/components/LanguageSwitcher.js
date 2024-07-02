import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="mb-4">
            <button onClick={() => changeLanguage('en')} className="px-4 py-2 mr-2 text-white bg-blue-500 rounded">
                English
            </button>
            <button onClick={() => changeLanguage('mn')} className="px-4 py-2 text-white bg-green-500 rounded">
                Монгол
            </button>
        </div>
    );
};

export default LanguageSwitcher;
