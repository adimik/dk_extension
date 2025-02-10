(async function() {
    const modules = [
        { name: 'auto_scaveng.js', url: 'https://raw.githubusercontent.com/adimik/dk_extension/main/modules/auto_scavenge.js' }
    ];

    for (let mod of modules) {
        try {
            const response = await fetch(mod.url);
            const newScript = await response.text();
            eval(newScript);  // Dynamické načtení a spuštění
            console.log(`Načten nejnovější modul: ${mod.name}`);
        } catch (error) {
            console.error(`Chyba při aktualizaci modulu ${mod.name}:`, error);
        }
    }
})();
