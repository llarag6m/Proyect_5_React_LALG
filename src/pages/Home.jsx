import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispach = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispach(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto] bg-yellow-500">
      <section className="flex justify-center items-center ">
        <article className="text-center ">
          <div className="mb-20">
            <img src="/images/banner.png" alt="" />
          </div>
          <h1 className="text-red-700 font-extrabold text-5xl 2346">
            !HELLO TRAINER¡
          </h1>
          <p className="font-bold text-xl mb-8 ">To start give me your name</p>
          <form  onSubmit={handleSubmit} action="">
            <input
              className="w-[200px] h-[30px] shadow-xl shadow-gray-300 outline-0"
              autoComplete="off"
              id="nameTrainer"
              type="text"
              placeholder="  your name..."
              required
            />
            <button className="bg-red-600 h-[30px] w-[100px] text-white hover:bg-red-700 ">Start!</button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};
export default Home;
