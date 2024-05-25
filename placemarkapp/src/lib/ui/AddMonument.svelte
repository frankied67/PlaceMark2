<script lang="ts">
  let monument = "";
  let latitude = 0;
  let longitude = 0;
  let category = "";
  let county = "";

  async function addMonument() {
    console.log(`New Monument: ${monument} just added`);
  }
</script>

<form on:submit|preventDefault={addMonument}>
  <div class="field">
    <label class="label" for="monument">Monument:</label>
    <input bind:value={monument} class="input" id="monument" name="monument" type="text" />
  </div>
  <div class="field">
    <label class="label" for="latitude">Latitude:</label>
    <input bind:value={latitude} class="input" id="latitude" name="latitude" type="float" />
  </div>
  <div class="field">
    <label class="label" for="location">Longitude:</label>
    <input bind:value={longitude} class="input" id="longitude" name="longitude" type="float" />
  </div>
  <div class="field">
    <label class="label" for="location">Category:</label>
    <input bind:value={category} class="input" id="category" name="category" type="text" />
  </div>
  <div class="field">
    <label class="label" for="location">County:</label>
    <input bind:value={county} class="input" id="category" name="category" type="text" />
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-success">Add Monument</button>
    </div>
  </div>
</form>
