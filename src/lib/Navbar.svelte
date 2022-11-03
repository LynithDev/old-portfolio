<script lang="ts">
    import { onMount } from 'svelte';

    let underline: HTMLSpanElement;
    let list: HTMLUListElement;
    let active: HTMLAnchorElement;
    let navbar: HTMLElement;

    let tempTimeout = null;
    const updateLine = (noTimeout: boolean = false) => {
        const set = () => {
            underline.style.left = `${active.getBoundingClientRect().left + active.getBoundingClientRect().width / 4}px`;
            underline.style.width = `${active.getBoundingClientRect().width / 2}px`;
        };

        if (noTimeout) {
            set();
            return;
        }

        if (tempTimeout) clearTimeout(tempTimeout);
        tempTimeout = setTimeout(set, 200);
    };

    const clickLink = (el: HTMLAnchorElement) => {
        active.classList.remove('active');
        el.classList.add('active');
        active = el;
        window.history.replaceState(null, null, `${el.href}`);
        updateLine();
    };

    let scrollTimeout = null;

    const scroll = () => {
        navbar.classList[window.scrollY > 100 ? 'add' : 'remove']('floating');

        document.querySelectorAll('section').forEach((section) => {
            if (section.getBoundingClientRect().top - window.scrollY <= 0) {
                if (scrollTimeout) clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    switch (section.id) {
                    case 'projects':
                        clickLink(navbar.querySelectorAll('a')[1]);
                        break;
                    default:
                        clickLink(navbar.querySelectorAll('a')[0]);
                        break;
                    }
                }, 150);
            }
        });
    };

    onMount(() => {
        active = list.querySelector('a.active');
        updateLine(true);
        underline.style.transition = '0.3s';
        list.querySelectorAll('a').forEach((el) => {
            if (el.getAttribute('data-no-underline') == 'true') return;

            el.addEventListener('click', (e) => clickLink((e.target) as HTMLAnchorElement));
        });
        window.addEventListener('resize', () => updateLine());

        window.addEventListener('scroll', () => scroll());
    });
</script>

<nav bind:this={navbar} class="fade top" data-animate>
    <span>Lynith</span>
    <ul bind:this={list}>
        <li> <a class="active" href="#home">Home</a> </li>
        <li> <a href="#projects">Projects</a> </li>
        <li> <a data-no-underline="true" href="https://ko-fi.com/lynith/commissions">Commissions</a> </li>
        <span class="underline" bind:this={underline}></span>
    </ul>
</nav>

<style>

    nav {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        min-height: 100px;
        transition: 0.3s;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100px;
        z-index: 100;
    }

    ul {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    li {
        font-family: 'Manrope';
        font-size: 16px;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        margin: 20px;
        min-width: 130px;
    }

    a {
        font-size: 18px;
        text-decoration: none;
        font-weight: 600;
        transition: 0.3s;
        height: 100%;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    nav > span {
        font-size: 32px;
        font-family: 'Manrope';
        font-weight: 800;
        position: absolute;
        left: 80px;
    }

    .underline {
        height: 2px;
        position: absolute;
        bottom: 30%;
        left: 0;
        background-color: #DB4949;
        transition: 0s;
    }

    .active {
        font-weight: 900;
    }

    nav:global(.floating) {
        background-color: #FCF6F6;
        box-shadow: 0px 3px 6px 0px #00000033;
    }

    @media only screen and (max-width: 800px) {
        nav > span {
            display: none;
        }

        nav:global(.floating) {
            min-height: 60px;
            height: 60px;
        }

        nav > ul > li {
            min-width: auto;
        }
    }

</style>
