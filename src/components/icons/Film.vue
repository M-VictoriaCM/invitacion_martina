<template>
    <div class="container__film">
        <div class="content_film left">
            <div class="cuadrado" v-for="n in 32" :key="'left-' + n"></div>
        </div>  
    </div>
</template>
<style>
.container__film{    
    width: 40px;
    min-height:100%;
    display:flex;
    justify-content: center;
    position:relative;
    z-index: 0;
}
.cuadrado{
    width:25px;
    height: 20px;
    border-radius: 5px;
    background: white;
    margin-bottom: .5rem;
}
@media (min-width: 768px) and (max-width: 991px) {
    .container__film{
        width:60px;
        min-height:100vh;
    }
    .cuadrado{
    width:30px;
    height: 25px;
    margin-bottom: .75rem;
    }
}

@media (min-width: 1025px) {
    .container__film{
        width:60px;
    }
    .cuadrado{
        width:35px;
        height: 30px;
        margin-bottom: 1rem;
    }
}
</style>