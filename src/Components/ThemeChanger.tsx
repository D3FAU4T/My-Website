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
            <div className="theme-copy">
                <h2>Theme Controls</h2>
                <md-list-item type="button" id="themeCopy" onClick={copyColor}>
                    <span className="material-symbols-outlined" ref={copyBtnText}>Content_Copy</span>
                </md-list-item>
            </div>
            <div className="option-cover">
                <div id="theme-option">
                    <p>Hue</p>
                    <md-slider id="hue-slider" min="0" max="360" value={Props.Hue} onInput={changeColor}></md-slider>
                </div>
                <div className="hue" id="hue-display"></div>
            </div>
            <div className="darkMode">
                <md-outlined-button id="darkmodeon" onClick={darkMode}>
                    <span className="material-symbols-outlined">Dark_Mode</span>
                </md-outlined-button>
                <md-outlined-button id="lightmodeon" onClick={lightMode}>
                    <span className="material-symbols-outlined">Light_Mode</span>
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