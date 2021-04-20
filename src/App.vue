<template>
   <div class="row">
      <div class="col col-md-2" >
         <SideBar></SideBar>
      </div>
      <div class="col col-md-10" >
         <router-view/>
      </div>
   </div>
</template>
<script>
   import SideBar from './components/SideBar.vue'
   
   export default {
     name: 'App',
     components: {
          SideBar
        }
   }
</script>