(function(){
var t=document.querySelector('.navtoggle'),m=document.getElementById('mobilemenu');
if(!t||!m)return;
t.addEventListener('click',function(){var o=m.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');t.setAttribute('aria-label',o?'Close menu':'Open menu');});
window.addEventListener('resize',function(){if(window.innerWidth>900){m.classList.remove('open');t.setAttribute('aria-expanded','false');}});
})();
