chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
            console.log("Web3 enabled")
        } else {
            console.log("Web3 disabled")
        }
    }
})

chrome.tabs.onActivated.addListener(function (tabId, windowId) {
    if (typeof web3 !== 'undefined') {
        web3 = new Web3(web3.currentProvider);
        console.log("Web3 enabled")
    } else {
        console.log("Web3 disabled")
    }
})