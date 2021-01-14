<template>
    <div id="pokemon">
        <div class="card">
    <div class="card-image">
        <figure>
        <img :src="currentImg" alt="Placeholder image" @mouseup="alterarSprite" class="ima">
        </figure>
    </div>
    <div class="card-content">
        <div class="media">
        <div class="media-left">
        </div>
        <div class="media-content">
            <p class="title is-4">{{num}} - {{Upper(nome)}}</p>
            <p class="subtitle is-6">{{pokemon.type}}</p>
            <button class="button is-info" @click="alterarSprite">Alterar sprite</button>
        </div>
        </div>

        <div class="content">
        </div>
    </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    created: function(){
        axios.get(this.url).then(res =>{
            this.pokemon.type = res.data.types[0].type.name;
            if(res.data.types[1] != null)
            {
                this.pokemon.type += "/" + res.data.types[1].type.name
            }
            this.pokemon.front = res.data.sprites.front_default;
            this.pokemon.back = res.data.sprites.back_default;
            this.currentImg = this.pokemon.front
            //this.isfront = true;
        })
    },
    data(){
        return{
            currentImg: '',
            isfront: true,
            pokemon: {
                type: '',
                front: '',
                back: ''
            }
        }
    },
    props: {
        num: Number,
        nome: String,
        url: String
    },
    methods: {
        Upper: function(value){
            var newName = value[0].toUpperCase() + value.slice(1);
            return newName;
        },
        alterarSprite: function(){
            if(this.isfront)
            {
                this.currentImg = this.pokemon.back;
                this.isfront = false;
            }
            else
            {
                this.currentImg = this.pokemon.front;
                this.isfront = true;
            }
        }
    }
}
</script>

<style scoped>
    #pokemon{
        margin-top: 2%;
    }
    .ima{
        image-rendering: -moz-crisp-edges;
        image-rendering: -webkit-crisp-edges;
        image-rendering: pixelated;
        image-rendering: crisp-edges;
    }
</style>