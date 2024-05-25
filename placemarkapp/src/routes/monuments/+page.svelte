<script lang="ts">
  import ListLocations from "$lib/ui/ListLocations.svelte";
  import ListMonuments from "$lib/ui/ListMonuments.svelte";
  import Card from "$lib/ui/Card.svelte";
  import AddMonument from "$lib/ui/AddMonument.svelte";
  import { subTitle } from "$lib/stores";

  subTitle.set("Add a Monument");
</script>

<Card title="Monuments">
  <ListMonuments />
</Card>
