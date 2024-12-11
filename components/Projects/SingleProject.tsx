import React from "react";
import Image from "next/image";
import { ViewCodeButton, ViewProjectButton } from "../Buttons/Buttons";
import { Project } from "@/types/projects";

const SingleProject = ({
  index,
  project: {
    title,
    description,
    tools,
    github_repo_url,
    project_live_url,
    canViewCode,
    canViewProject,
    thumbnail_url,
  },
}: {
  project: Project;
  index: number;
}) => {
  return (
    <div className="bg-[#F8F8F8] w-full">
      <div className="grid grid-cols-[1fr_55px] md:grid-cols-[40%_1fr_64px]">
        <div className="p-6 md:p-10 lg:p-16 lg:pb-0 border-b border-b-[#1E1E1E] md:border-b-0 md:h-fit">
          <h2 className="font-poppins text-xl md:text-3xl lg:text-4xl">
            {title}
          </h2>
        </div>

        <div className="col-span-2 md:col-span-1  md:border-x md:border-x-[#1E1E1E] flex items-center justify-center row-span-2 p-6 pt-10 md:p-10 lg:p-16">
          <Image
            src={thumbnail_url}
            alt="dli-library"
            width={undefined}
            height={undefined}
          />
        </div>

        <div className="row-start-1 col-start-2 md:row-start-auto md:col-start-auto md:row-span-2 py-8 md:py-16 flex flex-col justify-center md:justify-end items-center font-inter font-bold text-xs border-l border-b border-l-[#1E1E1E] border-b-[#1E1E1E] md:border-b-0 md:border-l-0">
          {`${index.toString().padStart(2, "0")}`}
        </div>

        <div className="font-poppins p-6 pt-0 pb-20 md:p-10 lg:p-16 flex flex-col gap-8 border-t-0 border-b border-b-[#1E1E1E] md:border-y border-[#1E1E1E] mb-16 col-span-2 md:col-auto relative">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl lg:text-2xl font-semibold">NEEDS</h3>
            <p className="text-justify text-xs sm:text-sm lg:text-base">
              {description}
            </p>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold">TOOLS</h3>
            <p className="text-justify text-xs sm:text-sm lg:text-base">
              {`${title} was built with ${tools.join(", ")}`}
            </p>
          </div>

          <div className="absolute -bottom-0 mx-auto translate-y-[50%] w-full flex justify-around md:justify-start gap-4 md:gap-10 pr-10">
            {canViewProject && (
              <ViewProjectButton text="View Project" url={project_live_url!} />
            )}
            {canViewCode && (
              <ViewCodeButton text="View Code" url={github_repo_url!} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
