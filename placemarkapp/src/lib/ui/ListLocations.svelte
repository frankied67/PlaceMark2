<script lang="ts">
  export let locations = [
    { id: 1, name: "Co. Clare" },
    { id: 2, name: "Co Limerick" },
    { id: 3, name: "Co. Waterford" }
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
        <a href="/dashboard" class="button is-link">
          <span class="icon is-small">
            <i class="fas fa-folder-open"></i>
          </span>
        </a>
        <a href="/" class="button is-info">
          <span class="icon is-small">
            <i class="fas fa-trash"></i>
          </span>
        </a>
      </tr>
    {/each}
  </tbody>
</table>
