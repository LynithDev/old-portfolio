<script>
    import { onMount } from "svelte";
    let navbar;

    const removeAllActive = () => navbar === null ? null : navbar.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));

    const setupButton = (btn) => {
        btn.classList.remove("active");
        const name = btn.attributes.getNamedItem("data-name").value;
        if ((location.hash.substring(1) == '' && name == 'home' ) || name == location.hash.substring(1)) btn.classList.add("active");

        btn.addEventListener("click", () => {
            removeAllActive();
            btn.classList.add("active");
            location.hash = name;
        });
    };

    onMount(() => {
        navbar.querySelectorAll("button").forEach((btn) => setupButton(btn));

        let timer = undefined;
        window.addEventListener("scroll", (e) => {
            if(timer !== undefined) clearTimeout(timer);
            timer = setTimeout(() => {
                const sections = document.querySelectorAll("section");
                sections.forEach((section) => {
                    if (section.getBoundingClientRect().top < window.innerHeight / 2) {
                        removeAllActive();
                        const btn = navbar.querySelector(`button[data-name="${(section.id == '' ? 'home' : section.id)}"]`);
                        if (btn) btn.classList.add("active");

                        history.pushState(null, null, document.location.pathname + '#' + section.id);
                    }
                });
            }, 150)
        });
    });

    addEventListener("hashchange", () => {
        removeAllActive();
        navbar.querySelector(`button[data-name="${location.hash.substring(1)}"]`).classList.add("active");
    });
</script>

<nav bind:this={navbar} class="navbar">
    <button data-name="home" class="active"><i class="bx bx-home" /></button>
    <button data-name="code"><i class="bx bx-code" /></button>
    <button data-name="contact"><i class="bx bx-envelope" /></button>
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
        transform: translate3d(-50%, -100%, 0);
        animation-name: fadeInDown;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-delay: 0.5s;
    }

    .navbar button {
        width: 70px;
        height: 70px;
        margin: 20px;
        border-radius: 100%;
        outline: none;
        border: none;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
        transition: all 0.2s ease;
        background: #fefefe;
    }

    .navbar button:hover {
        filter: brightness(0.92);
        cursor: pointer;
    }

    .navbar button.active {
        width: 90px;
        height: 90px;
        margin: 10px;
        background: linear-gradient(
        135deg,
        rgba(233, 79, 79, 0.8) 0%,
        #e94f4f 100%
        );
    }

    .navbar button.active i {
        color: white;
        font-size: 40px;
    }

    .navbar button i {
        font-size: 22px;
        transition: all 0.2s ease;
    }

    @media only screen and (max-width: 800px) {
        .navbar button {
        width: 50px;
        height: 50px;
        margin: 10px;
        }
        .navbar button.active {
        width: 60px;
        height: 60px;
        margin: 5px;
        }
        .navbar button.active i {
        font-size: 24px;
        }
        .navbar button i {
        font-size: 16px;
        }
    }

    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translate3d(-50%, -100%, 0);
        }

        to {
            opacity: 1;
            transform: translate3d(-50%, 0, 0);
        }
    }

</style>
