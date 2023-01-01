export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <div className="font-serif text-center bg-black p-5 text-white w-full absolute bottom-0">
        <p>Copyright &copy; {year}, www.xchen.org</p>
      </div>
    </footer>
  );
}
