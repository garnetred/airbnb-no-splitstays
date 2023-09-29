chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const tabUrl = tab.url ?? tab.pendingUrl;
  if (
    changeInfo.status === "complete" &&
    tabUrl &&
    tabUrl.includes("airbnb.com" || "airbnb.es"
"airbnb.ae" ||
"airbnb.al "||
"airbnb.am "||
"airbnb.at" ||
"airbnb.az" ||
"airbnb.ba "||
"airbnb.be "||
"airbnb.ca" ||
"airbnb.cat" ||
"airbnb.ch" ||
"airbnb.cl" ||
"airbnb.cn" ||
"airbnb.co.cr" ||
"airbnb.co.id" ||
"airbnb.co.il" ||
"airbnb.co.in" ||
"airbnb.co.kr" ||
"airbnb.com" ||
"airbnb.com.ar" ||
"airbnb.com.au" ||
"airbnb.com.bo "||
"airbnb.com.br" ||
"airbnb.com.bz" ||
"airbnb.com.co" ||
"airbnb.com.ec" ||
"airbnb.com.ee" ||
"airbnb.com.gt" ||
"airbnb.com.hk" ||
"airbnb.com.hn" ||
"airbnb.com.hr" ||
"airbnb.com.kh" ||
"airbnb.com.mt" ||
"airbnb.com.my" ||
"airbnb.com.ni" ||
"airbnb.com.pa" ||
"airbnb.com.pe" ||
"airbnb.com.ph" ||
"airbnb.com.py" ||
"airbnb.com.ro" ||
"airbnb.com.sg" ||
"airbnb.com.sv" ||
"airbnb.com.tr" ||
"airbnb.com.tw" ||
"airbnb.com.ua" ||
"airbnb.com.vn" ||
"airbnb.co.nz" ||
"airbnb.co.uk" ||
"airbnb.co.ve" ||
"airbnb.co.za" ||
"airbnb.cz" ||
"airbnb.de" ||
"airbnb.dk" ||
"airbnb.es" ||
"airbnb.fi" ||
"airbnb.fr" ||
"airbnb.gr" ||
"airbnb.hu" ||
"airbnb.ie" ||
"airbnb.is" ||
"airbnb.it" ||
"airbnb.jp" ||
"airbnb.la" ||
"airbnb.lt" ||
"airbnb.lu" ||
"airbnb.lv" ||
"airbnb.me" ||
"airbnb.mx" ||
"airbnb.nl" ||
"airbnb.no" ||
"airbnb.pl" ||
"airbnb.pt "||
"airbnb.rs" ||
"airbnb.ru" ||
"airbnb.se" ||
"airbnb.si")
  ) {
    chrome.scripting.insertCSS({
      target: { tabId: tabId },
      files: ["css/global.css"],
    });
  }
});
