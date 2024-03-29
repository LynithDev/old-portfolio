<script lang="ts">
    import { onMount } from 'svelte';
    import Github from './icons/github.svelte';
    import InfoIcon from './icons/InfoIcon.svelte';

    export let name: string;
    export let imgSrc: string;
    export let link: string;
    export let github: string = '';

    export let index: number;
    let div: HTMLDivElement;

    onMount(() => {
        const delay = (div.getAttribute('data-animate-delay') ? parseInt(div.getAttribute('data-animate-delay')) : 0) + (div.parentElement.getAttribute('data-animate-delay') ? parseInt(div.parentElement.getAttribute('data-animate-delay')) : 0);
        div.style.transitionDelay = `${(400 * (index + 1)) + delay}ms`;
        window.observer.observe(div);
    });
</script>

<div bind:this={div}>
    <div>
        <h3>{name}</h3>
        <span>
            <slot />
        </span>
    </div>
    <a href={link}>
        <img src={imgSrc} alt={`Screenshot of ${name}`}>
        {#if github && github != ''}
            <a href={github}>
                <Github />
            </a>
        {/if}
        <InfoIcon />
    </a>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 320px;
        max-width: 320px;
        max-height: 270px;
        box-sizing: border-box;
        margin: 20px;
        margin-right: 26px;
    }

    a:hover {
        opacity: 0.8;
        cursor: pointer;
    }

    span {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        height: 100%;
    }

    span > :global(svg) {
        width: 18px;
        height: 18px;
        margin: 2px;
    }

    div > div, div > a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: #FCF6F6;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        border-radius: 9px;
        padding: 8px;
        font-size: 16px;
        margin: 6px 0;
        box-sizing: border-box;
    }

    div > div:first-child {
        text-align: left;
        align-items: flex-start;
        padding: 8px 12px;
        flex-direction: row;
    }

    div > div:first-child > *:last-child {
        flex: 1;
    }

    /* div > a:last-child {
        position: relative;
        height: 100%;
    } */

    img {
        width: 100%;
        object-fit: cover;
        border-radius: 8px;
        aspect-ratio: 16/9;
    }

    div > a > :global(svg), div > a > a {
        width: 20px;
        height: 20px;
        position: absolute;
        bottom: 20px;
        right: 20px;
    }

    div > a > a {
        background: #FCF6F6;
    }

    div > a > a {
        right: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
    }

    div > a > a > :global(svg) {
        filter: brightness(0);
        bottom: 22px;
        width: 16px;
        height: 16px;
    }

    @media only screen and (max-width: 800px) {
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-width: 90vw;
            max-width: 90vw;
            max-height: none;
            box-sizing: border-box;
            margin: 2vh 4vw;
        }
        img {
            height: 100%;
        }
    }

</style>
