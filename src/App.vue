<template>
   <div id="app">
      <div class="row">
         <div class="col col-md-2" >
            <SideBar></SideBar>
         </div>
         <div class="col col-md-5">
         </div>
         <div class="col col-md-5" style="background-color: #FAFAFA; min-height: 100%;">
            <div class="container" >
                <Swagger v-bind:yamlSource="y1"></Swagger>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import SideBar from './components/SideBar.vue'
   import Swagger from './components/Swagger.vue'

   export default {
     name: 'App',
     components: {
       SideBar,
       Swagger
     },
     data(){
      return {
        y1: require("./ymls/swagger-config.yaml")
      }
     }
 }


</script>