<script lang="ts">
  const monuments = [
    {
      name: "Quin Abbey",
      lat: 52.8191,
      lng: 8.8621,
      category: "Abbey",
      county: "Clare"
    },
    {
      name: "Bunratty Castle",
      lat: 52.6996,
      lng: 8.8119,
      category: "Castle",
      county: "Clare"
    },
    {
      name: "Reginald's Tower",
      lat: 52.2605,
      lng: 7.1054,
      category: "Tower",
      county: "Waterford"
    }
  ];
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Monument Name</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>Category</th>
    <th>County</th>
  </thead>
  <tbody>
    {#each monuments as monument}
      <tr>
        <td>
          {monument.name}
        </td>
        <td>
          {monument.lat}
        </td><td>
          {monument.lng}
        </td>
        <td>
          {monument.category}
        </td>
        <td>
          {monument.county}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
