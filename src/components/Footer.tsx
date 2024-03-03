import { TEXT_COLOR_HEADER_FOOTER, BACKGROUND_COLOR_HEADER_FOOTER } from '../constants/colors.js'

export default function Footer() {
    return (
        <footer className={`${BACKGROUND_COLOR_HEADER_FOOTER} py-6 text-center ${TEXT_COLOR_HEADER_FOOTER}`}>
            <p>© 2024 Martin Aleksandrov. All Rights Reserved</p>
        </footer>
    )
}
