export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold text-orange-500 mb-12">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {[1, 2].map((id) => (
          <div key={id} className="border border-white/10 p-6 rounded-xl hover:border-orange-500 transition">
            <h3 className="text-xl font-medium">Project {id}</h3>
            <p className="mt-2 text-white/60">
              A minimal description of the project goes here.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
