export default function Home() {
  return (
    <div>
      <div className="flex flex-col px-28 py-64 justify-center  max-md:px-20">
        <h1 className="my-10 text-6xl">Hello!</h1>
        <h2 className="font-bold text-5xl">I&apos;m Xu Chen,</h2>
        <div className="my-5">
          <p className="text-xl p-1">a software engineer 🖥️</p>
          <p className="text-xl p-1">
            embracing the boundless possibilities of new technologies 📋
          </p>
        </div>
      </div>
      {/* <div className="p-28 ">
        <h1 className="py-2 font-bold text-5xl bg-gradient-to-r from-gray-700 to-purple-300 bg-no-repeat bg-bottom bg-[length:100%_2px] bg">
          About me
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa fugit
          assumenda quibusdam, a minima quasi cupiditate? Ex exercitationem
          assumenda modi tempora amet suscipit. Neque sequi nemo sapiente
          voluptatem iusto itaque.
        </p>
        <button className="p-3 border rounded-xl shadow-lg">Read more</button>
      </div> */}
    </div>
  );
}
