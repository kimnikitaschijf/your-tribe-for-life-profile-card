<script>
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
  :root {
    --site-font: "Crimson Text", serif;
    --header-font: "Kapakana", cursive;

    --primary-bg-color: #f5f0e5;
    --secondary-bg-color: #cfe0f2;
    --primary-color: #234123;
    --primary-text-font: #f6f6f6;
    --br-button: 20px;
    --br-note: 6px;

    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

</style>
