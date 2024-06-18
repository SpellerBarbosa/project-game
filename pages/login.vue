<script setup>
import {useHead} from '@vueuse/head'

useHead({
    title: 'Text Games | Login'
})
</script>
<template>
    <div class="login">
        <PainelLogin />
    </div>
</template>

<style>
*{
    margin:0 ;
    padding: 0;
}

@media screen and (min-width: 180px){
    .login{
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/public/img/bg-images/bg-image.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
}
}

</style>