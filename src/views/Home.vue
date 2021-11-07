<template>

  <v-container>

    <app-form></app-form>

    <v-spacer></v-spacer>

    <app-list></app-list>

  </v-container>

</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import HelloWorld from '../components/HelloWorld.vue'
import AppForm from "@/components/AppForm.vue";
import AppList from "@/components/AppList.vue";

@Component({
  components: {
    HelloWorld,
    AppForm,
    AppList
  }
})
export default class Home extends Vue {

  justify = [
    'start',
    'center',
    'end',
    'space-around',
    'space-between',
  ];

}
</script>
