<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

      <v-toolbar-title>UI-Testing mit Cypress</v-toolbar-title>

    </v-app-bar>

    <v-main>

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

        <v-spacer class="pt-15"></v-spacer>

        <v-row>

          <v-col cols="12">

            <v-data-table id="dataTable"
                          :headers="columns"
                          :items="examples"
                          :footer-props="{
                            'items-per-page-text': 'Einträge pro Seite'
                          }">

              <template v-slot:item.Aktionen="{ }">

                <v-btn
                    class="light-blue white--text my-2"
                    elevation="0"
                    rounded
                    fab
                    small
                >
                  <v-icon class="white--text">mdi-pencil</v-icon>
                </v-btn>

                <v-btn
                    class="light-blue white--text my-2 mx-2"
                    elevation="0"
                    rounded
                    fab
                    small
                >
                  <v-icon class="white--text">mdi-delete</v-icon>
                </v-btn>

              </template>

            </v-data-table>

          </v-col>

        </v-row>

      </v-container>

    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Example } from './models/Example';

@Component
export default class App extends Vue {

  private columns: any = [
    {
      text: 'Auswahl',
      value: 'auswahl'
    },
    {
      text: 'Wert',
      value: 'wert'
    },
    {
      text: 'Aktionen',
      value: 'Aktionen'
    },
  ]
  private examples: Example[];

  constructor() {
    super();

    this.examples = [];
    this.examples.push({
      auswahl: 'Test',
      wert: 'Test'
    });

  }

}
</script>
