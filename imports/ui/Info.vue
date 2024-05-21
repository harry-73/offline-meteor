<script setup>
import { subscribe, autorun } from 'vue-meteor-tracker'
import { LinksCollection } from '/imports/api/links'
import { ref } from 'vue'

subscribe('links')
const links = autorun(() => LinksCollection.find({}).fetch()).result
let newLink = ref('');
let url = ref('');

async  function addLink() {
  if (newLink.value) {
   await Meteor.callAsync('addLink', newLink.value,url.value).catch((error) => {
      console.log(error)
    })
    newLink.value = ''
    url.value = ''
  }
}
</script>

<template>
  <h2 class="text-xl my-6 font-semibold">Learn Meteor!</h2>
  <input type="text" v-model="newLink" placeholder="Add a new link" class="border border-gray-300 p-2 rounded">
  <input type="text" v-model="url" placeholder="Add a new url" class="border border-gray-300 p-2 rounded">
  <button @click="addLink" class="bg-green-700 hover:bg-green-900 text-white py-2 px-4 rounded">Add Link</button>
  <ul class="list-disc underline">
    <li v-for="link of links" :key="link._id" class="hover:text-green-700">
      <a :href="link.url" target="_blank">{{ link.title }}</a>
    </li>
  </ul>
</template>
