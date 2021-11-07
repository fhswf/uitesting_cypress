<template>

  <v-container>

    <v-form>

      <v-row justify="center" no-gutters="true">

        <v-col md="4">

          <v-select id="auswahl"
                    label="Auswahl"
                    filled>
          </v-select>

        </v-col>

      </v-row>

      <v-row justify="center" no-gutters="true">

        <v-col md="4">

          <v-text-field id="wert"
                        label="Wert"
                        filled>
          </v-text-field>

        </v-col>

      </v-row>

      <v-row justify="center" no-gutters="true">

        <v-col md="4">

          <v-btn type="submit" color="primary">Speichern</v-btn>

          <v-btn color="primary" class="ml-4">Abbrechen</v-btn>

        </v-col>

      </v-row>

    </v-form>

  </v-container>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppForm extends Vue {

}
</script>

<style>

</style>
