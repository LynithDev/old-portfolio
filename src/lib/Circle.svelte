<script lang="ts">
    export let bottom = false;
    export let right = false;
</script>

<div class:bottom class:right></div>

<style>
    div {
        width: 60vw;
        height: 60vw;
        border-radius: 100%;
        position: absolute;
        background: rgba(251, 251, 251, 0.3);
        box-shadow: -4px -4px 30px rgba(255, 255, 255, 0.1), inset 7px 6px 50px rgba(255, 255, 255, 0.25);
        animation-name: anim;
        animation-duration: 12s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        z-index: -1;
    }

    .bottom { bottom: -30vw; }
    .right { right: -30vw; }

    @keyframes anim {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        50% {
            opacity: 0.7;
            transform: scale(1.05);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }

    @media only screen and (max-width: 800px) {
        div {
            width: 80vw;
            height: 80vw;
            bottom: -20vw;
        }
    }
</style>
