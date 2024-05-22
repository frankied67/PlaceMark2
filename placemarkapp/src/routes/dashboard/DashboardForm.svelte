<script lang="ts">
  let location = [];

  async function addLocation() {
    console.log(`New Location: ${location} just added`);
  }
</script>

<form on:submit|preventDefault={addLocation}>
  <div class="field">
    <label class="label" for="location">Add a Location:</label>
    <input bind:value={location} class="input" id="location" name="location" type="text" />
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-success">Add Location</button>
    </div>
  </div>
</form>
