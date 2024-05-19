<script lang="ts">
  export let locations = [
    {
      name: "Clare"
    },
    {
      name: "Galway"
    },
    {
      name: "Waterford"
    }
  ];
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Location</th>
  </thead>
  <tbody>
    {#each locations as location}
      <tr>
        <td>
          {location.name}
        </td>
        <a href="/monuments" class="button">
          <span class="icon is-small">
            <i class="fas fa-folder-open"></i>
          </span>
        </a>
        <a href="/dashboard" class="button">
          <span class="icon is-small">
            <i class="fas fa-trash"></i>
          </span>
        </a>
      </tr>
    {/each}
  </tbody>
</table>
