browser.menus.create({
  id: "hide-progress-bar",
  title: "Cacher la barre de progression",
  contexts: ["video"],
  icons: {
    "16": "favicon_144x144.png"
  }
});

browser.menus.onClicked.addListener((info, tab) => {
  if (info.menuItemId == "hide-progress-bar") {
        console.dir(tab);
        browser.tabs.sendMessage(tab.id, {});
      }
  }
);