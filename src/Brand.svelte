<script>
  export let name;
  export let presets;

  const grouped = new Map(Array.from(presets).map((p) => [p.model, []]));
  presets.forEach((p) => grouped.get(p.model).push(p));
  console.log(grouped);
</script>

<div class="border rounded-lg mb-2 p-4 break-inside-avoid">
  <h3 class="font-bold text-gray-900 mb-2 text-lg">{name}</h3>
  <div class="space-y-5">
    {#each [...grouped] as [model, modpresets]}
      <div>
        <h4 class="font-bold text-sm mb-2 text-gray-700">{model}</h4>
        <div class="space-y-2 text-xs">
          {#each modpresets as preset}
            <div class="text-gray-500">
              &bull;&bull;&bull;&bull;&bull;&bull; {preset.name}
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
