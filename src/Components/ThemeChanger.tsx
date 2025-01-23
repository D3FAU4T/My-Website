"use client";
import '@material/web/slider/slider';
import '@material/web/button/outlined-button';
import { useRef } from 'react';
import { setColors, setThemeMode } from '../Shared/functions';

interface Options {
    IsActive: boolean;
    Hue: number;
}

const darkMode = () => setThemeMode("dark");
const lightMode = () => setThemeMode("white");

const ThemeChanger = (Props: Options) => {

    const copyBtnText = useRef<HTMLSpanElement>(null);

    const copyColor = () => {
        copyBtnText.current!.textContent = 'check';
        navigator.clipboard.writeText(hslToHex(Props.Hue, 100, 70));
        setTimeout(() => copyBtnText.current!.textContent = 'Content_Copy', 500);
    };

    const changeColor = (event: InputEvent) => {
        const hue = (event.target as HTMLInputElement).value;
        setColors(parseInt(hue));
        localStorage.setItem('hueValue', hue);
    };

    return (
        <div className={Props.IsActive ? "visible" : ""} id="theme-changer">
            <div>
                <h2>Theme Controls</h2>
                {/* @ts-ignore */}
                <md-list-item type="button" id="themeCopy" onClick={copyColor} suppressHydrationWarning>
                    <span className="material-symbols-outlined" ref={copyBtnText}>Content_Copy</span>
                {/* @ts-ignore */}
                </md-list-item>
            </div>

            <div>
                <p>Hue</p>
                {/* @ts-ignore */}
                <md-slider id="hue-slider" min="0" max="360" value={Props.Hue} onInput={changeColor} suppressHydrationWarning></md-slider>
                <div className="hue" id="hue-display"></div>
            </div>
            <div>
                {/* @ts-ignore */}
                <md-outlined-button title="Enable Dark Mode" id="darkmodeon" onClick={darkMode} suppressHydrationWarning>
                    <span className="material-symbols-outlined">Dark_Mode</span>
                {/* @ts-ignore */}
                </md-outlined-button>
                {/* @ts-ignore */}
                <md-outlined-button title="Enable Light Mode" id="lightmodeon" onClick={lightMode} suppressHydrationWarning>
                    <span className="material-symbols-outlined">Light_Mode</span>
                {/* @ts-ignore */}
                </md-outlined-button>
            </div>
        </div>
    )
}

const hslToHex = (hue: number, saturation: number, lightness: number) => {
    lightness /= 100;
    const chroma = saturation * Math.min(lightness, 1 - lightness) / 100;

    const getColorComponent = (offset: number) => {
        const componentHue = (offset + hue / 30) % 12;
        const color = lightness - chroma * Math.max(Math.min(componentHue - 3, 9 - componentHue, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };

    return `#${getColorComponent(0)}${getColorComponent(8)}${getColorComponent(4)}`;
}

export default ThemeChanger;