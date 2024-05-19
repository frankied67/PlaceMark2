<script lang="ts">
  export let monuments = [
    {
      name: "Quin Abbey",
      lat: "52.8191",
      lng: "8.8631",
      category: "Abbey",
      location: "Clare"
    },
    {
      name: "Bunratty Castle",
      lat: "52.6996",
      lng: "8.8119",
      category: "Castle",
      location: "Clare"
    },
    {
      name: "Waterford Cathedral",
      lat: "52.2615",
      lng: "7.1112",
      category: "Cathedral",
      location: "Waterford"
    }
  ];
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
      </tr>
    {/each}
  </tbody>
</table>
