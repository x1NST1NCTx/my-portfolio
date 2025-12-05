import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Penrose",
      description: "A trade book management app made under Nomura.",
      details:(
        <>
          <p style={{ marginBottom: '1rem' }}>
            A full-stack trade management platform built with React for the frontend and Java Spring Boot for the
            backend, using Neo4j and MySQL for data persistence. The application stored trade details as hierarchical
            “books” modeled in Neo4j, while MySQL captured metadata, configuration, and view definitions.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Users could define custom views with flexible filters to retrieve specific books and export the results
            for downstream consumption. The system supported SSO-based authentication and a granular authorization
            workflow, where users were required to raise and obtain approval for access requests before viewing or
            exporting data.
          </p>
          <p>
            The application was initially containerized with Docker, then independently migrated by me to Podman
            to align with the organization’s RHEL 8.1 Linux servers. I later single‑handedly migrated the entire
            stack to Kubernetes, using Rancher and Helm for deployment and environment management, with automated
            builds and deployments set up through GitLab CI.
          </p>
        </>
      ),
      tags: ["React", "Node.js", "Java", "Microservices", "MySQl", "Neo4j", "Docker", "Podman", "Kubernetes"],
    },
    {
      id: 2,
      title: "PPM",
      description: "A Project and Portfolio Management app made under Nomura.",
      details: (
        <>
          <p style={{ marginBottom: '1rem' }}>
            Built a comprehensive project management platform using React (with Redux) for the dynamic frontend,
            Java Spring Boot for the robust backend, and MySQL database to store all project, employee, budget,
            and expense data.
          </p>

          <p>
            This system enables managers to monitor employee tasks in real-time, view allocated budgets per project
            or employee, assign developers based on multiple criteria like skills and availability, analyze budgets
            by region and time periods, and book company expenses for themselves or team members.
          </p>

        </>
      ),
      tags: ["React", "Redux", "Spring Boot", "MySQL"], // Updated to match tech stack
    },
  ];

  return (
    <motion.section
      id="projects"
      className="min-h-screen py-24 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className="text-3xl font-semibold text-orange-500 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl relative z-10">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`} // ✅ Added layoutId here
            className="border border-white/10 p-6 rounded-xl hover:border-orange-500 transition cursor-pointer relative group"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0, delay: project.id * 0 }}
            whileHover={{
              y: -8, // ✅ Reduced for smoother animation
              scale: 1.02,
              // ✅ Removed expensive boxShadow
            }}
            whileTap={{ scale: 0.98 }}
            style={{
              willChange: "transform, opacity", // ✅ GPU acceleration
              transform: "translateZ(0)",
            }}
            onClick={() => setSelectedProject(project)}
          >
            <motion.h3
              className="text-xl font-medium group-hover:text-orange-500 transition mb-4"
              whileHover={{ x: -8 }}
            >
              {project.title}
            </motion.h3>
            <motion.p className="text-white/60">{project.description}</motion.p>
          </motion.div>
        ))}
      </div>

      {/* Backdrop Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }} // ✅ Faster backdrop
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`} // ✅ Matches card layoutId
              className="bg-gradient-to-br from-gray-900/90 to-black/90 border border-white/20 rounded-2xl p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <motion.button
                  className="text-white/70 hover:text-white p-2 -m-2 rounded-full hover:bg-white/10"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </motion.button>
              </div>

              <p className="text-white/80 mb-6 leading-relaxed">
                {selectedProject.details}
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map(
                  (
                    tag, // ✅ Fixed key prop
                  ) => (
                    <span
                      key={tag} // ✅ Use tag as key since it's unique
                      className="px-4 py-2 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
