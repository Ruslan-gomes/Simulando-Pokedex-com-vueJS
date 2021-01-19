import axios from 'axios'
import pokemon from './components/pokemon'
export default {
  name: 'App',
  data(){
    return{
      pokemonsFiltrados: [],
      pokemons: [],
      busca: '',
      index: 0,
      showLoad: false,
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
    firstGeneration: async function(){
        this.showLoad = true;
      try {
        this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
        const res = await axios.get(this.geracao)
        this.pokemons = res.data.results
        this.pokemonsFiltrados= res.data.results;
        this.index = 0;
    }
        catch (error) {
        console.error(error)
      }
      finally{
        this.showLoad = false;
      }
      
    },
    secondGeneration: async function(){
      try {
        this.showLoad = true;
        this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151";
        const res = await axios.get(this.geracao)
        this.pokemons = res.data.results
        this.pokemonsFiltrados= res.data.results;
        this.index = 151;
      }
       catch (error) {
          console.error(error)
      }finally{
          this.showLoad = false;
      }
    },
    thirdGeneration: async function(){
        this.showLoad = true;
      try {
        this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251";
        const res = await axios.get(this.geracao)
        this.pokemons = res.data.results
        this.pokemonsFiltrados= res.data.results;
        this.index = 251;
      } catch (error) {
          console.error(error)
      }finally{
          this.showLoad = false;
      }
    },
     fourthGeneration: async function(){
         this.showLoad = true;
        try {
            this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386";
            const res = await axios.get(this.geracao)
            this.pokemons = res.data.results
            this.pokemonsFiltrados= res.data.results;
            this.index = 386;
        } catch (error) {
            console.error(error)  
        }finally{
            this.showLoad = false;
        }
    },
      fifthGeneration: async function(){
        this.showLoad = true;
        try {
            this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=155&offset=494";
            const res = await axios.get(this.geracao)
            this.pokemons = res.data.results
            this.pokemonsFiltrados= res.data.results;
            this.index = 494;
        } catch (error) {
            console.error(error)
        }finally{
            this.showLoad = false;
        }
    },
     sixthGeneration: async function(){
      this.showLoad = true;
      try {
        this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=72&offset=649";
        const res = await axios.get(this.geracao)
        this.pokemons = res.data.results
        this.pokemonsFiltrados= res.data.results;
        this.index= 649;
      } catch (error) {
          console.error(error)
      }finally{
          this.showLoad = false;
      }
    },
      seventhGeneration: async function(){
        this.showLoad = true;
        try {
            this.geracao = "https://pokeapi.co/api/v2/pokemon?limit=88&offset=721";
            const res = await axios.get(this.geracao)
            this.pokemons = res.data.results
            this.pokemonsFiltrados= res.data.results;
            this.index = 721;
        } catch (error) {
            console.error(error)
        }finally{
            this.showLoad = false;
        }
    },
  }
}