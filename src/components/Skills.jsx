import { GitIcon, JsIcon, Html5Icon, GithubIcon, ReactIcon, PodmanIcon, RestFulIcon, DockerIcon, TsIcon, TailwindIcon, JavaIcon, CommandLineIcon, KubernetesIcon, RancherIcon, PrometheusIcon, GrafanaIcon, GoLangIcon, PythonIcon, CPlusPlusIcon, MysqlIcon, PostgresIcon, MongoDBIcon, Neo4jIcon, SpringBootIcon } from "./icons";

export default function Skills() {
  const skills = [
  
    { name: "JavaScript", icon: <JsIcon /> },
    { name: "TypeScript", icon: <TsIcon />},
    { name: "Java", icon: <JavaIcon /> },
    { name: "Golang", icon: <GoLangIcon /> },
    { name: "Python", icon: <PythonIcon /> },
    { name: "C++", icon: <CPlusPlusIcon />},
    { name: "HTML5", icon: <Html5Icon /> },
    { name: "Tailwind", icon: <TailwindIcon /> },
    { name: "MySQL", icon: <MysqlIcon />},
    { name: "PostgreSQL", icon: <PostgresIcon />},
    { name: "MongoDB", icon:<MongoDBIcon />},
    { name: "Neo4j", icon:<Neo4jIcon />},
    { name: "React", icon: <ReactIcon /> },
    { name: "Git", icon: <GitIcon /> },
    { name: "GitHub", icon: <GithubIcon /> },
    { name: "APIs", icon: <RestFulIcon/> },
    { name: "Command Line", icon: <CommandLineIcon /> },
    { name: "Docker", icon: <DockerIcon /> },
    { name: "Podman", icon: <PodmanIcon /> },
    { name: "Kubernetes", icon: <KubernetesIcon />},
    { name: "Rancher", icon: <RancherIcon />},
    { name: "Prometheus", icon: <PrometheusIcon />},
    { name: "Grafana", icon: <GrafanaIcon />},
    { name: "SpringBoot", icon: <SpringBootIcon />}
  ];

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="uppercase tracking-widest text-orange-500/80 text-sm mb-3">
        Skills & Tools
      </p>

      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        My Toolbox & Things I Can Do
      </h2>

      <p className="text-white/60 mb-16 max-w-2xl">
        The skills, tools and technologies I use to build modern, clean and
        reliable software:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition"
          >
            <div className="text-5xl">{skill.icon}</div>
            <p className="text-white/70 text-sm tracking-wide">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
