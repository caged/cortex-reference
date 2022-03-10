<!-- App.svelte -->
<script>
  import amps from "./amps.json";
  import Brand from "./Brand.svelte";

  const sorted = Object.entries(amps).sort((a, b) => {
    return b[1].length - a[1].length;
  });
</script>

<div class="h-full text-slate-700">
  <div class="columns-4 print:columns-3 p-5 print:p-0">
    {#each sorted as [name, presets]}
      <Brand {name} {presets} />
    {/each}
  </div>
  <div class="absolute right-0 bottom-0 p-2 text-xs text-gray-400">
    Quad Cortex Amps
  </div>
</div>

<style>
  /* css will go here */
</style>
