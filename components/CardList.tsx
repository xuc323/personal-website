import Link from "next/link";

export type CardItemProps = {
  link: string;
  name: string;
  preview: string;
};

export default function CardList({ items }: { items: CardItemProps[] }) {
  return (
    <div className="mx-auto mt-8 w-10/12 max-w-3xl rounded-2xl bg-white shadow-lg duration-300 dark:bg-black max-sm:w-full max-sm:shadow-none">
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
      <Link href={link} className="block h-full w-full rounded-lg border p-2">
        <h2 className="text-lg text-blue-600">
          <span className="bg-gradient-to-r from-blue-300 to-blue-300 bg-[length:0_2px] bg-right-bottom bg-no-repeat transition-[background-size] duration-1000 hover:bg-[length:100%_2px] hover:bg-left-bottom">
            {name}
          </span>
        </h2>
        {preview && <p className="p-2">{preview}</p>}
      </Link>
    </li>
  );
}
