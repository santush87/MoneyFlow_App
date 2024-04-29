import { useState } from 'react';
import { TEXT_COLOR_HEADER_FOOTER, BACKGROUND_COLOR_HEADER_FOOTER, BACKGROUND_COLOR_HEADER_FOOTER_LIGHT, TEXT_COLOR_HEADER_FOOTER_LIGHT } from '../constants/colors.js'

export default function Footer() {
    const [darkMode, setDarkMode] = useState(true);
    return (
        <footer className={`${darkMode ? BACKGROUND_COLOR_HEADER_FOOTER : BACKGROUND_COLOR_HEADER_FOOTER_LIGHT} py-6 text-center ${TEXT_COLOR_HEADER_FOOTER}`}>
            <p className={`${darkMode ? TEXT_COLOR_HEADER_FOOTER : TEXT_COLOR_HEADER_FOOTER_LIGHT}`}>© 2024 Martin Aleksandrov. All Rights Reserved</p>
        </footer>
    )
}
