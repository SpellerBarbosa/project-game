<template>
    <div class=" card">
        <h4>Uma nova aventura o aguarda</h4>
        <figure>
            <img src="public/em-breve.png" alt="imagem embreve">
        </figure>
        <P>assim que a historia estiver pronta sera postada aqui
            <button disabled>Jogar ▶</button>
        </P>
    </div>
</template>

<style scoped>
    *{
        font-family: 'lato', sans-serif;
    }

    .card{
        margin-top: 30px;
        display: flex;
        flex-direction: column;  
        align-items: center;
        width: 200px;
        height: 300px;
        background: #363636;
        border-radius: 10px;
        box-shadow: 0px 0px 10px  5px;
    }

    .card h4 {
        width: 90%;
        height: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: small;
        border-bottom: solid 1px black;

    }
    .card figure{
        width: 90%;
        height: 70%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card img {
        width: 150px;
    }

    .card p{
        height: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        text-align: center;
    }

    .card:hover{
        scale: 1.1;
        transform: 1s;
    }
</style>