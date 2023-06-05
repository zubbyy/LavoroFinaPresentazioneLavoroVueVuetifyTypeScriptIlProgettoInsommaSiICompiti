<template>
  <v-container>
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items-length="totalItems"
      :items="studenti"
      :loading="loading"
      class="elevation-1"
      item-value="name"
      @update:options="fetchDati"
    >
      <template v-slot:item.promosso="{ item }">
        <v-chip :color="getColor(item.columns.promosso)">
          {{ item.columns.promosso ? "Promosso" : "Bocciato" }}
        </v-chip>
      </template>
    </v-data-table-server>

    <div class="d-flex justify-center align-center">
      <v-btn
        primary
        variant="tonal"
        stacked
        class="ma-2 justify-center align-center"
        color="black text-right"
        @click="fetchDati"
      >
        refresh
        <v-icon end icon="mdi-refresh"></v-icon>
      </v-btn>
    </div>
  </v-container>
</template>

<script lang="ts">
export default {
  data: () => ({
    itemsPerPage: 5,
    studenti: [],
    headers: [
      { title: "Id", key: "id", align: "end" },
      { title: "Nome", key: "firstname", align: "end" },
      { title: "Cognome", key: "lastname", align: "end" },
      { title: "Promosso", key: "promosso", align: "end" },
    ],
    loading: true,
    totalItems: 0,
  }),
  methods: {
    async fetchDati() {
      try {
        const response = await fetch("http://localhost:3300/users/");
        this.studenti = await response.json();
        console.log(this.studenti);
        this.loading = false;
      } catch (error) {
        console.error("ERROR!" + error);
      }
    },
    getColor(promosso: boolean) {
      return promosso ? "green" : "red";
    },
  },
};
</script>
