
// "matches" : ["https://kktix.com/events/*/registrations/new"],
// {/* <all_urls>  </all_urls> */} for test




// why sold out?
// what is DOMTokenList
// two bugs:
// 1. unknown sold out (can't load the newest)
// 2. unknown send third 
// 3. default 跑第一張 (怎麼樣不要 default), default 跑一次勾 onMessage 再跑一次就沒了

// refresh when get alert 
// refresh when get noTicketAlert
    // getComputedStyle


//   function getStyle(el, styleProp) {
        // defaultView.getComputedStyle(nextStepButton, null).getPropertyValue(styleProp);

        // let sty =window.getComputedStyle(nextStepButton, null).cssText
        // console.log("get DOM style uses above function, ", sty);
/*       
    bonus:
    choose ticket type and number 
*/



// submit and again answer may error
// input answer
// // submit click (it will click now)
// alert 要拿掉嗎
// alert wont reload, catch style to deal with? because the two is the same

// 已售完 || 暫無票卷

const reloadTime = 10
const whichTicketType = 8
let answer ="20200516"
// let answer ="0525jasonmra"
// let answer ="0309cat" 
// let answer ="jjc" 
// alert 沒有取消

// console.log(answer);
// let alert wont show
window.alert = function() {};


// no ticket warning happens, refresh
// and autoFill right answer

// 點了別的頁面會重新整理就會全部清掉
// 所以資料只能存 popup.js
 
// setTimeout(
// ()=>{if(alert('請選擇專案類型')){console.log('a')}}
// , 1000)



// window.onload = () => {
//     if (window.location.href.match(/https:\/\/kktix\.com\/events\/[\w-+&@#/%?=~|!:,.;]+\/registrations\/new/)) {
//         console.log("match");
//         buyTicket(ticketType, ticketNumber)
//     } else {
//         console.log("no");
//     }
// }

const buyTicket = (ticketType, ticketNumber) => {
// function buyTicket() {

    // console.log("in bg", chrome);

    let noTicketAlert = document.querySelectorAll('.register-status.register-status-OUT_OF_STOCK .alert-wrapper.alert-warning.align-center .alert')
    // noTicketAlert.length
    // console.log(noTicketAlert.length);

    if(noTicketAlert.length>1){
        console.log("no ticket alert");
        location.reload() 
    }

    // register-status register-status-IN_STOCK register-status-SOLD_OUT register-status-COMING_SOON
    // hide register-status register-status-IN_STOCK register-status-SOLD_OUT register-status-COMING_SOON
    
    let soldOutTicketPage = document.querySelectorAll('.register-status.register-status-IN_STOCK.register-status-SOLD_OUT.register-status-COMING_SOON')[0]
    console.log('soldOutTicketPage is :', soldOutTicketPage);
    if ( soldOutTicketPage && soldOutTicketPage.classList.contains('hide') === true ){
        // 一開始 classlist 會先含有 hide，之後接到資料 KKTIX 才會把它取消
        console.log( soldOutTicketPage.classList)
        console.log("sold out");
        // location.reload() 
    }


    // Class =  register-status register-status-OUT_OF_STOCK
	// class = alert-wrapper alert-warning align-center
 	// 	class = alert

    // if(!ticketType) ticketType = 0
    // if(!ticketNumber) ticketNumber = 1
    // console.log( chrome.extension.getBackgroundPage().window.ticketType )
    // console.log("ready to if")
    // console.log("ticketType and ticketNumber in buyTicket", ticketType, ticketNumber);

    // console.log(ticType, ticNumber);
    let Tickets = document.querySelectorAll('.btn-default.plus')
    if (Tickets.length < 1) return setTimeout(function () { 
        buyTicket() 
        // 已售完也會
        console.log("not get element");
    }, reloadTime)
    console.log("get Element")


    //  幾張
    // 哪一張
    // for (let i = 0; i < ticketNumber; i++) {

    //     Tickets[ticketType].click()
    // }
    // if(ticketType || ticketType === 0 && Tickets[ticketType-1] ){ // undefined 可以進來？
    if( typeof(ticketType) === 'number' && Tickets[ticketType-1] ){
        // ticketType 是一個鬼東東 event
        console.log('ticketType is :', ticketType);
        Tickets[ticketType-1].click()

    }else{
        let allTicketElem = document.getElementsByClassName('ticket-unit ng-scope')

        // 第一種票卷是不是已售完
        if(
            allTicketElem[0].getElementsByClassName('ticket-quantity')[0].innerText !== '已售完'
        ){
            Tickets[0].click()
            Tickets[0].click()
            Tickets[0].click()
            Tickets[0].click()
        } else if(             
            allTicketElem[allTicketElem.length -1].getElementsByClassName('ticket-quantity')[0].innerText !== '已售完'
        ){
            Tickets[Tickets.length -1].click()
            Tickets[Tickets.length -1].click()
            Tickets[Tickets.length -1].click()
            Tickets[Tickets.length -1].click()
        } else{
            if(Tickets[whichTicketType]){
                Tickets[whichTicketType].click()
                Tickets[whichTicketType].click()
                Tickets[whichTicketType].click()
                Tickets[whichTicketType].click()
                // Tickets[0].click()
                // Tickets[0].click()
        
            }
        }

        console.log(allTicketElem);
        console.log("no ticketType");
    }

    // col-6 form-control ng-valid ng-touched ng-not-empty ng-pristine 
    // col-6 form-control ng-valid ng-touched ng-dirty ng-valid-parse ng-empty
    // col-6 form-control ng-valid ng-touched ng-dirty ng-valid-parse ng-not-empty
    // col-6 form-control ng-valid ng-touched ng-dirty ng-valid-parse ng-empty
    // col-6 form-control ng-pristine ng-untouched ng-valid ng-empty
    // col-6 form-control ng-pristine ng-valid ng-empty ng-touched
    let answerInput = document.querySelector('.col-6.form-control.ng-valid')
    if (answerInput) answerInput.focus()
    // IF NO click 下一步?
    
    if(answer.length> 0 && answerInput){
        
        answerInput.value = answer
        var event = new Event('change');
        // 監聽事件
        // elem.addEventListener('build', function (e) { ... }, false);
        // 觸發事件
        answerInput.dispatchEvent(event);
    }

     
    
    // answerInput.value = "C"

    // focuses on a form field element even if it has tabIndex
    // must set tabIndex doesn't equal to -1


    let checkAgreeInput = document.querySelector('#person_agree_terms')
    // because click has monitored eventListener
    checkAgreeInput.click()
    // checkAgreeInput.checked=true

    // 選位 這鳩真的看手塑了
    // 完成選位


    // await

    // 和 Enter 作連動
    let nextStepButton = document.querySelector('.btn.btn-primary.btn-lg.ng-isolate-scope')
    if(nextStepButton){
        // nextStepButton.click()

        const fillAnswerAgain = ()=>{
            console.log(answerInput);
            if (answerInput.disabled == true ){
                return setTimeout(() => { fillAnswerAgain() }, reloadTime)
            }
            answerInput.focus()
        }

        let wrongAnswerAlert = document.querySelectorAll('.custom-captcha-inner .ng-binding')
        if(wrongAnswerAlert[0]) fillAnswerAgain()
    }
    // if(nextStepButton) nextStepButton.click()
    document.onkeydown = function (e) {  //對整個頁面文件監聽 
        if (e.keyCode == 13) {
            nextStepButton.click()

            const fillAnswerAgain = ()=>{
                console.log(answerInput);
                if (answerInput.disabled == true ){
                    return setTimeout(() => { fillAnswerAgain() }, reloadTime)
                }
                answerInput.focus()
            }

            let wrongAnswerAlert = document.querySelectorAll('.custom-captcha.ng-scope.error') // custom-captcha ng-scope error
            // 不一定馬上抓得到
            console.log(wrongAnswerAlert);
            // .custom-captcha-inner
            // .ng-binding

            // let wrongAnswerAlert = document.querySelectorAll('.custom-captcha-inner .ng-binding')
            // console.log(wrongAnswerAlert, wrongAnswerAlert[0]);

            // if(wrongAnswerAlert[0]) 
            fillAnswerAgain()
            

        }
    };
}

// document.addEventListener('DOMContentLoaded', function(){
//     buyTicket()
// });



window.onload = buyTicket

const handleBuyTicket = (ticketObj) => {
    console.log(ticketObj);
    buyTicket(ticketObj.ticketType, ticketObj.ticketNumber)
}

chrome.runtime.onMessage.addListener(handleBuyTicket)



//     // if (chrome.storage && chrome.storage.sync){
//     //     console.log( chrome.storage.sync.get(null));

//     // } else {
//     //     console.log("no chrome storage");
// }





//  答案是 c
//  打 api 去後台驗證答案 (xhr)
// https://queue.kktix.com/queue/yjyy-efl132?authenticity_token=czxXD9%2BodLs68KLJHW7km417ygexYw%2B2eVWQmS7ZDLN%2FLxVmKijm8X0PaPbkeO5m%2Bi%2FnQ3uarkuucqvhEm1xrA%3D%3D