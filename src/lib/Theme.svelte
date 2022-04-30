<script>
  import { onMount } from "svelte";
  let btn;

  const loadTheme = () => {
    localStorage.getItem("theme") && localStorage.getItem("theme") == "dark"
      ? document.body.classList.add("dark-theme")
      : null;
  }

  const toggleTheme = () => {
    localStorage.getItem("theme") === "dark"
      ? localStorage.setItem("theme", "light")
      : localStorage.setItem("theme", "dark");
    document.body.classList.toggle("dark-theme");
  };

  window.addEventListener("load", () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localStorage.getItem("theme")) {
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark-theme");
        return;
    }
    loadTheme();
  });

  onMount(() => {
    btn.addEventListener("click", () => {
      btn.querySelector("i").classList.toggle("bx-flip-horizontal");
      toggleTheme();
    });
  });
</script>

<button bind:this={btn}>
  <i class="bx bx-brightness-half" />
</button>

<style>
  button {
    position: fixed;
    top: 2vh;
    left: 2vh;
    width: 60px;
    height: 60px;
    margin: 20px;
    border-radius: 100%;
    outline: none;
    border: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;
    font-size: 32px;
    background-color: #fefefe;
  }

  button:hover {
    filter: brightness(0.92);
    cursor: pointer;
  }
</style>
