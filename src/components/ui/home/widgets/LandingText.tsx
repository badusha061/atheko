import BoxReveal from "../../box-reveal";
import { FiArrowUpRight } from "react-icons/fi";

export async function BoxRevealDemo() {
  return (
    <div className="max-md:size-full max-w-lg items-center justify-center overflow-hidden max-md:pt-8 ">
      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <p className="text-5xl md:text-6xl lg:text-8xl font-bold mb-4 text-blue-500">
          Laundry Redefined<span className="text-[#5046e6]">.</span>
        </p>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <div className="mt-6 text-xl md:text-2xl lg:text-3xl mb-6 text-gray-300">
          Fast Turnaround, Exceptional Quality, and Premium Service for the
          Wardrobe You Love.
        </div>
      </BoxReveal>

      <BoxReveal boxColor={"#5046e6"} duration={0.5}>
        <button className="text-blue-600 font-semibold px-6 py-2 rounded-full transition duration-300 border border-t-4 border-blue-600 flex items-center gap-2">
          KNOW MORE
          <FiArrowUpRight />
        </button>
      </BoxReveal>
    </div>
  );
}
