import Link from "next/link";

export type CardItemProps = {
  link: string;
  name: string;
  preview: string;
};

export default function CardList({ items }: { items: CardItemProps[] }) {
  return (
    <div className="w-10/12 mx-auto mt-8 rounded-2xl max-w-3xl shadow-lg bg-white duration-300 max-sm:w-full max-sm:shadow-none dark:bg-black">
      <ul className="grid grid-cols-2 p-5 max-md:grid-cols-2 max-sm:grid-cols-1">
        {items.map((item, index) => {
          return (
            <CardItem
              link={item.link}
              name={item.name}
              preview={item.preview}
              key={index}
            />
          );
        })}
      </ul>
    </div>
  );
}

function CardItem({ link, name, preview }: CardItemProps) {
  return (
    <li className="m-2 min-h-[200px] text-center">
      <Link href={link} className="block border p-2 rounded-lg h-full w-full">
        <h2 className="text-blue-600 text-lg">
          <span className="bg-gradient-to-r from-blue-300 to-blue-300 bg-no-repeat bg-right-bottom bg-[length:0_2px] transition-[background-size] duration-1000 hover:bg-[length:100%_2px] hover:bg-left-bottom">
            {name}
          </span>
        </h2>
        {preview && <p className="p-2">{preview}</p>}
      </Link>
    </li>
  );
}
