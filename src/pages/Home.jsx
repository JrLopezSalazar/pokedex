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
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      <section>
        <article className=" ">
          <div className="grid justify-center">
            <img className="mt-[150px]" src="/images/banner.png" alt="" />
          </div>
          <div className="grid justify-center  h-[150px] ">
            <h2 className="text-[60px]  ">Hello trainer</h2>
            <p className="text-[45px]  ">To start gimme your name!</p>
          </div>
          <form className="mt-11 flex border-4 justify-center items-center  h-[68px]   " onSubmit={handleSubmit}>
            <input className="w-[530px] flex border-4 justify-center items-center  h-12 "
              id="nameTrainer"
              autoComplete="off"
              placeholder="your name"
              type="text"
              required
            />
            <button className="bg-red-500  w-[110px]   h-12 " >Stars</button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};

export default Home;
