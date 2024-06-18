<script setup>
import {useHead} from '@vueuse/head'

useHead({
    title: 'Text Games | Entrar'
})
</script>

<template>
    <main class="painel-cadastro">
        <PainelCadastro />
    </main>
</template>

<style>
    *{
        margin: 0;
        padding: 0;
    }

    @media screen and (min-width: 180px){
        .painel-cadastro{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 95vh;
        background-color: grey;
    }
    }

</style>