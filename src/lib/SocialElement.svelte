<script lang="ts">
    import { onMount } from 'svelte';

    let div: HTMLDivElement;
    export let index: number;
    export let link: string;
    export let name: string;

    onMount(() => {
        const delay = (div.getAttribute('data-animate-delay') ? parseInt(div.getAttribute('data-animate-delay')) : 0) + (div.parentElement.getAttribute('data-animate-delay') ? parseInt(div.parentElement.getAttribute('data-animate-delay')) : 0);
        div.style.transitionDelay = `${(400 * (index + 1)) + delay}ms`;
        window.observer.observe(div);
    });

</script>

<div bind:this={div}>
    <a href={link}>
        <slot />
        <span>{name}</span>
    </a>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        background: #FCF6F6;
        box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
        border-radius: 9px;
        padding: 8px 13px;
        font-size: 24px;
        margin: 6px 0;
        text-decoration: none;
    }

    a > :global(svg) {
        width: 32px;
        height: 32px;
        filter: brightness(0);
    }

    span {
        font-weight: 600;
        margin-left: 5px;
    }

    a:hover {
        opacity: 0.8;
        cursor: pointer;
    }
</style>
