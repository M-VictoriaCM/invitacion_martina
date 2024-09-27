<script>
export default {
    name:'SectionFooter'
}
</script>
<template>
    <div class="container__footer">
        <div class="text_desarrolladores">
            <p class="dev1">Develop by</p>
            <a href="https://www.instagram.com/teinviteok/" target="_blank" rel="noopener noreferrer">
                <p class="dev2">Teinvite.ar</p>
            </a>
        </div>
    </div>
</template>
<style>
.container__footer{
    min-width:100%;
    height:27px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: rgba(128, 128, 128, .5);

}
a{
    text-decoration: none;
}
.text_desarrolladores{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 1rem;
    width:100%;
    height:18px;
}

.dev1 {
    color: white;
    font-size: .5rem;
}

.dev2 {
    color: black;
    font-size: .5rem;
    font-weight: 600;
}
</style>