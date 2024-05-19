<script lang="ts">
  export let users = [
    {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com"
    },
    {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com"
    },
    {
      firstName: "Lisa",
      lastName: "Simpson",
      email: "lisa@simpson.com"
    }
  ];
</script>

<section>
  <div>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
        {#each users as user}
          <tr>
            <td>
              {user.firstName}
            </td>
            <td>
              {user.lastName}
            </td>
            <td>
              {user.email}
            </td>
            <td>
              <a href="/admin" class="ui icon button">
                <i class="fas fa-trash"></i>
              </a>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
