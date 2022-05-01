<script>
    let className;
    export { className as class };
</script>

<button class={className} on:click>
    <slot></slot>
</button>

<style>
    button {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-height: 50px;
        padding: 15px;
        border-radius: 100vw;
        outline: none;
        border: none;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
        transition: filter 0.2s ease;
        background: linear-gradient(92.01deg, rgba(233, 79, 79, 0.8) 0%, #E94F4F 100%);
        color: white;
        font-weight: 700;
        font-size: 100%;
        font-family: 'Raleway', sans-serif;
        letter-spacing: 1px;
        text-align: center;
    }

    button:hover {
        filter: brightness(0.92);
        cursor: pointer;
    }

    @media only screen and (max-width: 800px) {
        button {
            max-height: 40px;
            font-size: 80%;
            width: 80%;
        }
    }

</style>
