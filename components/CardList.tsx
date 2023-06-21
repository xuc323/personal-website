import Link from "next/link";

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

export type CardItemProps = {
  link: string;
  name: string;
  preview: string;
};

function CardItem({ link, name, preview }: CardItemProps) {
  return (
    <li className="m-2 min-h-[200px] text-center">
      <Link href={link} className="block border p-2 rounded-lg h-full w-full">
        <h4 className="text-blue-600">{name}</h4>
        {preview && <p className="p-2">{preview}</p>}
      </Link>
    </li>
  );
}
