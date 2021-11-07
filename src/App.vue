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

        <v-form @submit.prevent="onSubmit">

          <v-row justify="center" no-gutters="true">

            <v-col md="4">

              <v-select id="auswahl"
                        label="Auswahl"
                        :items="options"
                        v-model="current.auswahl"
                        filled
                        data-cy="auswahl">
              </v-select>

            </v-col>

          </v-row>

          <v-row justify="center" no-gutters="true">

            <v-col md="4">

              <v-text-field id="wert"
                            label="Wert"
                            v-model="current.wert"
                            filled
                            data-cy="wert">
              </v-text-field>

            </v-col>

          </v-row>

          <v-row justify="center" no-gutters="true">

            <v-col md="4">

              <v-btn type="submit"
                     id="speichern"
                     color="primary"
                     data-cy="speichern">
                Speichern
              </v-btn>

              <v-btn color="primary"
                     class="ml-4"
                     @click="onCancel"
                     data-cy="abbrechen">
                Abbrechen
              </v-btn>

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
                          }"
                          data-cy="result">

              <template v-slot:item.Aktionen="{ item }">

                <v-btn
                    class="light-blue white--text my-2"
                    elevation="0"
                    rounded
                    fab
                    small
                    @click="onEdit(item)"
                >
                  <v-icon class="white--text">mdi-pencil</v-icon>
                </v-btn>

                <v-btn
                    class="light-blue white--text my-2 mx-2"
                    elevation="0"
                    rounded
                    fab
                    small
                    @click="onDelete(item)"
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
//import { v4 as uuidv4 } from 'uuid';

@Component
export default class App extends Vue {

  private options: string[] = [
      'Auswahl 1',
      'Auswahl 2',
      'Auswahl 3',
      'Auswahl 4',
      'Auswahl 5'
  ];

  private current: Example = { auswahl: '', wert: '' };

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
    /*
    this.examples.push({
      auswahl: 'Test',
      wert: 'Test'
    });
    */

  }

  private onSubmit(): void {

    this.examples.push(this.current);

    this.current = { auswahl: '', wert: '' };

  }

  private onCancel(): void {

    this.current = { auswahl: '', wert: '' };

  }

  private onEdit(item: Example): void {

    this.current = item;

  }

  private onDelete(item: Example): void {

    //this.examples.

  }

}
</script>
