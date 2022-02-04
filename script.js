const minImg = document.querySelector('.min_img');
const bigImg = document.querySelector('.big_img');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const countSum = document.querySelector('.sum');

const header = document.querySelector('.wrapper_header');

const like = document.querySelector('.like');
const cart = document.querySelector('.cart');
const message = document.querySelector('.message');

const erRed= document.querySelector('.error');
const cleanForm = document.querySelector('.clean');
const formEmail = document.getElementById('.form_email');
const email=document.getElementById('email');
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let scrolled = 0;


//click on images
bigImg.style.backgroundImage="url(img/yellow.png)"

minImg.addEventListener('click',function(e){  
    const clothesImgs = document.querySelectorAll('.clothes');
    const target=e.target  
    
    for(let i = 0;i<clothesImgs.length;i++){
        minImg.children[i].classList.remove('active');
      }
    
    target.classList.add('active');
    const act = document.querySelector('.active').getAttribute('src')
    bigImg.style.backgroundImage="url("+act +")"
      
   
})

//buttons count

let count=1

plus.addEventListener('click',(e)=>{
    count++
    countSum.innerHTML=count
})
minus.addEventListener('click',(e)=>{
    if(count>1){
        count--
        countSum.innerHTML=count
    }else{
        count=1
    }
    
})

//header scroll

const scrollPosition = () => window.pageYOffset||document.documentElement.scrollTop
const headerActiv=()=>header.classList.contains('header_active')
window.addEventListener("scroll", ()=>{
    
    if(scrollPosition() > scrolled && !headerActiv()){
        header.classList.add('header_active')
    }
    else if(scrollPosition() < scrolled){
        header.classList.remove('header_active')
    }
    scrolled=scrollPosition()
    
})
//like and basket
let mesWhen
const messageVisible= ()=>{
    message.classList.add('vis')
    
    if(count==1){
        message.innerHTML="Товар 'Пижама для девочек' в количестве 1 единицы добавлен в " + mesWhen + " "
    }
    else if(count>1){
        message.innerHTML="Товар 'Пижама для девочек' в количестве " + count + " единиц добавлен в " + mesWhen + " "
    }
    setTimeout(()=>{
        message.classList.remove('vis')
        },5000)
}
const mesLike=()=>{
    mesWhen="избранное"
    messageVisible()
}
const mesCart=()=>{
    mesWhen="корзину"
    messageVisible()
}

like.addEventListener("click",mesLike)
cart.addEventListener("click",mesCart)
cleanForm.addEventListener("click",()=>email.value='')

//validate email

function validateEmail() {
    
    if(email.value.match(re))
    {
        erRed.classList.remove('red')
    }
    else{
        erRed.classList.add('red')
    }
    if (email == "") {
        erRed.classList.remove('red')
    }

    
}