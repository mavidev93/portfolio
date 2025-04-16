import SingleProject from "./SingleProject";

export default function Projects() {
  return (
    <div>
      <SingleProject
        title="Tractor Ticket"
        description="Developed a platform for virtual pitch competitions using Next.js 15, enabling smooth idea sharing and exploration with optimal performance."
        githubLink=""
        features={[
          "Leveraged Partial Prerendering and After for faster loading.",
          "Simplified idea submission with a clean, intuitive design.",
          "Enhanced browsing with seamless performance optimization.",
        ]}
        technologies={[
          { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
          { name: "React", icon: "https://cdn.simpleicons.org/react" },
          { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
          { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
        ]}
      />
    </div>
  );
}
