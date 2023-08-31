const Movements = ({moves}) => {
  
  return (
    <ul className="grid grid-cols-3 gap-5 p-2 m-2 shadow-2xl shadow-gray-500 text-center text-sm">
     {
        moves?.map((move) => <li key={move.move.name}>
            <h4 className="border-[1px] border-black rounded-xl capitalize bg-slate-300" >{move.move.name}</h4>
        </li>)
     }
    </ul>
    
  )
}
export default Movements