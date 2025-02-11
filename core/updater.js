(async function() {
    const modules = [
        { name: 'auto_scaveng.js', url: 'https://raw.githubusercontent.com/adimik/dk_extension/main/modules/auto_scaveng.js' }
    ];

    for (let mod of modules) {
        try {
            const response = await fetch(`${mod.url}?t=${new Date().getTime()}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const newScript = await response.text();
            const scriptElement = document.createElement('script');
            scriptElement.textContent = newScript;
            document.head.appendChild(scriptElement);
            console.log(`Načten nejnovější modul: ${mod.name}`);
        } catch (error) {
            console.error(`Chyba při aktualizaci modulu ${mod.name}:`, error);
        }
    }
})();