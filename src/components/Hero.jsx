export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 max-w-6xl mx-auto">
      <div>
        <h1 className="text-5xl md:text-6xl font-light leading-tight">
          Hi, I'm <span className="font-semibold text-orange-500">Annish</span>
        </h1>
        <p className="mt-4 text-lg text-white/70 max-w-xl">
          Full-stack developer building clean, reliable, and modern web
          applications.
        </p>

        <a
          href="#projects"
          className="inline-block mt-8 px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-black transition"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
