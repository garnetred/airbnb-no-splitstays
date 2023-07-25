chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === "complete" &&
    tabUrl &&
    tabUrl.includes("airbnb.com" || "airbnb.es")
  ) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["css/global.css"],
    });
  }
});
