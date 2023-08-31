import { useDispatch } from "react-redux"
import { logout } from "../../store/slices/trainer.slice"
import { GoSignIn } from "react-icons/go";

const HeaderPokeball = ({children}) => {
  const dispach = useDispatch()

  const handleLogout = () =>{
    dispach(logout())
  }

  return (
    <section>
      <header>
      <div className="h-16 bg-red-600 relative">
        <div className="absolute left-0 bottom-0 w-[210px] sm:w-[300px]">
          <img src="/public/images/banner.png" alt="" />
        </div>
      </div>
        <div  className="h-12 bg-black relative">   
            <button onClick={handleLogout} className=" h-16 aspect-square bg-white rounded-full absolute right-0 -translate-x-1/2 -top-8 border-[10px] border-black after:block after:content-[''] after:h-8 after:aspect-square after:bg-slate-600 after:rounded-full  after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2  after:-translate-y-1/2 after:border-4  after:border-black transition-colors hover:bg-red-500 cursor-pointer "></button>
            <h6 className="text-white flex justify-end p-6 ">Press the button above to exit</h6>
        </div>
      </header>
      {children}
    </section>
  )
}
export default HeaderPokeball