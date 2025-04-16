import React from "react";

interface SingleProjectProps {
  title: string;
  description: string;
  githubLink: string;
  features: string[];
  technologies: { name: string; icon: string }[];
}

const SingleProject: React.FC<SingleProjectProps> = ({
  title,
  description,
  githubLink,
  features,
  technologies,
}) => {
  return (
    <div className="flex flex-col items-start lg:h-[500px]">
      {/* Header Section */}
      <div className="flex items-center gap-3">
        <h3 className="text-foreground text-2xl font-bold">{title}</h3>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="translate-y-px cursor-pointer rounded-full p-2 hover:bg-zinc-900"
          href={githubLink}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            height="20"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
        </a>
      </div>

      {/* Description */}
      <p className="text-muted-foreground my-2 text-base font-light">
        {description}
      </p>

      {/* Features */}
      <ul className="text-accent-foreground/85 mt-4 flex flex-col gap-y-2 text-base">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-1 mr-2 size-5 shrink-0 fill-pink-600 text-pink-400 bg-pink-600/20 lg:bg-black"
            >
              <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* Technologies */}
      <div className="mt-10 flex flex-wrap gap-3 text-sm">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="flex items-center gap-2 rounded-xl border border-white/[0.14] bg-neutral-900 px-3 py-1 text-sm"
          >
            <img height="16" width="16" alt={tech.name} src={tech.icon} />
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleProject;
