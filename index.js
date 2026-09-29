// 导航平滑滚动
document.querySelectorAll('nav a').forEach(item=>{
    item.addEventListener('click',e=>{
        e.preventDefault();
        const targetId = item.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({behavior:'smooth'});
    })
})
