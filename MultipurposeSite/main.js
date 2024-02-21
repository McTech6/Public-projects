//change nav style on scroll
/*
window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0);
})


//faq

const faqs= document.querySelector('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
       faq.classList.toggle('open'); 
    })
})*/

const menu=document.querySelector('.nav-menu');
const openBtn= document.querySelector('.open-menu-btn')
const closeBtn= document.querySelector('.close-menu-btn');



openBtn.addEventListener('click', ()=>{
    menu.style.setProperty('display', 'flex');
    closeBtn.style.setProperty('display', 'inline-block');
    openBtn.style.setProperty('display', 'none');
     
})

closeBtn.addEventListener('click',()=>{
    menu.style.setProperty('display', 'none');
    openBtn.style.setProperty('display', 'inline');
    closeBtn.style.setProperty('display', 'none');
})