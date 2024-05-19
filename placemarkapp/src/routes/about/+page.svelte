<script lang="ts">
  import { subTitle } from "$lib/stores";
  import About from "$lib/ui/About.svelte";
  import Card from "$lib/ui/Card.svelte";

  subTitle.set("Welcome to Placemark");
</script>

<Card title="This is Placemark">
  <About />
</Card>
