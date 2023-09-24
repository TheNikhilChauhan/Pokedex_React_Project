import { Link } from "react-router-dom";
import CustomRoutes from "./routes/CustomRoutes";

function App() {
  return (
    <>
      <div className="flex flex-col align-middle justify-center text-center mt-16">
        <h1 className="text-2xl  tracking-wider font-bold">
          <Link to="/">Pokedex</Link>
        </h1>
      </div>
      <CustomRoutes />
    </>
  );
}

export default App;
