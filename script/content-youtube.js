let $actionButtons = document.querySelector('.watch-secondary-actions')
let $reportButton = createReportButton()
$actionButtons.insertBefore($reportButton, $actionButtons.childNodes[0])

function createReportButton () {
  let button = document.createElement("BUTTON")
  button.classList.add('yt-uix-button', 'yt-uix-button-size-default', 'yt-uix-button-subscribed-branded', 'complaint-button')
  button.addEventListener('click', openReportPage)
  let text = document.createTextNode("Báo cáo")
  button.appendChild(text)
  return button
}

function openReportPage (event) {
  event.preventDefault()
  chrome.runtime.sendMessage({action: 'report', target: window.location.href})
}