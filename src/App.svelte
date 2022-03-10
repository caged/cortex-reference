<!-- App.svelte -->
<script>
  import amps from "./amps.json";
  import Brand from "./Brand.svelte";
</script>

<div class="h-full text-slate-700">
  <div class="columns-4 p-2">
    {#each Object.entries(amps) as [name, presets]}
      <Brand {name} {presets} />
    {/each}
  </div>
</div>

<style>
  /* css will go here */
</style>
