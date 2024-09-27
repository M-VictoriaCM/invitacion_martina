<template>
    <div class="container__film">
        <div class="content left">
            <div class="cuadrado" v-for="n in 32" :key="'left-' + n"></div>
        </div>
        <div class="content right">
            <div class="cuadrado" v-for="n in 32" :key="'right-' + n"></div>
        </div>
    </div>
</template>
<style>
.container__film {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: -3;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 2rem;
}

.left {
    position: fIxed;
    left: .5rem;
}

.right {
    position: fixed;
    right: .5rem;
}

.cuadrado {
    width: 1.5rem;
    height: 1.7rem;
    border-radius: 0.25rem;
    background-color: white;
    margin-bottom: 0.5rem;
}

@media (min-width: 768px) and (max-width: 991px) {
    .film__dinamic {
        height: 100%;
    }

    .content {
        width: 2rem;
    }

    .cuadrado {
        width: 2rem;
        height: 2.3rem;
        margin-bottom: 2rem;
    }
}

@media (min-width: 1025px) {
    .film__dinamic {
        height: 100%;
    }

    .content {
        width: 3rem;
    }

    .cuadrado {
        width: 3rem;
        height: 3.3rem;
        margin-bottom: 3rem;
    }
}
</style>