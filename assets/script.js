
const menuBtn=document.querySelector('.menu-btn');const links=document.querySelector('.links');if(menuBtn){menuBtn.addEventListener('click',()=>links.classList.toggle('open'))}
const observer=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-add]').forEach(btn=>btn.addEventListener('click',()=>{let n=document.querySelector('.cart-count');n.textContent=String((+n.textContent||0)+1);btn.textContent='ADDED ✓';setTimeout(()=>btn.textContent='ADD TO BAG',1200)}));
const filterBtns=document.querySelectorAll('[data-filter]');filterBtns.forEach(f=>f.addEventListener('change',()=>{const checked=[...filterBtns].filter(x=>x.checked).map(x=>x.value);document.querySelectorAll('.product').forEach(p=>{p.style.display=!checked.length||checked.includes(p.dataset.type)?'block':'none'})}));
