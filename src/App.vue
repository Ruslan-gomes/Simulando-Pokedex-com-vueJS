<template>
  <div id="app">
    <div class="column is-half is-offset-one-quarter">
      <h1 class="is-size-4
      ">MINI POKEDEX</h1><hr>
      <button class="button is-outlined" @click="firstGeneration">1ª geração</button>
      <button class="button is-outlined" @click="secondGeneration">2ª geração</button>
      <button class="button is-outlined" @click="thirdGeneration">3ª geração</button>
      <button class="button is-outlined" @click="fourthGeneration">4ª geração</button>
      <button class="button is-outlined" @click="fifthGeneration">5ª geração</button>
      <button class="button is-outlined" @click="sixthGeneration">6ª geração</button>
      <button class="button is-outlined" @click="seventhGeneration">7ª geração</button>
      <hr><label for="pokemon">Pesquisar pokémon: </label>
      <input class="input is-primary" type="text" v-model="busca">
      <button class="button is-normal" @click="Buscar">Buscar</button>
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
      busca: '',
      geracao: "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
    }
  },
  created : function(){
    axios.get(this.geracao).then(res => {console.log("Pegou os pokémons")
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
    },
    firstGeneration: function(){
      this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
      axios.get(this.geracao).then(res => {console.log("Pegou os pokémons")
      this.pokemons = res.data.results
      this.pokemonsFiltrados= res.data.results;
    });
    },
    secondGeneration: function(){
      this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151";
      axios.get(this.geracao).then(res => {console.log("Pegou os pokémons")
      this.pokemons = res.data.results
      this.pokemonsFiltrados= res.data.results;
    });
    },
    thirdGeneration: function(){
      this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251";
      axios.get(this.geracao).then(res => {console.log("Pegou os pokémons")
      this.pokemons = res.data.results
      this.pokemonsFiltrados= res.data.results;
    });
    },
     fourthGeneration: function(){
      this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386";
      axios.get(this.geracao).then(res => {console.log("Pegou os pokémons")
      this.pokemons = res.data.results
      this.pokemonsFiltrados= res.data.results;
    });
    },
      fifthGeneration: function(){
      this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=155&offset=494";
      axios.get(this.geracao).then(res => {console.log("Pegou os pokémons")
      this.pokemons = res.data.results
      this.pokemonsFiltrados= res.data.results;
    });
    },
     sixthGeneration: function(){
      this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=72&offset=649";
      axios.get(this.geracao).then(res => {console.log("Pegou os pokémons")
      this.pokemons = res.data.results
      this.pokemonsFiltrados= res.data.results;
    });
    },
      seventhGeneration: function(){
      this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=88&offset=721";
      axios.get(this.geracao).then(res => {console.log("Pegou os pokémons")
      this.pokemons = res.data.results
      this.pokemonsFiltrados= res.data.results;
    });
    },
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
body{
  background-color: antiquewhite;
}
</style>
