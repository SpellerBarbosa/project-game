<script setup>
import { ref} from 'vue';
import { useRouter } from 'vue-router';
import { useDataUsersStores } from '#imports';
import { useUserStore } from '~/stores/userStore';

const user = ref('');
const password = ref ('');
const mensagem = ref('');
const router = useRouter();
const usersData = useDataUsersStores();
const userLoged = useUserStore();

const entrar = () => {
    const usuarioEncontrado = usersData.users.find(usuario => usuario.user === user.value);

    if (usuarioEncontrado && usuarioEncontrado.password === password.value){
        userLoged.setUser(usuarioEncontrado);
        goToMainGamepage();
    } else if (usuarioEncontrado && usuarioEncontrado.password !== password.value){
        mensagem.value = 'Senha inválida!';
    } else {
        mensagem.value = 'Usuário não encontrado!';
    }
}


const goToRegisterPage = () => {
    router.push('/signup')
}

const goToMainGamepage = () => {
    router.push('/minhaconta')
}

</script>

<template>
    <div class="container-login">
        <form>
            <input type="text" placeholder="Usuario" v-model="user">
            <input type="password" placeholder="********"  v-model="password">
            <div class="container-btn">
                <button :disabled="user === '' || password ===''" class="entrar"  @click.prevent="entrar()">Entrar</button>
                <button class="cadastrar" @click.prevent="goToRegisterPage()">Cadastrar</button>
            </div>
        </form>
        <button class="esqueceu-senha">Esqueceu a senha ?</button>
        <span v-if="mensagem !==''">{{ mensagem }}</span>
    </div>
</template>

<style scoped>
  @media screen and (min-width: 180px) {
    .container-login{
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 300px;
        height: 250px;
        background-color: #ffffffbe;
        border-radius: 10px;
        box-shadow: 0px 0px 100px  3px black;
    }

    form{
        width: 100%;
        display: flex;
        flex-direction: column;     
        justify-content: center;
        align-items: center;   
    }

    form input {
        width: 90%;
        height: 27px;
        margin: 5px;
        font-size: 18px;
    }

    form input::placeholder{
        text-align: center;
        font-size: 19px
    }

    .container-btn{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 10px;
    }

    .entrar, .cadastrar {
        width: 40%;
        height: 25px;
        margin: 5px;
    }

    .esqueceu-senha{
        width: 60%;
        height: 25px;
        margin: 0 auto;
    }

    .container-login span {
        width: 70%;
        height: 30px; 
        display: flex;
        align-items: center;
        justify-content: center;   
        background-color: red;
        margin: 20px auto;
        border-radius: 10px;
        font-family: 'Lato', sans-serif;
        font-weight: 700;
        color: #fff;
        text-shadow: 1px 1px black;
        letter-spacing: .5px;
        transition: 1s;
        animation: notify 1s ease-in alternate;
    }

    @keyframes notify {
        0% {
            opacity: 0;
        }

        50%{
            opacity: 0.5;
        }

        100%{
            opacity: 1;
        }
    }
  }
</style>