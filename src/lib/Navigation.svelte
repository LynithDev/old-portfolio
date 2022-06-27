<script>
    import { onMount } from "svelte";
    let navbar;
    const buttons = [ "home", "code", "contact" ];

    window.addEventListener("scroll", () => {
        if (window.customscrollofftestingpurposes) return;
        let current = "";

        document.querySelectorAll("section").forEach((section) => {
            if (scrollY >= section.offsetTop - 60) current = section.getAttribute("id");
        })

        // if (current == "" || current == undefined || current == null) {
        //     removeActive();
        //     document.querySelector(`a[data-name]`).classList.add("active");
        //     return;
        // }

        document.querySelectorAll(`a[data-name]`).forEach((btn) => {
            btn.classList.remove("active");
            if (btn.getAttribute("data-name") == current) btn.classList.add("active");
        });
    }, { passive: true })

    onMount(() => {
        if (location.hash && buttons.filter((btn) => `#${btn.toLowerCase()}` == location.hash.toLowerCase()).length > 0) {
            document.querySelector(`[data-name="${location.hash.substring(1)}"`).classList.add("active");
        } else {
            document.querySelector(`[data-name="${buttons[0]}"`).classList.add("active");
            window.scrollTo(0, 0);
        }
    })
</script>

<nav bind:this={navbar} class="navbar">
    <a href="#home" data-name="home"><i class="bx bx-home" /></a>
    <a href="#code" data-name="code"><i class="bx bx-code" /></a>
    <a href="#contact" data-name="contact"><i class="bx bx-envelope" /></a>
</nav>

<style>
    .navbar {
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 4vh;
        left: 50%;
        z-index: 999;
        opacity: 0;
        transform: translate(-50%, -100%);
        animation-name: fadeInDown;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-delay: 0.5s;
    }

    .navbar a {
        width: 70px;
        height: 70px;
        margin: 20px;
        border-radius: 100%;
        outline: none;
        border: none;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.2s;
        background: #fefefe;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
    }

    .navbar a:hover {
        filter: brightness(0.92);
        cursor: pointer;
    }

    .navbar :global(a.active) {
        width: 90px;
        height: 90px;
        margin: 10px;
        background: linear-gradient(135deg, rgba(233, 79, 79, 0.8) 0%, #e94f4f 100%);
    }

    .navbar a.active i {
        color: white;
        font-size: 40px;
    }

    .navbar a i {
        font-size: 22px;
        transition: all 0.2s ease;
    }

    @media only screen and (max-width: 800px) {
        .navbar a {
            width: 50px;
            height: 50px;
            margin: 10px;
        }
        .navbar :global(a.active) {
            width: 60px;
            height: 60px;
            margin: 5px;
        }
        .navbar a.active i {
            font-size: 24px;
        }
        .navbar a i {
            font-size: 16px;
        }
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translate(-50%, -100%);
        }

        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }

</style>
