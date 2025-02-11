console.log("Updater je aktivní!");

function zkontrolovatAktualizaci() {
  fetch("https://raw.githubusercontent.com/adimik/dk_extension/main/updates.json")
    .then(response => response.json())
    .then(data => {
      const aktualniVerze = browser.runtime.getManifest().version;
      const novaVerze = data.addons["moje-rozsireni@firefox"].updates[0].version;

      if (novaVerze !== aktualniVerze) {
        console.log(`Dostupná nová verze: ${novaVerze}`);
        browser.runtime.sendMessage({ action: "new_update", version: novaVerze });
        browser.runtime.reload();
      } else {
        console.log("Žádné nové aktualizace.");
      }
    })
    .catch(error => console.error("Chyba při kontrole aktualizace:", error));
}

// Automatická kontrola každé 3 minuty (180 000 ms)
setInterval(zkontrolovatAktualizaci, 180000);

// Ruční kontrola přes kliknutí na ikonu
browser.browserAction.onClicked.addListener(() => {
  console.log("Ruční kontrola aktualizace...");
  zkontrolovatAktualizaci();
});
