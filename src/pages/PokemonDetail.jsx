import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getPokemonById } from "../services/pokemon"
import StatBartList from "../components/pokemonDetail/StatBartList"
import { bgStylePokemonType } from "../shared/pokemon"
import Movements from "../components/pokedex/movements"


const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null)

  const {pokemonId} = useParams()

  useEffect(() => {
      getPokemonById(pokemonId)
      .then((data) =>  setPokemonData(data))
      .catch((err) => console.log(err))
     
  }, [])
  

  return (
    
    <main className="flex justify-center items-center bg-blue-500">
        <article className=" w-[min(100%,_700px)] shadow-xl shadow-black m-5 bg-gray-200">
          <header className="h-[120px]">
            <div className={`-bottom-4 h-[90px]  ${bgStylePokemonType[pokemonData?.types[0]]} shadow-xl shadow-gra`}>
              <img className="h-[170%] w-full object-contain " src={pokemonData?.image} alt="" />
            </div>
          </header>
          <br />
          <span className="m-[45%] p-[2px] shadow-xl shadow-slate-500 text-2xl bg-white/60">#{pokemonData?.id}</span>
          <h1 className="flex justify-center text-3xl p-5 font-semibold">{pokemonData?.name}</h1>
         
          <div className="flex justify-center gap-5 font-medium">
            <h1>weight: {pokemonData?.weight}</h1>
            <h1>height: {pokemonData?.height}</h1>
          </div>
          <br />
          <section className="flex justify-center bottom-3">
            <div className="flex gap-3 "> 
              <h1 className="font-medium">Type:</h1>
              <h2 className={`${bgStylePokemonType[pokemonData?.types[0]]} w-[70px] text-center rounded-md`}>{pokemonData?.types[0]}</h2>
              <h2 className={`${bgStylePokemonType[pokemonData?.types[0]]} w-[70px] text-center rounded-md`}>{pokemonData?.types[1]}</h2>
            </div>
          </section>
          <StatBartList stats = {pokemonData?.stats} />
          <hr />
          <Movements moves = {pokemonData?.moves}/>
        </article>
    </main>
  )
}
export default PokemonDetail