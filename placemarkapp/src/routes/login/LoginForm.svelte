<script lang="ts">
  import { goto } from "$app/navigation";
  //import { locationService } from "$lib/services/location-service";
  import { currentSession } from "$lib/stores";
  import Message from "$lib/ui/Message.svelte";
  import UserCredentials from "$lib/ui/UserCredentials.svelte";

  let email = "";
  let password = "";
  let message = "";

  async function login() {
    // console.log(`attempting to log in email: ${email} with password: ${password}`);
    const success = true;
    // let session = await locationService.login(email, password);
    if (success) {
      currentSession.set(email);
      goto("/dashboard");
    } else {
      email = "";
      password = "";
      message = "Invalid Credentials";
    }
  }
</script>

{#if message}
  <Message {message} />
{/if}
<form on:submit|preventDefault={login}>
  <UserCredentials bind:email bind:password />
  <button class="button is-success is-fullwidth">Log In</button>
</form>
