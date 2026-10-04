document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(window.innerWidth<851){const target=document.querySelector(a.getAttribute('href'));if(target)window.scrollTo({top:target.offsetTop-65,behavior:'smooth'})}}));
