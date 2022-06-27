import App from './App.svelte'

const app = new App({
    target: document.getElementById('app')
})

window.addEventListener('load', () => {
    const hash = window.location.hash;
    if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView();
    }
})

export default app;
