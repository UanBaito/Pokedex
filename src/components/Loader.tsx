export default function Loader() {
  return (
    <div className="bg-contrast grid justify-center grid-flow-col grid-cols-6 grid-rows-6 max-h-32 bg rounded-md shadow-2xl m-2">
      <div className="col-span-2 row-span-4 animate-pulse">
        <img
          className="object-contain mx-auto object-right m-2"
          width={96}
          height={96}
          src="src\components\assets\sprite-unavailable.svg"
        ></img>
      </div>
      <span className="text-center capitalize font-bold text-lg col-span-2 row-span-2 animate-pulse">
        elpepe
      </span>
      <span className="col-span-2 text-center row-start-6 animate-pulse">
        N.º elpepe
      </span>

      <div className="relative my-1 col-start-6 row-start-1 row-span-3 col-span-3 mr-1 animate-pulse">
        <img
          src="src\components\assets\sprite-unavailable.svg"
          className="relative z-10 object-fit w-full h-full p-2"
        ></img>
        <span
          className={`absolute h-full w-full left-0 top-0 rounded-full bg-gray-600 `}
        ></span>
      </div>
      <div className="relative my-1 col-start-6 row-start-4 row-span-3 col-span-3 mr-1 animate-pulse">
        <img
          src="src\components\assets\sprite-unavailable.svg"
          className="relative z-10 object-fit w-full h-full p-2"
        ></img>
        <span
          className={`absolute h-full w-full left-0 top-0 rounded-full bg-gray-600 animate-pulse`}
        ></span>
      </div>
    </div>
  );
}
