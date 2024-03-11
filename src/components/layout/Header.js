export default function Header() {
  return (

      <header className="flex items-center justify-between">
          <a className="text-primary font-semibold text-3xl" href="">FOOD BOX</a>
          <nav className="flex gap-8 items-center text-gray-600">
              <a href="">Home</a>
              <a href="">Menu</a>
              <a href="">About</a>
              <a href="">Contact</a>
              <a className="bg-primary text-white rounded-full px-6 py-2" href="">Login</a>
          </nav>
      </header>
  );
}