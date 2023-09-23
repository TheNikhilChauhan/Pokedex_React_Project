function Pokemon({ name, image }) {
  return (
    <>
      <ul className=" flex justify-center text-center m-2">
        <li>
          <div>
            {name}
            <div className="flex justify-center p-2 basis-2/5 h-96 w-96">
              <img src={image} className=" " />
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default Pokemon;
