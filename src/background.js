function openITSecDeadlines() {
  browser.tabs.create({
    url: "https://sec-deadlines.github.io/"
  });
}

browser.browserAction.onClicked.addListener(openITSecDeadlines);

