<script lang="ts">
  import { currentSession, subTitle } from "$lib/stores";
  import DashboardForm from "./DashboardForm.svelte";
  import Card from "$lib/ui/Card.svelte";
  import { monumentService } from "$lib/services/monument-service";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import type { Monument } from "$lib/types/monument-types";

  //let monumentList: Monument[] = [];
  subTitle.set("Add a Monument");
</script>

<Card title="Please add a Monument">
  <DashboardForm />
</Card>
