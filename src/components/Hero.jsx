import NewtonsCradleMatter from "./NewtonsCradeMatter";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-8">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-light leading-tight">
            Hi, I'm <span className="font-semibold text-orange-500">Annish</span>
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl mx-auto md:mx-0">
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

        {/* Right side / below on mobile: cradle */}
        <div className="mt-10 md:mt-0 flex items-center justify-center w-full md:w-[260px] h-[220px]">
          <NewtonsCradleMatter />
        </div>
      </div>
    </section>
  );
}
