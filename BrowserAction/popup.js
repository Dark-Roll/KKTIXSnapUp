//popup.js  


// alert 出來 重新整理
// a ticket but buy 4 error handling


// keep the default in HTML ???
// 換頁 和重新整理就消詩了
// 原先的 [0].click() 要清掉

// when popup.html is loaded, as the meaning of the extension
// should be clicked


{/* <all_urls> */ }

// close 變數

// 感覺可以喔，不行啦 關掉也會重啟
// 折衷的方法就是打開不要收起來XDDD
// 剩下到了特定網址傳了
// then we can just when the url is matched, send to content

// send twice 
// total fifth ( wtf?)
// 應該是 三次 前面那兩次是 refresh 的樣子
let ticketType = 0
let ticketNumber = 0
let currentUrl 


let ticketTypeSelect = document.getElementsByName('ticketType')[0]
let ticketNumberSelect = document.getElementsByName('ticketNumber')[0]

ticketNumberSelect.addEventListener('change', function () {
    ticketNumber = ticketNumberSelect.options[ticketNumberSelect.selectedIndex].text;
    ticketNumber = parseInt(ticketNumber, 10)
})

ticketTypeSelect.addEventListener('change', function () {
    ticketType = ticketTypeSelect.options[ticketTypeSelect.selectedIndex].text;
    ticketType = parseInt(ticketType, 10)
})


// 其實 url 可以直接加在這邊...
// like this
// chrome.tabs.query({
//     active: true,
//     currentWindow: true
// }, function (tabs) {
//     var tab = tabs[0];
//     var url = tab.url;
// });
const sendToContentScript = (ticketUpdateObj) =>{
    const doInCurrentTab = ()=> {
        // tabArray .id 會根據視窗做 id 的變動
        chrome.tabs.query(
            { currentWindow: true, active: true},
            function(tabArray) { 
                console.log(tabArray[0]) 
                chrome.tabs.sendMessage(
                    tabArray[0].id,
                    ticketUpdateObj
                )
            }
        );
    }
    doInCurrentTab()
}


// 到對的 url 才傳到 contentScript
const getUpdateUrl = ()=>{
    chrome.tabs.onUpdated.addListener(function(tab){
        console.log("tab in eventListener is :", tab);
        chrome.tabs.query( {active: true}, function(tabQueryResult){
            let updateTabElement = tabQueryResult.filter(e=>{
                return tab === e.id
            })
            currentUrl = updateTabElement[0] && updateTabElement[0].url


            // 符合網址才傳
            if( currentUrl && currentUrl.indexOf('kktix') >-1){
                console.log("come on, let's send to contentScript");
                sendToContentScript({ticketType, ticketNumber})
            }
        })
    });
} 
getUpdateUrl()











//  ?????????????? why local can change the global variable
// document.addEventListener('DOMContentLoaded', function(dcle) {  

//     // it will work, when [0] added after getDom
//     let ticketTypeSelect = document.getElementsByName('ticketType')[0]
//     let ticketNumberSelect = document.getElementsByName('ticketNumber')[0]

//     // default value
//     let ticketType = 1
//     let ticketNumber = 1

//     let submitButton = document.getElementsByClassName('submit')[0]

//     console.log("is loaded");

//     function saveOptions() {


//         ticketNumber = ticketNumberSelect.options[ticketNumberSelect.selectedIndex].text;
//         ticketNumber =  parseInt(ticketNumber, 10)
//         localStorage["favColor"] = color;
//     }




//     submitButton.addEventListener('click', function(){
//         console.log(ticketType, ticketNumber);

//         // save
//         // chrome.storage.sync.set({
//         //     "ticketType": ticketType-1,
//         //     "ticketNumber" : ticketNumber,
//         // }, function(){
//         //     console.log("success storage");
//         // })



//     })




//     // ticketNumberSelect.addEventListener('click', function(ce) {  
//     //     //使用Chrome API開啟視窗  
//     //     chrome.windows.create({ "url": "https://github.com/lauraluo" });  
//     // });  
// });