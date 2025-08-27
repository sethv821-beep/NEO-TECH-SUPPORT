// Update year
document.getElementById('year').textContent = new Date().getFullYear();

// Open Privacy dialog
const dlg = document.getElementById('policy');
document.getElementById('policyLink').addEventListener('click', (e)=>{
  e.preventDefault();
  dlg.showModal();
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  })
});