<script setup>
import { ref } from 'vue';
import { useUserStore } from '~/stores/userStore';
import { useRouter } from 'vue-router';

const toggleMenu = ref('menuClosed');
const estado = ref('desativado');
const submenu = ref('menuInativo');
const useStore = useUserStore();
const router = useRouter();
const usuarioLogado = computed(() => useStore.user)


const estadoMenu = () =>{
    (toggleMenu.value === 'menuClosed') ? toggleMenu.value = 'menuOpen': toggleMenu.value = 'menuClosed' ;
    (estado.value === 'desativado') ? estado.value = 'ativado': estado.value = 'desativado';
}

const abrirSubMenu = () =>{
    (submenu.value === 'menuInativo') ? submenu.value = 'menuAtivo' : submenu.value = 'menuInativo';
}

const logout = () =>{
    useStore.clearUser();
    router.push('/')
}
</script>

<template>
    <div class="container-menu">
        <div class="menu">
            <button :class="toggleMenu" @click="estadoMenu()">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <nav :class="estado">
            <ul>
                <li>
                    <NuxtLink to="/" class="links">Inicio</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/login" class="links">Entrar</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/signup" class="links">Cadastrar</NuxtLink>
                </li>
                <li v-if="usuarioLogado" @click="abrirSubMenu()">
                    <ul :class="submenu" >
                        <span>{{ usuarioLogado.user }}</span>
                        <li><NuxtLink to="/minhaconta" class="links">Minha Conta</NuxtLink></li>
                        <li class="links" @click="logout()">Logout</li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style>
@media screen and (max-width: 479px){
    *{
        margin: 0;
        padding: 0;
    }
    .container-menu {
        width: 100%;
        height: 10vh;
        display: flex;
        flex-direction: column;
        background-color: grey;
    }

    .menu {
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    
    .menuClosed, .menuOpen {
        min-width: 30px;
        min-height: 30px;
        display: flex;
        margin-left: 10px;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-color: transparent;
        border: solid 2px black;
    }

    .menuClosed {
        transition: .5s;
    }

    .menuClosed span{
        min-width: 70%;
        min-height: 2px;
        background: #000;
        transition: .5s;
        
    }    
    .menuOpen span{
        min-width: 70%;
        min-height: 2px;
        background: #000;
        transform-origin: center;
    }

    .menuOpen span:nth-child(1){
        transform: translateY(6px)  rotate(45deg);
        transition: .5s;
        width: 90%;
    }

    .menuOpen span:nth-child(2){
        opacity: 0;
        transition: .3s;
    }

    .menuOpen span:nth-child(3){
        transform: translateY(-9px) rotate(-45deg);
        transition: .5s;
        width: 90%;
    }

    .desativado {
        display: none;
    }
    
    .ativado{
        width: 100%;
        
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        background: #000000ad;
        animation: openSlow 1s ease-in;

    }

    .ativado ul {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

   

    .links {
        padding: 3px;
        font-size: 12px;
        text-decoration: none;
        text-transform: uppercase;
        color: #d6d0d0;
        font-family: 'Lato';
        letter-spacing: 1px;
        font-weight: 700;
    }
}
@media screen and (min-width: 480px) and (max-width: 767px){
    *{
        margin: 0;
        padding: 0;
    }
    .container-menu {
        width: 100%;
        height: 10vh;
        display: flex;
        background-color: grey;
    }

    .menu {
        width: 30%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    
    .menuClosed, .menuOpen {
        min-width: 45px;
        min-height: 45px;
        display: flex;
        margin-left: 10px;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background-color: transparent;
        border: solid 2px black;
    }

    .menuClosed {
        transition: .5s;
    }

    .menuClosed span{
        min-width: 70%;
        min-height: 2px;
        background: #000;
        transition: .5s;
        
    }    
    .menuOpen span{
        min-width: 70%;
        min-height: 2px;
        background: #000;
        transform-origin: center;
    }

    .menuOpen span:nth-child(1){
        transform: translateY(10px)  rotate(45deg);
        transition: .5s;
        width: 90%;
    }

    .menuOpen span:nth-child(2){
        opacity: 0;
        transition: .3s;
    }

    .menuOpen span:nth-child(3){
        transform: translateY(-12px) rotate(-45deg);
        transition: .5s;
        width: 90%;
    }

    .desativado {
        display: none;
    }
    
    .ativado{
        width: 70%;
        display: flex;
        animation: openSlow 1s ease-in;

    }

    .ativado ul {
        display: flex;
        align-items: center;
    }

   

    .links {
        padding: 10px;
        font-size: smaller;
        text-decoration: none;
        text-transform: uppercase;
        color: #000;
        font-family: 'Lato';
        letter-spacing: 1px;
        font-weight: 700;
    }
} 
@media screen and (min-width: 768px) and (max-width: 1280px) {
    .menu{
        display: none;
    }

    .links{
        color: #000;
        text-decoration: none;
        font-family: 'Lato';
        padding: 10px;
        letter-spacing: 2px;
    }

    .container-menu{
        width: 100%;
        height: 5vh;
        display: flex;
        align-items: center;
    }

    .container-menu ul  {
        display: flex;
        text-transform: uppercase;
        font-size: small;
        font-weight: 700;
    }

}
@media screen and (min-width: 1281px) {
    .container-menu {
        width: 100%;
        height: 10vh;
    }

    .container-menu nav ul {
        display: flex;
        align-items: center;
    }

    .links {
        text-decoration: none;
        color: #000;
        text-transform: uppercase;
        font-size: small;
        font-weight: 700;
        font-family: 'Lato';
        padding: 10px;
    }
}

@keyframes openSlow {
    0%  {
        opacity: 0;
    }

    50% {
        opacity: 0.5;
    }

    100% {
        opacity: 1;
    }
}

@keyframes animatedLine {
    0%{
        border-width: 0% ;
    }

    50% {
        border-width: 50%;
        border-color: aqua;
    }

    100%{
        border-width: 100%;
        border-color: #000;
    }
}

span{
    font-family: 'lato';
}

.menuInativo li{
    display: none;
}

.menuAtivo{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    background:#ffffffc4;
    font-family: 'Lato', sans-serif;
}

.menuAtivo li {
    margin: 5px;
}

.menuAtivo li:last-child{
    cursor: pointer;
}
</style>