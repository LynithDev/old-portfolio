window.observer = new IntersectionObserver((e) => {
    e.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.setAttribute('data-in-view', 'true');
            window.observer.unobserve(entry.target);
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const elements: Element[] = [];

    elements.push(...document.querySelectorAll('[data-animate]'));
    document.querySelectorAll('[data-animate-container]').forEach((container) => {
        for (let i = 0; i < container.children.length; i++) {
            const el = (container.children[i] as HTMLElement);
            const delay = (el.getAttribute('data-animate-delay') ? parseInt(el.getAttribute('data-animate-delay')) : 0) + (container.getAttribute('data-animate-delay') ? parseInt(container.getAttribute('data-animate-delay')) : 0);
            el.style.transitionDelay = `${(400 * (i + 1)) + delay}ms`;
        }
        elements.push(...container.children);
    });

    elements.forEach((element) => {
        window.observer.observe(element);
    });
});

export {};
