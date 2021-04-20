<template>
   <div id="swagger"></div>
</template>
<script>
   import SwaggerUI from 'swagger-ui'
   import 'swagger-ui/dist/swagger-ui.css';
   
   export default {
     name: 'Swagger',
     props:["yamlSource"],
     mounted(){
   
   const spec = this.yamlSource
   const ui = SwaggerUI({
     spec,
     dom_id: '#swagger',
   });
   ui;
   }
   }
   
</script>