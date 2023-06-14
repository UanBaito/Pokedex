import { Pokemon } from "pokenode-ts";
import { HiOutlineChevronDown } from "react-icons/hi";

export default function MaximazedPokeInfo({
  handleClickMinimize,
  selectedPoke,
}: {
  handleClickMinimize: any;
  selectedPoke: Pokemon;
}) {
  return (
    <div className="fixed overflow-y-scroll top-0 left-0 w-full h-full bg-black z-50">
      <span
        className=""
        onClick={() => {
          handleClickMinimize();
        }}
      >
        <HiOutlineChevronDown />
      </span>

      <div className="">
        <img
          src={
            selectedPoke.sprites.front_default
              ? selectedPoke.sprites.front_default
              : "src/components/assets/sprite-unavailable.svg"
          }
        ></img>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          nesciunt ratione sint mollitia quae nihil repellat commodi, sequi
          voluptatem tempora non quos voluptates deserunt veniam facere maxime
          dolor earum vitae?Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Nostrum fugit reiciendis ea magnam perspiciatis, nulla rerum
          animi inventore aliquam ullam assumenda tempora, culpa voluptatem
          atque nesciunt! Molestias aperiam atque eum Lorem ipsum dolor sit,
          amet consectetur adipisicing elit. Est odio quibusdam a pariatur unde
          porro odit dolorem, voluptatem inventore explicabo tenetur.
          Perferendis sed, cumque libero dolor minima quidem suscipit eum?
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          aspernatur at sapiente minima. Tenetur, saepe consectetur quibusdam ad
          repellendus quisquam id dignissimos itaque. Molestiae consectetur
          nobis perspiciatis veritatis in totam! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Aliquid reiciendis sit, magnam sint
          fuga a. In minima voluptates necessitatibus veniam odit accusamus
          fugit porro delectus commodi quibusdam? Consequuntur, nam incidunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          corporis pariatur fuga accusamus nisi? Earum itaque, eos est mollitia
          vero facere, culpa impedit, voluptate autem eius corrupti molestiae
          nisi in? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Atque odio, ex, iure ab, nemo laborum nostrum voluptates distinctio
          officiis dolor molestias quisquam dolorem facere nihil nesciunt
          incidunt. Deleniti, maxime quam? Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Repudiandae laborum delectus numquam
          fuga ipsam dolorem consequuntur nulla vel, similique distinctio
          molestiae illum quaerat odit officia maiores magni saepe sapiente
          inventore! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Doloremque eveniet aspernatur officiis quam laboriosam, nihil quos vel
          recusandae vero amet illo autem nemo. Eos consequuntur aut quas dolor,
          tenetur quos!
        </h3>
      </div>
    </div>
  );
}
