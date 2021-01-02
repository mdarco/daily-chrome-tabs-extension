const TAB_URLS = {
  TAB_GMAIL: "https://mail.google.com",
  TAB_OUTLOOK: "https://exchange.optimal-systems.de/owa",
  TAB_HANGOUTS: "https://hangouts.google.com",
  TAB_TRELLO: "https://trello.com/login",
};

const createTab = ({ url, pinned }) => {
  chrome.tabs.create(
    {
      pinned,
      url,
    },
    (tab) => {
      console.log(`Tab ${url} created.`);
    }
  );
};

const handleIconClicked = (activeTab) => {
  createTab({
    url: TAB_URLS.TAB_GMAIL,
    pinned: true,
  });

  createTab({
    url: TAB_URLS.TAB_OUTLOOK,
    pinned: true,
  });

  createTab({
    url: TAB_URLS.TAB_HANGOUTS,
    pinned: true,
  });

  createTab({
    url: TAB_URLS.TAB_TRELLO,
    pinned: true,
  });
};

chrome.browserAction.onClicked.addListener(handleIconClicked);
