import {useNavigate } from "react-router-dom";

const Page404 = () => {

  const navigate = useNavigate();

  const handleSubmit404 = () => {
   
    navigate("/");
  };

  return (
    <main className=" min-h-screen bg-hero-pattern bg-cover bg-center max-w-[360%] h-[100vh] flex justify-center items-center ">
      <section className="text-center  m: w-[500px] bg-white p-16 shadow-2xl shadow-black rounded-2xl leading-10 ">
        <div className="">
          <h1 className="text-6xl p-1">Page 404</h1>    
          <p className="text-2xl p-6 text-justify">Sorry this page is not available or does not exist press the button.</p>
          <button onClick={handleSubmit404} className="inline-block bg-black text-white p-1 w-20 rounded-lg">Home</button>
        </div>
      </section>
    </main>
  )
}
export default Page404