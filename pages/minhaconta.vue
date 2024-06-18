<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '~/stores/userStore';
import { useHead } from '@vueuse/head';

const router = useRouter();
const userStore = useUserStore();
const usuarioLogado = computed(()=> userStore.user)

useHead({
    title: 'Text Games | Login'
})

const returnToIndexPage = () =>{
    userStore.clearUser();
    router.push('/')
}
</script>

<template>
    <div class="container-perfil">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
</template>

<style>
    .container-perfil{
        width: 100%;
        height: 95vh;
        display: flex;
        flex-wrap: wrap;
        flex-shrink: 1;
        flex-basis: 1;
        gap: 30px;
        align-items: center;
        justify-content: center;
        background-color: grey;
    }
</style>