<script>
  export let name;
  export let presets;

  const grouped = new Map(Array.from(presets).map((p) => [p.model, []]));
  presets.forEach((p) => grouped.get(p.model).push(p));

  const colors = {
    Clean: "text-blue-500",
    Lead: "text-green-500",
    Crunch: "text-orange-500",
    Bright: "text-yellow-500",
    Normal: "text-gray-800",
    Patch: "text-purple-500",
  };

  function colorName(name) {
    const found = Object.entries(colors).find(([k, v]) => name.includes(k));
    if (found) {
      // const el = document.createElement("div");
      // const txt = document.createTextNode(found[0]);
      // el.appendChild(txt);
      // return el;
      return name.replace(
        found[0],
        `<span class="${found[1]}">${found[0]}</span>`
      );
    }
    return name;
  }
</script>

<div class="p-2 break-after-all">
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
              {@html colorName(preset.name)}
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</div>
