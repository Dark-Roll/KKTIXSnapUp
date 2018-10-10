
const buyTicket = ()=> {

    console.log("ready to if")
    let addOneTicket = document.querySelector('.btn-default.plus')
    if(!addOneTicket) return setTimeout( function(){ buyTicket()},500)
    console.log("exist1")
    addOneTicket.click()
    //  幾張
    console.log(addOneTicket)
    // col-6 form-control ng-valid ng-touched ng-not-empty ng-pristine 
    // col-6 form-control ng-valid ng-touched ng-dirty ng-valid-parse ng-empty
    // col-6 form-control ng-valid ng-touched ng-dirty ng-valid-parse ng-not-empty
    // col-6 form-control ng-valid ng-touched ng-dirty ng-valid-parse ng-empty
    let answerInput = document.querySelector('.col-6.form-control.ng-valid')
    formItemFocus(answerInput)
    // answerInput.value = "C"
    // col-6 form-control ng-pristine ng-untouched ng-valid ng-empty
    // col-6 form-control ng-pristine ng-valid ng-empty ng-touched

/**
 * focuses on a form field element even if it has tabIndex
 * @param  {DOM object} item [description]
 */
    function formItemFocus(item) {
        if (!item) {
            console.warn('no focusable item: ', item)
            return;
        }

        var savedTabIndex = item.getAttribute('tabindex');
        item.setAttribute('tabindex', '-1');
        item.focus();
        item.setAttribute('tabindex', savedTabIndex);
    }

    // checked 
    // ng-valid ng-dirty ng-valid-parse ng-touched ng-not-empty
    // ng-valid ng-dirty ng-valid-parse ng-touched ng-empty
    let checkAgreeInput = document.querySelector('#person_agree_terms')
    checkAgreeInput.click()
    // checkAgreeInput.checked=true

    // 選位 這鳩真的看手塑了
    // 完成選位

    // 和 Enter 作連動

    let nextStepButton = document.querySelector('.btn.btn-primary.btn-lg.ng-isolate-scope')
    
    //實際使用 
    document.onkeydown = function (e) {  //對整個頁面文件監聽 
        var keyNum = window.event ? e.keyCode : e.which;  //獲取被按下的鍵值 
        //判斷如果使用者按下了回車鍵（keycody=13） 
        if (e.keyCode == 13) {
            
            nextStepButton.click()
        }
        
        
    };
}

// close
console.log("ready ?")
// chrome.webNavigation.onCompleted.addListener(buyTicket)
// document.addEventListener('DOMContentLoaded', function(){
//     buyTicket()
// });
// console.log("run ")
window.onload = buyTicket



//  答案是 c
//  打 api 去後台驗證答案 (xhr)
// https://queue.kktix.com/queue/yjyy-efl132?authenticity_token=czxXD9%2BodLs68KLJHW7km417ygexYw%2B2eVWQmS7ZDLN%2FLxVmKijm8X0PaPbkeO5m%2Bi%2FnQ3uarkuucqvhEm1xrA%3D%3D