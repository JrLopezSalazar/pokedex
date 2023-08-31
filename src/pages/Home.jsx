import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="min-h-screen  grid grid-rows-[1fr_auto]">
      <section className="" >
        <article className=" ">
          <div className="grid justify-center">
            <img className="mt-[180px] mb-12 w-[40vh] md:w-[60vh]" src="/images/banner.png" alt="" />
          </div>
          <div className="grid justify-center  h-[150px] ">
            <h2
              className="inline-flex h-20 pt-2 overflow-x-hidden animate-type 
            group-hover:animate-type-reverse whitespace-nowrap 
              mb-1 font-mono text-4xl text-red-600 md:text-6xl"
            >
             ¡Hi, trainer!👋
            </h2>

            <div className=" font-mono text-xl text-black md:text-4xl block mb-14 ">
              Give me your name to start{" "}
            </div>
          </div>

          <form
            className="flex mx-auto  mt-11   justify-center items-center  h-[73px] w-[60%]  drop-shadow-lg "
            onSubmit={handleSubmit}
          >
                <input
              className="border-4 w-full  h-14 mr-0  "
              id="nameTrainer"
              autoComplete="off"
              placeholder="your name"
              type="text"
              required
            />


            <button className="bg-red-500  w-[40%]  h-14 hover:bg-red-400 ">Stars</button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};

export default Home;
