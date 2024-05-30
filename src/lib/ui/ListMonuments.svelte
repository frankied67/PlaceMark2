<script lang="ts">
  import type { Monument } from "$lib/types/monument-types";

  export let monuments: Monument[];
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Monument Name</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>Category</th>
  </thead>
  <tbody>
    {#each monuments as monument}
      <tr>
        <td>
          {monument.monument}
        </td>
        <td>
          {monument.lat}
        </td><td>
          {monument.lng}
        </td>
        <td>
          {monument.category}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
