<script lang="ts">
  import { subTitle } from "$lib/stores";
  import DashboardForm from "./DashboardForm.svelte";
  import ListLocations from "$lib/ui/ListLocations.svelte";
  import Card from "$lib/ui/Card.svelte";

  subTitle.set("Add a Location");
</script>

<Card title="Please add a location">
  <DashboardForm />
</Card>
<Card title="Locations">
  <ListLocations />
</Card>
