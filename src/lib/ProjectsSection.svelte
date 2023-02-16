<script lang="ts">
    import { onMount } from 'svelte';
    import { getMetadata } from '../utils';
    import ProjectCard from './ProjectCard.svelte';

    const fetchText = async (url: string) => (await fetch(url)).text();
    let data: Metadata | undefined;

    onMount(async () => {
        data = await getMetadata();
    });

</script>
<section id="projects">
    <div>
        <h2 data-animate class="fade left" style="transition-delay: 500ms;">Projects</h2>
        <div data-animate-container class="fade left" data-animate-delay="800">
            {#if data}
                {#each data.projects as item, index}
                    <ProjectCard name={item.name} imgSrc={item.thumbnail} link={item.link} index={index}>
                        {#each item.icons as icon}
                            {#await fetchText(data.icons[icon])}
                                <svg></svg>
                            {:then svg}
                                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                                {@html svg}
                            {/await}
                        {/each}
                    </ProjectCard>
                {/each}
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
        /* background: linear-gradient(231.63deg, rgba(233, 79, 79, 0.4) 0%, rgba(255, 255, 255, 0.12) 66.49%); */
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
        flex-direction: row;
        flex-wrap: wrap;
    }

    section > div > h2 {
        margin: 20px;
    }

    @media only screen and (max-width: 800px) {
        section {
            padding: 90px 0;
        }
        section > div {
            padding: 0;
            width: 100vw;
            max-width: 100vw;
        }
        section > div > div {
            justify-content: center;
        }
    }

</style>
