import { useState } from "react"
import Pagination from "../components/pokedex/Pagination"
import PokemonList from "../components/pokedex/PokemonList"
import usePokedex from "../hooks/usePokedex"
import { paginationData } from "../utils/pagination"


const Pokedex = () => {
  const [currentPage, setcurrentPage] = useState(1)

  const {handleChange,name,pokemonByName,pokemonName,pokemonType,setpokemonName,setpokemonType,types} = usePokedex()  

  const {itemsInCurrentPage,lastPage,pagesInCurrentBlock} = paginationData(pokemonByName, currentPage)

  return (
    
    <main className="bg-slate-400"> 
      <section>
        <p className="text-2xl p-2 text-center"><span className="text-red-600 font-semibold ">Welcome {name}, </span>Here you will find your pokemons</p>
        <form action="" className="flex justify-center items-center flex-wrap mb-10 ">
          <div className="shadow-xl h-[30px] w-[250px] m-10 shadow-gray-500">
            <input className="w-full h-full object-contain outline-0"  value={pokemonName} onChange={handleChange(setpokemonName)} type="text" placeholder=" Search Pokemon..."/>
          </div>

          <select className="bg-black w-[150px] rounded-md text-white"  value={pokemonType} onChange={handleChange(setpokemonType)}>
            <option className="text-white" value="">All pokemons</option>
           {
            types.map((type) => <option key={type.name} value={type.name} className="capitalize text-white rounded-lg">{type.name}</option>)
           }
          </select>
        </form>
      </section> 
      <Pagination lastPage ={lastPage} pagesInCurrentBlock={pagesInCurrentBlock} setcurrentPage = {setcurrentPage} currentPage = {currentPage}/>
      <PokemonList pokemons={itemsInCurrentPage} />
    </main>
  )
}
export default Pokedex