import Logo from "/assets/images/logo.svg"
import LogoDark from "/assets/images/logo-dark.svg"
import SunIcon from "/assets/images/icon-sun.svg"
import MoonIcon from "/assets/images/icon-moon.svg"

import { useState } from "react"

export const Header = () => {
    const [isDark, setIsDark] = useState(false);

    const handleClick = () => {
        const isDarkChange = document.documentElement.classList.toggle('dark');
        setIsDark(isDarkChange)
    }

    return (
        <div className="bg-Neutral-0 dark:bg-Neutral-800 flex justify-between h-[66px] px-3 py-2 rounded-[10px] items-center mb-6">
            <img src={isDark ? LogoDark : Logo} alt="Logo" />
            <button onClick={handleClick} className="cursor-pointer bg-Neutral-100 size-[50px] 
            grid place-content-center rounded-lg hover:bg-Neutral-200 dark:bg-Neutral-600 dark:hover:bg-Neutral-700 focus:outline-none focus:ring-2 focus:ring-Red-400">
                <img src={isDark ? SunIcon : MoonIcon} alt="Moon Icon" />
            </button>
        </div>
    )
}
