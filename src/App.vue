<template>
  <div id="app">
    <main>
      
    <div class="column is-half is-offset-one-quarter">

      <h1 class="is-size-4">MINI POKEDEX</h1><hr>

      <div class="buttons are-small">
        <button class="button is outlined" @click="firstGeneration">1ª geração</button>
        <button class="button is-outlined" @click="secondGeneration">2ª geração</button>
        <button class="button is-outlined" @click="thirdGeneration">3ª geração</button>
        <button class="button is-outlined" @click="fourthGeneration">4ª geração</button>
        <button class="button is-outlined" @click="fifthGeneration">5ª geração</button>
        <button class="button is-outlined" @click="sixthGeneration">6ª geração</button>
        <button class="button is-outlined" @click="seventhGeneration">7ª geração</button>
      </div>

      <hr><label for="pokemon">Pesquisar pokémon: </label>

      <input class="input is-primary"
        type="text"
        v-model="busca"
        @keyup.enter="Buscar"
        placeholder="pesquisar pokémon"
      >

      <button :disabled="busca == ''" class="button is-info" @click="Buscar">Buscar</button>

      <div v-show="showLoad" class="load">
        <div class="spin"></div>
        <div class="loading">CARREGANDO</div>
      </div>

      <div class="pokemons" v-for="(poke) in pokemonsFiltrados" :key="poke.url">
        <pokemon v-show="!showLoad" :nome="poke.name" :num="index + 1" :url="poke.url"/>
      </div>
    </div>
    </main>
  </div>
</template>

<script src= './script.js'> </script>

<style scoped>
#app {
  text-align: center;
  margin-top: 60px;
  width: 100%;
}

html,
body {
  background-color: black;
}

.load {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  }

  .spin {
  background: #2de20020;
  height: 150px;
  width: 150px;
  border-radius: 50vh;
  border: 5px solid #30a11900;
  border-top: 5px solid rgb(24, 179, 75);
  animation: loading 3s linear infinite;
  }
  
  .loading {
  position: absolute;
  color: rgb(11, 247, 11);
  }

  @keyframes loading {
  100% {
    transform: rotate(360deg);
    }
  }
</style>
