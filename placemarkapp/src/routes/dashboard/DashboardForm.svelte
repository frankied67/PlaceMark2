<script lang="ts">
  import { monumentService } from "$lib/services/monument-service";
  import type { Monument } from "$lib/types/monument-types";
  import { currentSession } from "$lib/stores";
  //import Coordinates from "$lib/ui/Coordinates.svelte";
  import { get } from "svelte/store";

  //export let monumentList: Monument[] = [];

  let monument = "";
  let lat = 52.160858;
  let lng = -7.15242;
  let category = "";
  let location = "";
  let message = "";

  async function addMonument() {
    if (!monument || !lat || !lng || !category) {
      message = "Monument not added - missing required information";
      return;
    }
    const memorial: Monument = {
      monument: monument,
      lat: lat,
      lng: lng,
      category: category,
      location: location,
      user: $currentSession._id
    };

    try {
      const session = $currentSession;
      const success = await monumentService.addMonument(memorial, session);

      if (!success) {
        message = "Monument not added - some error occurred";
        return;
      }
      message = `Thanks! You added ${monument}`;
    } catch (error) {
      console.error("Error adding monument:", error);
      message = "Monument not added - some unexpected error occurred";
    }
  }
</script>

<form on:submit|preventDefault={addMonument}>
  <div class="field">
    <label class="label" for="monument">Monument:</label>
    <input bind:value={monument} class="input" id="monument" name="monument" type="text" />
  </div>
  <div class="field">
    <label class="label" for="latitude">Latitude:</label>
    <input bind:value={lat} class="input" id="latitude" name="latitude" type="float" />
  </div>
  <div class="field">
    <label class="label" for="longitude">Longitude:</label>
    <input bind:value={lng} class="input" id="longitude" name="longitude" type="float" />
  </div>
  <div class="field">
    <label class="label" for="category">Category:</label>
    <input bind:value={category} class="input" id="category" name="category" type="text" />
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-success">Add Monument</button>
    </div>
  </div>
</form>
