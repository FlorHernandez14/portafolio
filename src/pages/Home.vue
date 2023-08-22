<template>
    
    <div class="  bg-pink-400 h-screen ">
    <Nabvar></Nabvar>
     <div class="md:col-span-1 flex justify-center mt-16">
            <img src="../assets/foto2.jpeg"  alt="img" class="rounded-full h-40 w-40 m-20 mx-auto ">
            
        </div>
        
        <h1 class="text-white text-4xl mt-6 text-center">Flor Hernandez</h1>
        <br><br>
        <hr>
      
        <div class="flex flex-wrap justify-center gap-2 mt-6 space-x-6">
          <a href="https://www.facebook.com/profile.php?id=100021422866135&mibextid=ZbWKwL" target="_blank"><img src="../assets/facebook.png" alt="facebook"></a>
          <a href="https://github.com/flor1414" target="_blank"><img src="../assets/github.png" alt="github"></a> 
          <a href="https://www.linkedin.com/in/flor-hernandez-hern%C3%A1ndez-ba4834288/" target="_blank"><img src="../assets/linkedin.png" alt="linkedin"></a>
        

       
       
        </div>
        <!--<div class="bg-pink-300 w-full h-screen">-->
    
 <!--</div>-->
   
   
</div>  

</template>

<script lang="ts" setup>
    import Nabvar from '../components/Nabvar.vue';
</script>

<style lang="scss" scoped>
 a{
  width: 30px;
  right: 30px;
  
}

img{
  // width: 70PX;
  // height: 70PX;
  object-fit: cover;
}




</style>






