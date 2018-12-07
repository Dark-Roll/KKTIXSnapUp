
			// "matches" : ["https://kktix.com/events/*/registrations/new"],
// {/* <all_urls>  </all_urls> */} for test

function buyTicket () {

    console.log("ready to if")
    let Tickets = document.querySelectorAll('.btn-default.plus')
    if (Tickets.length < 1) return setTimeout(function () { buyTicket() }, 1300)
    console.log("get Element")
    
    //  幾張
    // 哪一張
    Tickets[0].click()

    // col-6 form-control ng-valid ng-touched ng-not-empty ng-pristine 
    // col-6 form-control ng-valid ng-touched ng-dirty ng-valid-parse ng-empty
    // col-6 form-control ng-valid ng-touched ng-dirty ng-valid-parse ng-not-empty
    // col-6 form-control ng-valid ng-touched ng-dirty ng-valid-parse ng-empty
    // col-6 form-control ng-pristine ng-untouched ng-valid ng-empty
    // col-6 form-control ng-pristine ng-valid ng-empty ng-touched
    let answerInput = document.querySelector('.col-6.form-control.ng-valid')
    if (answerInput) answerInput.focus()
    // IF NO click 下一步?
    // answerInput.value = "C"

    // focuses on a form field element even if it has tabIndex
    // must set tabIndex doesn't equal to -1


    let checkAgreeInput = document.querySelector('#person_agree_terms')
    checkAgreeInput.click()
    // checkAgreeInput.checked=true

    // 選位 這鳩真的看手塑了
    // 完成選位

    // 和 Enter 作連動
    let nextStepButton = document.querySelector('.btn.btn-primary.btn-lg.ng-isolate-scope')
    // if(nextStepButton) nextStepButton.click()
    document.onkeydown = function (e) {  //對整個頁面文件監聽 
        if (e.keyCode == 13) {
            nextStepButton.click()
        }
    };
}

// chrome.webNavigation.onCompleted.addListener(buyTicket)
// document.addEventListener('DOMContentLoaded', function(){
//     buyTicket()
// });
window.onload = buyTicket

function print(message){
    console.log(message);
}

// browser.
// chrome.runtime.onMessage(print)
// browser.
chrome.runtime.onMessage.addListener(print)
console.log("in content script");



//  答案是 c
//  打 api 去後台驗證答案 (xhr)
// https://queue.kktix.com/queue/yjyy-efl132?authenticity_token=czxXD9%2BodLs68KLJHW7km417ygexYw%2B2eVWQmS7ZDLN%2FLxVmKijm8X0PaPbkeO5m%2Bi%2FnQ3uarkuucqvhEm1xrA%3D%3D