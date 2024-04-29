import "./App.css";
import { Navbar } from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
  return (
    <Link to={`/`}>
      <div className=" bg-zinc-50 pb-16">
        <div className="text-justify">
          <Navbar />
        </div>
        <div className="text-center grid-cols-1 mt-36 mx-8">
          <h1 className="text-red-800 font-medium">
            Welcome to DummyJSON`s recipes!
          </h1>
          <p className="text-zinc-500 text-center max-w-xl mx-auto mt-32 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, culpa
            libero ipsa nam perferendis quae, natus voluptates atque quia
            laudantium incidunt autem perspiciatis non ab maiores, ea iusto
            dolore! Blanditiis? Nobis, mollitia vel magni deserunt eius facilis
            amet, ullam vero assumenda totam voluptatem, beatae debitis sed quo
            aliquam! Eligendi sapiente eum voluptatum rem laboriosam ducimus
            voluptates, deserunt asperiores modi aliquam? Labore, ipsum nulla
            repellat nihil illo repudiandae odit ducimus dolores. Est
            voluptatibus ratione, nobis delectus rem itaque, fugiat, maiores
            minus optio error repellat unde quas quam nesciunt voluptates
            officiis nam. Optio expedita aperiam ipsum, reprehenderit ea laborum
            aliquid. Consequatur cum repellat odit quos quod provident minima
            magni enim unde sint soluta dolorem magnam officiis quam, commodi
            iste, atque nemo nostrum.
          </p>
        </div>
      </div>
    </Link>
  );
}
export default App;
