browser.runtime.onMessage.addListener((_) => {
    document.getElementsByClassName("ytp-chrome-top")[0].toggleAttribute("hidden");
    document.getElementsByClassName("ytp-chrome-bottom")[0].toggleAttribute("hidden");
})