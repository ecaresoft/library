<template>
   <div id="Niffer">
      <div class="row">
         <div class="col col-md-6">
           <NifflerDoc></NifflerDoc>
         </div>
         <div class="col col-md-6" style="background-color: #FAFAFA; min-height: 100%;">
            <div class="container" >
               <Swagger v-bind:yamlSource="yaml"></Swagger>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import Swagger from '../components/Swagger.vue'
   import NifflerDoc from '../docs/NifflerDoc.vue'
   
   export default {
     name: 'Niffer',
     components: {
       Swagger,
       NifflerDoc
     },
     data(){
      return {
        yaml: require("../ymls/swagger-config.yaml")
      }
     }
   }
   
   
</script>