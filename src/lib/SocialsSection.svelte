<script lang="ts">
    import { onMount } from 'svelte';
    import { getMetadata } from '../utils';
    import Discord from './icons/discord.svelte';
    import Github from './icons/github.svelte';
    import Letter from './icons/Letter.svelte';
    import Reddit from './icons/reddit.svelte';
    import SocialElement from './SocialElement.svelte';

    let data: Metadata | undefined;

    onMount(async () => {
        data = await getMetadata();
    });

</script>

<section id="socials">
    <div>
        <div data-animate-container class="fade left">
            <h2>Socials</h2>
            {#if data}
                <SocialElement name="GitHub" link={`https://github.com/${data.socials.github}`} index={0}>
                    <Github />
                </SocialElement>

                <SocialElement name="Reddit" link={`https://reddit.com/u/${data.socials.reddit}`} index={1}>
                    <Reddit />
                </SocialElement>

                <SocialElement name="Discord" link={'https://discord.gg/nvCdrr5r2a'} index={2}>
                    <Discord />
                </SocialElement>

                <SocialElement name="Email" link={`mailto:${data.socials.email}`} index={3}>
                    <Letter />
                </SocialElement>
            {/if}
        </div>
    </div>
</section>

<style>
    section {
        padding-top: 100px;
        box-sizing: border-box;
        min-height: 100vh;
        height: auto;
        font-family: 'Poppins';
    }

    section > div {
        display: flex;
        flex-direction: column;
        width: 70vw;
        padding: 50px 120px;
        max-width: 70vw;
    }

    section > div > div {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    h2 {
        margin-bottom: 20px;
    }
</style>
