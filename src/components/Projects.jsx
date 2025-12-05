import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./Modal";

export default function Projects() {
   const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Penrose",
      description: "A trade book management app made under Nomura.",
      details: (<>
      <p className="mb-4">
        A full-stack trade management platform built with React for the frontend and Java Spring Boot for the
      backend, using Neo4j and MySQL for data persistence. The application stored trade details as hierarchical
      “books” modeled in Neo4j, while MySQL captured metadata, configuration, and view definitions.
      </p>
      <p className="mb-4">
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
      </p></>),
      tags: [
        "React",
        "Node.js",
        "Java",
        "Microservices",
        "MySQL",
        "Neo4j",
        "Docker",
        "Podman",
        "Kubernetes",
      ],
    },
    {
      id: 2,
      title: "PPM",
      description: "A Project and Portfolio Management app made under Nomura.",
      details: (<>
        <p className="mb-4">
          Built a comprehensive project management platform using React (with Redux) for the dynamic frontend,"+
          Java Spring Boot for the robust backend, and MySQL database to store all project, employee, budget
          and expense data.
        </p>
        <p className="mb-4">
          This system enables managers to monitor employee tasks in real-time, view allocated budgets per project
          or employee, assign developers based on multiple criteria like skills and availability, analyze budgets
          by region and time periods, and book company expenses for themselves or team members.
        </p></>
          ),
      tags: ["React", "Redux", "Spring Boot", "MySQL"],
    },
  ];

  return (
    <>
    <motion.section
      id="projects"
      className="min-h-screen py-24 px-6 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
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
            className="border border-white/10 p-6 rounded-xl hover:border-[#FF6A00] transition cursor-pointer relative group"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.0 }}
            whileHover={{ y: -8, scale: 1.02, backgroundColor: "#FF6A00", borderColor: "#FF6A00", color: "#000000"}}
            whileTap={{ scale: 0.98 }}
            style={{ willChange: "transform, opacity" }}
            onClick={() => setSelectedProject(project)}
          >
            <motion.h3
              className="text-xl font-medium mb-4 text-inherit"
              whileHover={{ x: -8 }}
            >
              {project.title}
            </motion.h3>
            <motion.p className="text-inherit">{project.description}</motion.p>
          </motion.div>
        ))}
      </div>
      </motion.section>

            <Modal
              isOpen={!!selectedProject}
              onClose={() => setSelectedProject(null)}
            >
              {selectedProject && (
                <>
                  <h3 className="text-2xl font-semibold text-[#FF6A00] mb-4">
                    {selectedProject.title}
                  </h3>

                  <p className="text-white/80 mb-4">{selectedProject.details}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-[#FF6A00]/20 text-[#FF6A00] px-2 py-1 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    className="px-4 py-2 rounded bg-[#FF6A00] text-black font-medium hover:bg-[#ffaa33] transition"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </button>
                </>
              )}
            </Modal>
    </>
  );
}



{/* <p className="mb-4">
  A full-stack trade management platform built with React for the frontend and Java Spring Boot for the
  backend, using Neo4j and MySQL for data persistence. The application stored trade details as hierarchical
  “books” modeled in Neo4j, while MySQL captured metadata, configuration, and view definitions.
</p>
<p className="mb-4">
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
</p>*/}


{/* <p className="mb-4">
  Built a comprehensive project management platform using React (with Redux) for the dynamic frontend,
  Java Spring Boot for the robust backend, and MySQL database to store all project, employee, budget,
  and expense data.
</p>
<p>
  This system enables managers to monitor employee tasks in real-time, view allocated budgets per project
  or employee, assign developers based on multiple criteria like skills and availability, analyze budgets
  by region and time periods, and book company expenses for themselves or team members.
</p>*/}
