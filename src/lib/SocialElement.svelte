<script lang="ts">
    let div: HTMLDivElement;
    export let link: string;
    export let name: string;
    export let color: string;
</script>

<div bind:this={div}>
    <a href={link} style={`color: ${color};`} data-name={name}>
        <slot />
    </a>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 25px;
    }

    a {
        text-decoration: none;
        position: relative;
        height: 52px;
    }

    a > :global(svg) {
        width: 52px;
        height: 52px;
        position: relative;
        background-color: white;
        border-radius: 100%;
        border: none;
    }

    a:hover ~ :global(a) {
        z-index: 1;
    }

    a:hover { z-index: 3; }

    a::before {
        content: attr(data-name);
        font-size: 1.2rem;
        font-weight: 600;
        position: absolute;
        top: 50%;
        height: 100%;
        left: -10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        padding: 10px;
        padding-right: 14px;
        opacity: 0;
        transform: translateY(-50%);
        transition: 0.3s;
        border-radius: 100rem;
        background-color: white;
        z-index: -1;
        text-align: right;
        font-size: 24px;
        color: attr(data-color);
        pointer-events: none;
    }

    a:hover::before {
        opacity: 1;
        pointer-events: all;
        padding-left: 70px;
        /* z-index: 2; */
    }

    a:hover > :global(svg) {
        z-index: 3;
        position: relative;
        background: white;
    }

    a:hover {
        cursor: pointer;
    }
</style>
