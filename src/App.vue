<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <h1 class="is-size-4">MINI POKEDEX</h1><hr>
      <label for="pokemon">Pesquisar pokémon: </label>
      <input class="input is-primary" type="text" v-model="busca">
      <hr><button class="button is-normal" @click="Buscar">Buscar</button>
      <div v-for="(poke, index) in pokemonsFiltrados" :key="poke.url">
        <pokemon :nome="poke.name" :num="index + 1" :url="poke.url"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import pokemon from './components/pokemon'
export default {
  name: 'App',
  data(){
    return{
      pokemonsFiltrados: [],
      pokemons: [],
      busca: ''
    }
  },
  created : function(){
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0").then(res => {console.log("Pegou os pokémons")
    this.pokemons = res.data.results
    this.pokemonsFiltrados= res.data.results;
    });
  },
  components: {
    pokemon
  },
  methods: {
    Buscar: function(){
      if(this.busca == '' || this.busca == ' ')
      {
        this.pokemonsFiltrados = this.pokemons;
      }
      else{
        this.pokemonsFiltrados = this.pokemons.filter(pokemon => pokemon.name == this.busca);
      }
    }
  }
}
</script>

<style>
#app {
  background-color: aliceblue;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
