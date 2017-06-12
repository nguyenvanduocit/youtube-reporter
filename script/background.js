chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'report') {
      chrome.tabs.create({
        url: 'https://www.youtube.com/copyright_complaint_form?target=' + encodeURI(sender.url)
      })
    }
  })