"use client";

import '@material/web/list/list';
import '@material/web/list/list-item';

import NavBar from './NavBar';
import ThemeChanger from '@/Components/ThemeChanger';

import { useState, useEffect } from "react";
import { setColors, setThemeMode } from '@/Shared/functions';

import { styles as typescaleStyles } from "@material/web/typography/md-typescale-styles";

const initialHue = typeof window !== 'undefined' ? parseInt(localStorage.getItem('hueValue') || '289') : 289;
const initialTheme = typeof window !== 'undefined' ? localStorage.getItem('theme') as 'white' | 'dark' : 'dark';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
    const [themeChangerVisibility, setThemeChangerVisibility] = useState(false);
    const [hamburgerState, setHamburgerState] = useState(false);
    const [hueVal, setHueVal] = useState(initialHue);

    const themeChangerClick = () => setThemeChangerVisibility(!themeChangerVisibility);
    const hamburgerClick = () => setHamburgerState(!hamburgerState);

    useEffect(() => {
        if (typescaleStyles.styleSheet)
            document.adoptedStyleSheets.push(typescaleStyles.styleSheet);

        setHueVal(parseInt(localStorage.getItem('hueValue') || '289'));
        setThemeMode(initialTheme);
        setColors(hueVal);
    }, []);

    return (
        <>
            <header>
                <div>
                    <md-list-item type="button" id="hamBtn" onClick={hamburgerClick} suppressHydrationWarning>
                        <span className="material-symbols-outlined">Menu</span>
                    </md-list-item>
                </div>

                <a className="Webpage-Name" href="/"><b>D3FAU4T's Space</b></a>

                <div>
                    <md-list-item type="button" id="paletteBtn" onClick={themeChangerClick} suppressHydrationWarning>
                        <span className="material-symbols-outlined">Palette</span>
                    </md-list-item>
                </div>

                <ThemeChanger IsActive={themeChangerVisibility} Hue={hueVal} />
            </header>

            <div className='container'>
                <NavBar IsActive={hamburgerState} />
                {children}
            </div>
        </>
    );
}

export default PageLayout;