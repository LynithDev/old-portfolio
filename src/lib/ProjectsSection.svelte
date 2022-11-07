<script>
    import FigmaIcon from './icons/FigmaIcon.svelte';
    import SassIcon from './icons/SassIcon.svelte';
    import SvelteIcon from './icons/SvelteIcon.svelte';
    import TypeScriptIcon from './icons/TypeScriptIcon.svelte';
    import ProjectCard from './ProjectCard.svelte';

    const projects = [
        {
            name: 'This website',
            icons: [SvelteIcon, TypeScriptIcon, FigmaIcon],
            image: '/img/lynith.png',
            link: '#',
        },
        {
            name: 'Webimate',
            icons: [TypeScriptIcon, SassIcon],
            image: '/img/webimate.png',
            link: 'https://github.com/LynithDev/webimate-lib',
        },
    ];
</script>
<section id="projects">
    <div>
        <h2 data-animate class="fade left" style="transition-delay: 500ms;">Projects</h2>
        <div data-animate-container class="fade left" data-animate-delay="800">
            {#each projects as item}
                <ProjectCard name={item.name} imgSrc={item.image} link={item.link}>
                    {#each item.icons as icon}
                        <svelte:component this={icon} />
                    {/each}
                </ProjectCard>
            {/each}
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
