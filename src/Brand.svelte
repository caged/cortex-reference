<script>
  export let name;
  export let presets;

  const grouped = new Map(Array.from(presets).map((p) => [p.model, []]));
  presets.forEach((p) => grouped.get(p.model).push(p));
</script>

<div class="pb-2 pr-2 break-after-all">
  <h3 class="font-bold text-gray-900 mb-4 text-lg border-b-2 border-gray-700">
    {name}
  </h3>
  <div class="space-y-2">
    {#each [...grouped] as [model, modpresets]}
      <div>
        <h4 class="font-bold text-sm mb-1 text-gray-700">{model}</h4>
        <div class="space-y-2 text-xs">
          {#each modpresets as preset}
            <div class="text-gray-500">
              {preset.name}
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
