import { HiOutlineChevronDown } from "react-icons/hi";

type functionVoid = () => void;
type props = {
  handleClickClosePKInfo: functionVoid;
  handleClearSpriteSettings: functionVoid;
};

export default function SpriteLoader({
  handleClickClosePKInfo,
  handleClearSpriteSettings,
}: props) {
  return (
    <>
      <div className="bg-slate-300 poke-info-loading">
        <img src="/Poke_Ball_icon.svg" className="w-32 animate-spin"></img>

        <button
          onClick={() => {
            handleClickClosePKInfo();
            handleClearSpriteSettings();
          }}
          className="minimize-button fixed right-0 top-0 bg-white rounded-full text-black z-50 w-10 h-10 inline-flex justify-center items-center text-2xl m-4"
        >
          <HiOutlineChevronDown />
        </button>
      </div>

      <form
        method="dialog"
        className="dialog-backdrop"
        onClick={handleClickClosePKInfo}
      ></form>
    </>
  );
}
