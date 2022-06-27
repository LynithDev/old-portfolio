<script>
  import Avatar from "./assets/avatar.png";
  import CssIcon from "./assets/CSSIcon.svelte";
  import React from "./assets/React.svelte";
  import Dart from "./assets/Dart.svelte";
  import Button from "./lib/Button.svelte";
  import Navigation from "./lib/Navigation.svelte";
  import Theme from "./lib/Theme.svelte";
  import HTML from "./assets/HTML.svelte";
  import "./styles/style.css";
  import Linux from "./assets/Linux.svelte";
  import Mongo from "./assets/Mongo.svelte";
  import Ts from "./assets/TS.svelte";
  import Js from "./assets/JS.svelte";
  import Python from "./assets/Python.svelte";
  import Svelte from "./assets/Svelte.svelte";
  import SASS from "./assets/SASS.svelte";
  import Discord from "./assets/Discord.svelte";
  import GitHub from "./assets/GitHub.svelte";
  import Reddit from "./assets/Reddit.svelte";

</script>

<main>
    <Theme />

    <section id="home">
        <div class="center">
            <img class="avatar" src={Avatar} alt="" />
            <h1>Lynith</h1>
            <h4>A developer, designer and Linux enthusiast</h4>
            <Button on:click={() => (location.hash = "code")}>Skills</Button>
        </div>
    </section>

    <section id="code">
        <div class="center">
            <h1>Technologies</h1>
            <div class="icons-container">
                <div data-name="React"><React /></div>
                <div data-name="CSS"><CssIcon /></div>
                <div data-name="Dart"><Dart /></div>
                <div data-name="HTML"><HTML /></div>
                <div data-name="JavaScript"><Js /></div>
                <div data-name="Linux"><Linux /></div>
                <div data-name="MongoDB"><Mongo /></div>
                <div data-name="Python"><Python /></div>
                <div data-name="Sass"><SASS /></div>
                <div data-name="Svelte"><Svelte /></div>
                <div data-name="TypeScript"><Ts /></div>
            </div>
        </div>
    </section>

    <section id="contact">
        <div class="center">
            <h1>Socials</h1>
            <div class="icons-container">
                <a href="https://reddit.com/u/lynithdev" data-name="Reddit"><Reddit /></a>
                <a href="https://github.com/LynithDev" data-name="GitHub"><GitHub /></a>
                <div data-name="Lynith#0231"><Discord /></div>
            </div>
        </div>
    </section>

    <Navigation />
</main>
