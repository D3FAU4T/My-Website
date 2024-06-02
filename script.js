const $ = (id) => document.getElementById(id);
const $$ = (querySelector) => document.querySelector(querySelector);

let isSidebarOpen = false;
let hueColor = 0;
let currentTabId;

if (window.innerWidth >= 900) isSidebarOpen = true;

window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) isSidebarOpen = true;
    else isSidebarOpen = false;
});

document.addEventListener('DOMContentLoaded', () => {
    const hueSlider = $('hue-slider');
    const themeChanger = $$('theme-changer');
    const paletteBtn = $('paletteBtn');

    const setColors = (hueValue) => {
        const primaryColor = `hsl(${hueValue}, 100%, 70%)`;
        hueColor = hueValue;
        document.documentElement.style.setProperty('--md-sys-color-primary', primaryColor);
    };

    const savedHue = localStorage.getItem('hueValue');
    const savedTheme = localStorage.getItem('theme');
    setThemeMode(savedTheme || 'white');

    if (savedHue !== null) {
        hueSlider.value = savedHue;
        setColors(savedHue);
    }

    paletteBtn.addEventListener('click', () => {
        themeChanger.classList.toggle('visible');
    });

    $('themeCopy').addEventListener('click', () => {
        $$('#themeCopy > span').textContent = 'check';
        navigator.clipboard.writeText(`hsl(${hueColor}, 100%, 70%)`);
        setTimeout(() => $$('#themeCopy > span').textContent = 'Content_Copy', 500);
    });

    $('darkmodeon').addEventListener('click', () => setThemeMode('dark'));
    $('lightmodeon').addEventListener('click', () => setThemeMode('white'));

    hueSlider.addEventListener('input', (event) => {
        const hueValue = event.target.value;
        setColors(hueValue);
        localStorage.setItem('hueValue', hueValue);
    });

    hueSlider.dispatchEvent(new Event('input'));
});

$('hamBtn').addEventListener('click', () => {
    if (isSidebarOpen) closeSidebar();
    else openSidebar();
});

const sidebarButtons = [
    { id: 'evsButton', pageName: 'EVS Assignment' },
    { id: 'onrizon', pageName: 'Onrizon Games' },
    { id: 'wordles', pageName: 'Wordles' },
    { id: 'itSkillButton', pageName: 'IT-Skills' },
    { id: 'communitygames', pageName: 'Community Games' },
    { id: 'syllabus', pageName: 'Syllabus' },
];

sidebarButtons.forEach(button => {
    $(button.id).addEventListener('click', async () => {
        await loadData(button.pageName);
        shiftSelectedTab(button.id);
        if (window.innerWidth < 900) closeSidebar();
    });
});

async function loadData(pageName, path = undefined) {
    try {
        const [contentResponse, contextResponse] = await Promise.all([
            path ? fetch(`Subjects/${path}.html`) : fetch(`/Contents/${pageName}.html`),
            path ? fetch(`Subjects/${path}c.html`) : fetch(`/Contexts/${pageName}.html`)
        ]);

        if (!contentResponse.ok || !contextResponse.ok) {
            throw new Error('Failed to fetch data');
        }

        const [contentData, contextData] = await Promise.all([
            contentResponse.text(),
            contextResponse.text()
        ]);

        $('section').innerHTML = contentData;
        $('overview').innerHTML = contextData;
    } catch (error) {
        console.error(error);
    }
}

function shiftSelectedTab(tabId) {
    if (currentTabId) $(currentTabId).classList.remove('selected');
    currentTabId = tabId;
    $(currentTabId).classList.add('selected');
}

function closeSidebar() {
    const navbar = $$('.navbar');
    navbar.style.width = '0px';
    isSidebarOpen = false;
    setTimeout(() => navbar.style.display = 'none', 300);
}

function openSidebar() {
    const navbar = $$('.navbar');
    navbar.style.display = 'block';
    setTimeout(() => navbar.style.width = '13rem', 10);
    isSidebarOpen = true;
}

function setThemeMode(mode) {
    const root = document.documentElement;
    if (mode == "white") {
        root.style.setProperty('--md-sys-color-background', '#f7f9ff');
        root.style.setProperty('--md-sys-color-surface', '#ebeef3');
        root.style.setProperty('--md-sys-color-text', '#000000');
        root.style.setProperty('--option-cover-color', '#dbe3ed');
        root.style.setProperty('--small-text-color', '#000000');
        root.style.setProperty('--selected', '#dbe3ed');
        root.style.setProperty('--hover-color', `var(--md-sys-color-primary)`);
        root.style.setProperty(`--link-color`, `#ffffff`);
        root.style.setProperty('--note-border-color-hover', `var(--md-sys-color-text)`);
        root.style.setProperty('--link-decoration', `underline`);
        $$('#wordleIcon > g').style.fill = '#000000';
        localStorage.setItem('theme', 'white');
    } else {
        root.style.setProperty('--md-sys-color-background', '#10131b');
        root.style.setProperty('--md-sys-color-surface', '#1c1f28');
        root.style.setProperty('--md-sys-color-text', '#ffffff');
        root.style.setProperty('--option-cover-color', '#414755');
        root.style.setProperty('--small-text-color', '#e0e2ed');
        root.style.setProperty('--selected', '#33353a');
        root.style.setProperty('--hover-color', `#2c2f38`);
        root.style.setProperty(`--link-color`, `var(--md-sys-color-primary)`);
        root.style.setProperty('--note-border-color-hover', `var(--md-sys-color-primary)`);
        root.style.setProperty('--link-decoration', `none`);
        $$('#wordleIcon > g').style.fill = '#ffffff';
        localStorage.setItem('theme', 'dark');
    }
}