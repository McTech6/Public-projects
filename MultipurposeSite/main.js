//change nav style on scroll

window.addEventListener('scroll', ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY>0);
})


//faq

const faqs= document.querySelector('.faq');
faqs.forEach(faq=>{
    faq.addEventListener('click', ()=>{
       faq.classList.toggle('open'); 
    })
})