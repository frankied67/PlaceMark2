<script lang="ts">
  let monument = "";

  async function addMonument() {
    console.log(`New Location: ${location} just added`);
  }
</script>

<form on:submit|preventDefault={addMonument}>
  <div class="field">
    <label class="label" for="location">Add a Monument:</label>
    <input bind:value={monument} class="input" id="location" name="location" type="text" />
  </div>
  <div class="field">
    <div class="control">
      <button class="button is-success">Add Monument</button>
    </div>
  </div>
</form>
