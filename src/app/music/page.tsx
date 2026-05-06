import Image from "next/image";
import DiskImg from "./compact-disc.svg";

export default function Page() {
  return (
    <div className="mt-24 flex w-full items-center justify-center">
      <div className="rounded-full border p-3">
        <Image
          src={DiskImg}
          alt="Compact Disc"
          width={600}
          className="animate-spin-slow"
        />
      </div>
    </div>
  );
}
