<script lang="ts">
    import CoinIcon from './icons/CoinIcon.svelte';
    import HeartIcon from './icons/HeartIcon.svelte';
</script>

<section id="home">
    <div>
        <div data-animate-container class="fade left">
            <h2>Hello. I'm</h2>
            <h1>Lynith</h1>
            <p>A full-stack developer, web designer <br>and Linux enthusiast</p>
            <div class="circle fade top" data-animate data-animate-delay="0"><span></span></div>
            <div data-animate class="fade bottom">
                <div class="buttons">
                    <a href="https://ko-fi.com/lynith/commissions"><CoinIcon /> <span>Commission</span></a>
                    <a href="https://ko-fi.com/lynith"><HeartIcon /> <span>Donate</span></a>
                </div>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        /* background: linear-gradient(308.37deg, rgba(233, 79, 79, 0.4) 0%, rgba(255, 255, 255, 0.12) 66.49%); */
        font-family: 'Poppins';
    }

    div.circle {
        position: relative;
        z-index: -1;
    }

    div.circle span {
        position: absolute;
        display: block;
        width: 240px;
        height: 240px;
        border-radius: 100%;
        background: linear-gradient(35.01deg, rgba(219, 73, 73, 0) 34.29%, #F48989 163.07%);
        filter: drop-shadow(0px 3px 7px rgba(0, 0, 0, 0.1));
        right: 20px;
        top: -340px;
        z-index: -1;
        animation-name: animation;
        animation-duration: 12s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    @keyframes animation {
        0% {
            transform: translate(0, 0);
        }
        25% {
            transform: translate(10px, -10px);
        }
        50% {
            transform: translate(10px, 0);
        }
        75% {
            transform: translate(-10px, 10px);
        }
        100% {
            transform: translate(0, 0);
        }
    }

    h1 {
        font-size: 90px;
        font-weight: 800;
        color: #DB4949;
        line-height: 78px;
    }

    section > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-items: center;
        width: 60vw;
        height: 100%;
    }

    section > div > div > * {
        margin: 20px;
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        width: min-content;
        border-radius: 9px;
        box-shadow: 0px 3px 6px 0px #00000033;
        transition: 0.3s;
    }

    .buttons > a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: center;
        border-radius: 9px 0 0 9px;
        background-color: #DB4949;
        transition: 0.3s;
        text-decoration: none;
        padding: 15px;
        color: white;
        font-weight: 700;
        font-family: 'Manrope';
    }

    .buttons > a > span {
        color: white;
        transition: 0.3s;
    }

    .buttons > a:nth-child(2) {
        border-left: 2px solid white;
        border-radius: 0 9px 9px 0px;
    }

    .buttons > a:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    .buttons > a > :global(svg) {
        margin-right: 10px;
        width: 22px;
        height: 22px;
        font-size: 18px;
        text-shadow: none;
        transition: 0.3s;
    }

    .buttons > a:hover > :global(*) {
        transform: translate(0, -2px);
    }

    @media only screen and (max-width: 800px) {
        section > div {
            margin-left: 50px;
        }
    }

</style>
