<template>
  <v-sheet width="300" class="mx-auto">
    <v-form ref="form">
      <v-text-field
        v-model="name"
        :counter="20"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="surname"
        :counter="20"
        :rules="nameRules"
        label="Surname"
        required
      ></v-text-field>

      <v-checkbox v-model="checkbox" label="Promosso?"></v-checkbox>

      <v-btn primary color="success" block @click="validate"> Aggiungi </v-btn>
    </v-form>
  </v-sheet>
</template>
<script lang="ts">
export default {
  data: () => ({
    name: "",
    surname: "",
    nameRules: [
      (v: string) => !!v || "required",
      (v: string) => (v && v.length <= 20) || "Name must be less than 20 characters",
    ],
    checkbox: false,
  }),

  methods: {
    async validate() {
      if (this.name.length > 0 && this.surname.length > 0) {
        this.addStudent();
      }
    },
    async addStudent() {
      try {
        const response = await fetch("http://localhost:3300/users/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname: this.name,
            lastname: this.surname,
            promosso: this.checkbox,
          }),
        });
        console.log(response);
      } catch (error) {
        console.error("ERROR!" + error);
      }
    },
  },
};
</script>
