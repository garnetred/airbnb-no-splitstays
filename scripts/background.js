chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === "complete" &&
    tabUrl &&
    tabUrl.includes(
      "airbnb.com" ||
        "airbnb.es" ||
        "airbnb.mx" ||
        "airbnb.co.uk" ||
        "airbnb.ca" ||
        "airbnb.de" ||
        "airbnb.fr" ||
        "airbnb.it" ||
        "airbnb.com.br",
    )
  ) {
    console.log("on working page");
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["css/global.css"],
    });
  }
});
