const boxes = document.querySelectorAll('.content-box');
const show = document.querySelector('.show');

window.addEventListener('scroll', checkbox);

checkbox();

function checkbox(){
    const trigglebox = window.innerHeight/5*4;

    //or:boxes.forEach(box=>{})
    boxes.forEach(function(box){
        const top = box.getBoundingClientRect().top;
        if(top < trigglebox){
            box.classList.add('show')
        }
        else{
            box.classList.remove('show')
        }
    })
}


//js:
//*getboundingclientrect:
//https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect
//*foreach function
//* window.addEventListener
//window.innerHeight: https://www.w3schools.com/js/js_window.asp
//css: 
//*box-shadow:
//https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow