<script lang="ts">
  import { currentSession, subTitle } from "$lib/stores";
  import DashboardForm from "./DashboardForm.svelte";
  import ListMonuments from "$lib/ui/ListMonuments.svelte";
  import Card from "$lib/ui/Card.svelte";
  import { monumentService } from "$lib/services/monument-service";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import type { Monument } from "$lib/types/monument-types";

  let monuments: Monument[] = [];

  subTitle.set("Add a Monument");

  onMount(async () => {
    try {
      monuments = await monumentService.getMonuments(get(currentSession));
      console.log(monuments);
    } catch (error) {
      ("Failed to fetch monuments");
    }
  });
</script>

<div class="columns">
  <div class="column">
    <Card title="Monument">
      {#if monuments.length > 0}
        <ListMonuments {monuments} />
      {:else}
        <p>No monuments available</p>
      {/if}
    </Card>
  </div>
  <div class="column">
    <Card title="Please add a monument">
      <DashboardForm />
    </Card>
  </div>
</div>
