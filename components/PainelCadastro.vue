<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useDataUsersStores } from '~/stores/useDataUsers';

const router = useRouter();
const dataUsers = useDataUsersStores();
const user = ref('');
const password = ref('');
let count = 0;
let id = count++;
let error= ref('')


const goToLoginPage = () =>{
    router.push('/login')
}

function cadastrar(){
    
    if (user.value === "" || password.value === ""){
        error.value = "Não e possivel cadastrar sem um nome de Usuario ou Senha"
        return
    }


    dataUsers.users.some(function(usuario){
    if(usuario.user === user.value){
        user.value = ""
        password.value = ""
        error.value="Usuario já Cadastrado"
    }else{
        cadastrarUsuario()
    }
})
}

async function cadastrarUsuario() {
    try{
        const response = await fetch(`${process.env.BASE_URL}`,{
            method: 'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                id: id,
                user: user.value.toLocaleLowerCase(),
                password: password.value
            })
        });
        user.value = ""
        password.value = ""
        const data = await response.json();
        goToLoginPage();
        console.log('Resposta da API: ', data);
    }catch(error){
        console.error('Erro ao cadastra: ', error);
    }
}
</script>

<template>
    <section class="container-cadastro">
        <form>
            <fieldset>
                <legend>Usuario</legend>
                <input type="text" v-model="user" placeholder="usuario">
            </fieldset>
            <fieldset>
                <legend>Senha</legend>
                <input v-model="password" type="password" placeholder="senha" />
            </fieldset>
            <button @click.prevent="cadastrar()">Cadastrar</button>
        </form>
        <span v-if="error!==''">{{ error }}</span>
    </section>
</template>

<style scoped>
@media screen and (min-width: 180px){
    .container-cadastro {
        width: 350px;
        height: 300px;
        display: flex;
        flex-direction: column;
        margin-top: 50px;
        border-radius: 40px;
        box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.801);
        background: #fff;
    }

    form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    form fieldset {
        width: 90%;
        height: 50px;
        border: none;
        margin: 10px;        
    }

    form fieldset input{
        width: 90%;
        height: 30px;
        font-size: 20px;
    }

    form fieldset input::placeholder {
        text-align: center;
    }

    form button {
        width: 50%;
        height: 40px;
        margin: 20px 0;
    }

    .container-cadastro span{
        position: absolute;
        bottom: 10px;
        height: 30px;
        padding: 5px 15px;
        background-color: red;
        border-radius: 5px;
        color: #fff;
        font-family: 'Lato', sans-serif;
        letter-spacing: 1px;
        transition: 1s;
        animation: notify 1s ease-in-out;
    }

    @keyframes notify {
        0%{
           height: 0px;
           opacity: 0;
        }
        50%{
            min-height: 15px;
            opacity: 0;
        }
        100%{
            min-height: 30px;
            opacity: 1;
        }
    }
}

@media screen and (max-width: 300px) {
    .container-cadastro span{
        width: 80%;
        position: absolute;
        bottom: 10px;
        height: 30px;
        padding: 5px 15px;
        background-color: red;
        border-radius: 5px;
        color: #fff;
        font-family: 'Lato', sans-serif;
        font-size: 10px;
        text-align: center;
        letter-spacing: 1px;
        transition: 1s;
        animation: notify 1s ease-in-out;
        left:5%;
    }

    @keyframes notify {
        0%{
           height: 0px;
           opacity: 0;
        }
        50%{
            min-height: 15px;
            opacity: 0;
        }
        100%{
            min-height: 30px;
            opacity: 1;
        }
}
}

@media screen and (min-width: 301px){
    .container-cadastro span{
        width: 50%;
        position: absolute;
        bottom: 10px;
        height: 30px;
        padding: 5px 15px;
        background-color: red;
        border-radius: 5px;
        color: #fff;
        font-family: 'Lato', sans-serif;
        font-size: 10px;
        text-align: center;
        letter-spacing: 1px;
        transition: 1s;
        animation: notify 1s ease-in-out;
        left:22%;
    }

    @keyframes notify {
        0%{
           height: 0px;
           opacity: 0;
        }
        50%{
            min-height: 15px;
            opacity: 0;
        }
        100%{
            min-height: 30px;
            opacity: 1;
        }
    }
}

@media screen and (min-width: 685px){
    .container-cadastro span{
        width: 40%;
        position: absolute;
        bottom: 10px;
        height: 30px;
        padding: 5px 15px;
        background-color: red;
        border-radius: 5px;
        color: #fff;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        text-align: center;
        letter-spacing: 1px;
        transition: 1s;
        animation: notify 1s ease-in-out;
        left:29%;
    }

    @keyframes notify {
        0%{
           height: 0px;
           opacity: 0;
        }
        50%{
            min-height: 15px;
            opacity: 0;
        }
        100%{
            min-height: 30px;
            opacity: 1;
        }
    }
}

</style>