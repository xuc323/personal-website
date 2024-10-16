import { Grape_Nuts } from "next/font/google";

const greatNuts = Grape_Nuts({ subsets: ["latin"], weight: "400" });

export default function HomeIcon() {
  return (
    <div className={greatNuts.className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto h-14 w-14"
        viewBox="0 0 100 100"
      >
        <text
          x="15"
          y="70"
          fontSize="70"
          className="animate-wipe-in-out fill-none stroke-black stroke-2 [stroke-dasharray:400] [stroke-dashoffset:400]"
        >
          XC
        </text>
      </svg>
    </div>
  );
}
