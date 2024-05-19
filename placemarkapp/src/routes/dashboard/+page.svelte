<script lang="ts">
  import { subTitle } from "$lib/stores";
  import DashboardForm from "./DashboardForm.svelte";

  subTitle.set("Add a Location");
</script>

<DashboardForm />
