<script setup>
import { autorun } from 'vue-meteor-tracker';
import Info from './Info.vue'

const userId = autorun(() => Meteor.userId()).result
const isConnected = autorun(() => {
  //console.log('Status:', Meteor.status().status);
  return Meteor.status().status;
}).result;


</script>

<template>
  <h1 class="text-3xl font-bold my-6">Welcome to Meteor!</h1>
  Connected ? {{ isConnected }} <br>
  <Info />
</template>
