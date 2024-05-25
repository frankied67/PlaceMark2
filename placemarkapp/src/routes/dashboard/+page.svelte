<script lang="ts">
  import { subTitle } from "$lib/stores";
  import DashboardForm from "./DashboardForm.svelte";
  import Card from "$lib/ui/Card.svelte";
  subTitle.set("Add a Monument");
</script>

<Card title="Please add a Monument">
  <DashboardForm />
</Card>
