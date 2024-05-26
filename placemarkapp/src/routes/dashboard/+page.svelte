<script lang="ts">
  import { subTitle } from "$lib/stores";
  import DashboardForm from "./DashboardForm.svelte";
  import ListMonuments from "$lib/ui/ListMonuments.svelte";
  import Card from "$lib/ui/Card.svelte";

  subTitle.set("Add a Monument");
</script>

<Card title="Please add a monument">
  <DashboardForm />
</Card>
<Card title="Monument">
  <ListMonuments />
</Card>
