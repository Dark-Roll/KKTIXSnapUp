//popup.js  

// when popup.html is loaded, as the meaning of the extension
// should be clicked
document.addEventListener('DOMContentLoaded', function(dcle) {  
    let ticketSelect = document.getElementsByName('ticket')


    function doInCurrentTab(){
        let a 
        // tabArray .id 會根據視窗做 id 的變動
        chrome.tabs.query(
            { currentWindow: true, active: true},
            function(tabArray) { 
                console.log(tabArray[0]) 
                chrome.tabs.sendMessage(tabArray[0].id, {"ticket":1})

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


    // ticketSelect.addEventListener('click', function(ce) {  
    //     //使用Chrome API開啟視窗  
    //     chrome.windows.create({ "url": "https://github.com/lauraluo" });  
    // });  
});