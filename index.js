const observe = new IntersectionObserver((entries) => {
    entries.forEach((el) => { 
        if(el.isIntersecting) {
            el.target.classList.add('visible');
            setTimeout(() => el.target.classList.remove('anim'), 1200);
        }
    });
})

document.querySelectorAll('.anim').forEach((el) => observe.observe(el));

window.onscroll = () => {
    for(let i = 0; i < document.querySelectorAll('.scroll').length; i++) {
        const el = document.querySelectorAll('.scroll').item(i);
        const scrollTop = document.documentElement.scrollTop;
        const distTop = 100 + window.pageYOffset + el.getBoundingClientRect().top - el.getBoundingClientRect().height;

        let opacity = 1;

        if(scrollTop > distTop) {
            opacity -= (scrollTop - distTop) / el.clientHeight;
        }

        if(opacity >= 0) {
            el.style.opacity = opacity;
        }
    }
}
