chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;
      chrome.tabs.create({'url': chrome.extension.getURL('index.html') + '?url=' + url}, function (tab) {
    });
  });
});