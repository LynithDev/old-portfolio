import App from './App.svelte'

const app = new App({
    target: document.getElementById('app')
})

window.addEventListener('load', () => {
    const hash = window.location.hash
    if (hash) {
        const element = document.querySelector(hash)
        if (element) element.scrollIntoView()
    }
})

window.addEventListener('scroll', () => {
    document.getElementsByClassName('background')[0].style.backgroundPosition = `0% -${window.scrollY / 10}px`;

    for(let i = 0; i < document.querySelectorAll('.scroll').length; i++) {
        const element = document.querySelectorAll('.scroll')[i];
        const scroll = element.getBoundingClientRect().top - window.innerHeight / 2;

        if (scroll < 0) {
            element.style.transform = `translateY(-${Math.abs(scroll / 10)}px)`
        }
    }
})

export default app;
