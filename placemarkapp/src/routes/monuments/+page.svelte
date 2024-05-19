<script lang="ts">
  import ListLocations from "$lib/ui/ListLocations.svelte";
  import ListMonuments from "$lib/ui/ListMonuments.svelte";
  import AddMonument from "$lib/ui/AddMonument.svelte";
  import { subTitle } from "$lib/stores";

  subTitle.set("Add a Monument");
</script>

<ListMonuments />
<AddMonument />
