console.log("✅ Divoké Kmeny Extension je aktivní!");

// Událost při kliknutí na ikonu rozšíření
browser.browserAction.onClicked.addListener((tab) => {
  console.log("🖱️ Kliknutí na ikonu!");
  browser.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => alert("Divoké Kmeny Extension je aktivní!")
  });
});