<template>
  <v-app>
    <v-main>
      <div class="d-flex justify-center align-center">
        <h1>Scrutinio</h1>
      </div>
      <ListaStudenti />
      <AggiungiStudenti />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import ListaStudenti from "@/components/ListaStudenti.vue";
import AggiungiStudenti from "./components/AggiungiStudenti.vue";
</script>
