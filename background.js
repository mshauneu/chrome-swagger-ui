function openTab (url) {
  chrome.tabs.create({'url': chrome.extension.getURL('index.html') + '?url=' + url});
}

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var currentUrl = tabs[0].url;

    if ((/^https:\/\/github.com\/.+\.yaml$/).test(currentUrl)) { // yaml file in github.com interface
      chrome.tabs.executeScript(tabs[0].id, { code: 'document.querySelector("#raw-url") ? document.querySelector("#raw-url").href : null' }, function (rawUrl) {
        openTab(rawUrl[0] || currentUrl)
      });
    } else {
      openTab(currentUrl);
    }
  });
});
