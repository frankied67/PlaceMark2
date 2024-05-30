<script lang="ts">
  import { monumentService } from "$lib/services/monument-service";
  import type { Monument } from "$lib/types/monument-types";
  import { currentSession } from "$lib/stores";
  import { get } from "svelte/store";

  export let monumentList: Monument[] = [];

  let monument = "";
  let lat = 52.160858;
  let lng = -7.15242;
  let category = "";
  let message = "";
  let email = "";

  async function addMonument() {
    if (!monument || !lat || !lng || !category) {
      message = "Please add monument, lat, lng and category fields";
      return;
    }

    const memorial = {
      monument,
      lat,
      lng,
      category,
      user: get(currentSession)._id,
      email
    };

    try {
      const success = await monumentService.addMonument(memorial, get(currentSession));
      if (!success) {
        message = "Monument not added - some error occurred";
        return;
      }
      message = `Thanks! You added ${monument}`;
    } catch (error) {
      message = "An error occurred while adding the monument";
    }
  }
</script>

<form on:submit|preventDefault={addMonument}>
  <div class="field">
    <label class="label" for="monument">Monument:</label>
    <input bind:value={monument} class="input" id="monument" name="monument" type="text" />
  </div>
  <div class="field">
    <label class="label" for="lat">Latitude:</label>
    <input bind:value={lat} class="input" id="lat" name="lat" type="float" />
  </div>
  <div class="field">
    <label class="label" for="lng">Longitude:</label>
    <input bind:value={lng} class="input" id="lng" name="lng" type="float" />
  </div>
  <div class="field">
    <label class="label" for="location">Category:</label>
    <input bind:value={category} class="input" id="category" name="category" type="text" />
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-success">Add Monument</button>
    </div>
  </div>
</form>
