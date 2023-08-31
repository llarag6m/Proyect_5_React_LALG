import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getAllPokemons, getAllTypes, getPokemonsByType } from "../services/pokemon"

const usePokedex = () => {

    const [pokemons, setPokemons] = useState([])
    const [pokemonName, setpokemonName] = useState("")
    const [pokemonType, setpokemonType] = useState("")
    const [types, setTypes] = useState([])
  
    const {name} = useSelector((store) => store.trainer)
  
  {/*
    const handleChangeInput = (e) =>{
      setpokemonName(e.target.value)
    }
  
    const handleChangeSelect = (e) =>{
      setpokemonType(e.target.value)
    }
  */}
  
    const handleChange = (setState) => (e) => {
      setState(e.target.value)
    }
   
    const pokemonByName = pokemons.filter((pokemon) => pokemon.name.toLowerCase().includes(pokemonName.toLowerCase()))
  
  
      useEffect(() => {
        if (!pokemonType) {
        getAllPokemons()
       .then((data) => setPokemons(data))
       .catch((err) => console.log(err))
        }
      }, [pokemonType])
  
      useEffect(() => {
        if (pokemonType) {
          getPokemonsByType(pokemonType)
          .then((data) => setPokemons(data))
          .catch((err) => console.log(err))
        }
      }, [pokemonType])

      useEffect(() => {
        getAllTypes()
        .then((types) => setTypes(types))
      }, [])
      

  return {
    name,
    pokemonName,
    setpokemonName,
    pokemonType,
    setpokemonType,
    handleChange,
    pokemonByName,
    types
  }
}
export default usePokedex