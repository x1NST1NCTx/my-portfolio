export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full border-b border-white/10 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-semibold tracking-wide text-orange-500">
          Annish Vykera.
        </span>

        <div className="space-x-8 hidden md:flex">
          <a href="#projects" className="hover:text-orange-500 transition">Projects</a>
          <a href="#contact" className="hover:text-orange-500 transition">Contact</a>
        </div>
      </div>
    </nav>
  );
}
