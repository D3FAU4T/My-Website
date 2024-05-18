const $ = (id) => document.getElementById(id);
const $$ = (querySelector) => document.querySelector(querySelector);

let isSidebarOpen = false;
let currentTabId;

if (window.innerWidth >= 900) isSidebarOpen = true;

window.addEventListener('resize', () => {
    if (window.innerWidth >= 900) isSidebarOpen = true;
    else isSidebarOpen = false;
});

$('hamBtn').addEventListener('click', () => {
    if (isSidebarOpen) closeSidebar();
    else openSidebar();
});

const sidebarButtons = [
    { id: 'evsButton', pageName: 'EVS Assignment' },
    { id: 'onrizon', pageName: 'Onrizon Games' },
    { id: 'itSkillButton', pageName: 'IT-Skills' }
];

sidebarButtons.forEach(button => {
    $(button.id).addEventListener('click', async () => {
        await loadData(button.pageName);
        shiftSelectedTab(button.id);
        if (window.innerWidth < 900) closeSidebar();
    });
});

async function loadData(pageName) {
    try {
        const [contentResponse, contextResponse] = await Promise.all([
            fetch(`/Contents/${pageName}.html`),
            fetch(`/Contexts/${pageName}.html`)
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