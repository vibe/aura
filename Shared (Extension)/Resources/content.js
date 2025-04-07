browser.runtime.sendMessage({ greeting: "hello" }).then((response) => {
    console.log("Received response: ", response);
});

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
});


(() => {
  const insertBlackThemeColor = () => {
    const meta = document.createElement('meta');
    meta.name = 'theme-color';
    meta.content = '#000000';

    if (document.head.firstChild) {
      document.head.insertBefore(meta, document.head.firstChild);
    } else {
      document.head.appendChild(meta);
    }
  };

  if (document.head) {
    insertBlackThemeColor();
  } else {
    const observer = new MutationObserver((_, obs) => {
      if (document.head) {
        insertBlackThemeColor();
        obs.disconnect();
      }
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
