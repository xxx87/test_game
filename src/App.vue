<template>
  <v-app>
    <v-main>
      <PlayingField />
    </v-main>
  </v-app>
</template>

<script>
import PlayingField from "./components/PlayingField";

export default {
  name: "App",

  components: {
    PlayingField
  }
};
</script>
