<script lang="ts">
    import { onMount } from 'svelte';
    import { getMetadata } from '../utils';
    import Discord from './icons/discord.svelte';
    import Github from './icons/github.svelte';
    import Letter from './icons/Letter.svelte';
    import Reddit from './icons/reddit.svelte';
    import SocialElement from './SocialElement.svelte';

    let data: Metadata | undefined;
    let div: HTMLDivElement;

    $: getMetadata().then((metadata) => {
        try {
            data = metadata;
            for (let i = 0; i < div.children.length; i++) {
                const el = (div.children[i] as HTMLElement);
                const delay = (el.getAttribute('data-animate-delay') ? parseInt(el.getAttribute('data-animate-delay')) : 0) + (div.getAttribute('data-animate-delay') ? parseInt(div.getAttribute('data-animate-delay')) : 0);
                el.style.transitionDelay = `${(400 * (i + 1)) + delay}ms`;
                window.observer.observe(el);
            }
        } catch (e) {
        // console.error(e);
        }
    });

    const selectEmail = (e: MouseEvent & { currentTarget: EventTarget & HTMLDivElement; }) => {
        const el = e.currentTarget;

        const spans = el.children;
        const range = document.createRange();
        range.selectNodeContents(spans[0]);
        range.setEnd(spans[2], 1);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
    };

</script>

<section id="socials">
    <div>
        {#if data}
            <div bind:this={div} data-animate-container class="fade top">
                <h2>Socials</h2>
                <div>
                    <SocialElement name="GitHub" link={`https://github.com/${data.socials.github}`} color="#171515" >
                        <Github />
                    </SocialElement>

                    <SocialElement name="Reddit" link={`https://reddit.com/u/${data.socials.reddit}`} color="#FF5700" >
                        <Reddit />
                    </SocialElement>

                    <SocialElement name="Discord" link={'https://discord.gg/Pw9xvu3fwV'} color="#5865F2" >
                        <Discord />
                    </SocialElement>
                </div>

                <h2>Contact me</h2>
                <div on:click={(e) => selectEmail(e)} class="email">
                    <span>{data.socials.email.split('@')[0]}</span><span>@</span><span>{data.socials.email.split('@')[1]}</span>
                </div>
            </div>
        {/if}
    </div>
</section>

<style>
    section {
        padding-top: 100px;
        box-sizing: border-box;
        min-height: 100vh;
        height: auto;
        font-family: 'Poppins';
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .email {
        font-size: 0;
    }

    .email > span {
        color: #635B5B;
        font-size: 22px;
    }

    .email > span:first-child {
        color: #DB4949;
        font-weight: 600;
    }

    .email > span:last-child {
        color: #4983DB;
        font-weight: 600;
    }

    section > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 70vw;
        padding: 50px 120px;
        max-width: 70vw;
    }

    section > div > div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    section > div > div > div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
    }

    h2 {
        margin: 20px 0;
        text-align: center;
    }
</style>
