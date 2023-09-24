import { Link } from "react-router-dom";

function Pokemon({ name, image, id }) {
  return (
    <>
      <ul className=" flex justify-center text-center m-2">
        <Link to={`/pokemon/${id}`}>
          <li className=" bg-slate-400 p-3 hover:bg-slate-700 cursor-pointer">
            <div className=" text-lg text-zinc-100 tracking-widest">
              {name.toUpperCase()}
              <div className="flex justify-center p-2 basis-2/5 h-96 w-96">
                <img src={image} />
              </div>
            </div>
          </li>
        </Link>
      </ul>
    </>
  );
}

export default Pokemon;
