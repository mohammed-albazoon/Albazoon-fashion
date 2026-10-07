let login = document.querySelector('.login');
let span = document.querySelector('form span');
let btn = document.querySelector('.main a');
let pr = document.querySelectorAll('.pr');
let head = document.querySelector('.head');
let conta = document.querySelector('.watches .container');
let imgg = document.querySelectorAll('.imgg');
let brk = document.querySelectorAll('.break i');
let head2 = document.querySelector('.head2');
let par = document.querySelectorAll('.parent-cont p');
let per = document.querySelectorAll('.parent-cont a');
let shirt = document.querySelector('.shirts .container');
let shoes = document.querySelector('.shoes .container');
let pra = document.querySelectorAll('.pra-cont');
let head3 = document.querySelector('.head3');
let sho = 0;
let sho2 = 0;
let cont1 = document.querySelectorAll('.cont-1 button');


window.onscroll = function(){
    cont1.forEach(s => s.classList.toggle('show-1', scrollY > 620));
    pr.forEach(s => s.classList.toggle('show-2', scrollY > 628));
    head.classList.toggle('show-3', scrollY > 628);
    if(scrollY > 427){
        conta.style.left = "0";
    }
    if(scrollY > 2600){
        head2.style.transform = " rotate(-60deg) scale(1,1)";
    }else{
        head2.style.transform = " rotate(-60deg) scale(0,0)";
    }
    if(scrollY > 2650){
        par.forEach(s => s.style.color = "#2f3542");
    }else{
        par.forEach(s => s.style.color = "#fff");
    }
    if(scrollY > 2650){
        per.forEach(s => s.style.color = "#fff");
        per.forEach(s => s.style.background = "#2f3542");
    }else{
        per.forEach(s => s.style.color = "#fff");
        per.forEach(s => s.style.background = "#fff");
    }
    if(scrollY > 2650){
        shirt.style.right = "0%" /*; */
    }
    if(scrollY > 5900){
        shoes.style.left = "0%"
        pra.forEach(s => s.style.transform = "scale(1,1)");
        head3.style.transform = "rotate(-60deg) scale(1,1)";
    }

}
span.onclick = function(){
    login.style.opacity = '0';
    login.style.visibility = "hidden";    
}
btn.onclick = function(){
    login.style.opacity = '1';
    login.style.visibility = "visible";
}
function kok(){
    if(sho == imgg.length-1){
        sho = 0;
    }else{
        sho++;
    }
    imgg.forEach(s => s.classList.remove('sho'))
    imgg[sho].classList.add('sho');
    setTimeout(kok, 1500);

}
kok();
function add2(){
    if(sho2 == brk.length-1){
        sho2 = 0;
    }else{
        sho2++;
    }
    brk.forEach(s => s.classList.remove('sho2'))
    brk[sho2].classList.add('sho2');
    setTimeout(add2, 10);

}
add2();
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
