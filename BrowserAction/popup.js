//popup.js  

// keep the default in HTML ???
// 換頁 和重新整理就消詩了
// 原先的 [0].click() 要清掉

// when popup.html is loaded, as the meaning of the extension
// should be clicked

// NodeList is not an dom (?), so it will always set [element] to it


//  ?????????????? why local can change the global variable
document.addEventListener('DOMContentLoaded', function(dcle) {  
    
    // it will work, when [0] added after getDom
    let ticketTypeSelect = document.getElementsByName('ticketType')[0]
    let ticketNumberSelect = document.getElementsByName('ticketNumber')[0]
    
    // default value
    let ticketType = 1
    let ticketNumber = 1

    let submitButton = document.getElementsByClassName('submit')[0]

    console.log("is loaded");


    ticketNumberSelect.addEventListener('change', function(){

        console.log(ticketNumberSelect.selectedIndex );
        ticketNumber = ticketNumberSelect.options[ticketNumberSelect.selectedIndex].text;
        ticketNumber =  parseInt(ticketNumber, 10)
        console.log(ticketNumber);
    
    
        // sendToContentScript("ticketNumber", ticketNumber)

    
    })


    ticketTypeSelect.addEventListener('change', function(){

        console.log(ticketTypeSelect.selectedIndex );
        ticketType = ticketTypeSelect.options[ticketTypeSelect.selectedIndex].text;
        ticketType=  parseInt(ticketType, 10)
        console.log(ticketType);
    
    
        // sendToContentScript("ticketType", ticketType)
    
    })

    // var currSelectText = document.all.objSelect.options[document.all.objSelect.selectedIndex].text;

    submitButton.addEventListener('click', function(){
        console.log(ticketType, ticketNumber);
        sendToContentScript({
            "ticketType": ticketType-1,
            "ticketNumber" : ticketNumber,
        })
    })

    // const sendToContentScript = (element, value ) =>{
    const sendToContentScript = (ticketUpdateObj) =>{

        function doInCurrentTab(){
            let a 
            // tabArray .id 會根據視窗做 id 的變動
            chrome.tabs.query(
                { currentWindow: true, active: true},
                function(tabArray) { 
                    console.log(tabArray[0]) 
                    chrome.tabs.sendMessage(
                        tabArray[0].id,
                        // {
                        //     "ticketNumber": ticketNumber,
                        //     "ticketType": ticketType
                        // }
                        // why [element] work ??
                        ticketUpdateObj
                    )
    
                    // return tabArray[0]
                }
    
            );
            
        }
        let activeTabId 
        doInCurrentTab( function(tab){
            console.log(tab);
            activeTabId = tab.id
        } )
            // doInCurrentTab()
        
        console.log(activeTabId);
    }


    // ticketNumberSelect.addEventListener('click', function(ce) {  
    //     //使用Chrome API開啟視窗  
    //     chrome.windows.create({ "url": "https://github.com/lauraluo" });  
    // });  
});