<script lang="ts">
  import { locationService } from "$lib/services/location-service";
  import { Location } from "$lib/services/location-types";
  import { currentSession, subTitle } from "$lib/stores";
  import DashboardForm from "./DashboardForm.svelte";
  import ListLocations from "$lib/ui/ListLocations.svelte";
  import Card from "$lib/ui/Card.svelte";
  import { onMount } from "svelte";
  import { get } from "svelte/store";

  let locations: Location[] = [];

  onMount(async () => {
    locations = await locationService.getLocations(get(currentSession));
  });

  subTitle.set("Add a Location");
</script>

<Card title="Please add a location">
  <DashboardForm />
</Card>
<Card title="Locations">
  <ListLocations {locations} />
</Card>
