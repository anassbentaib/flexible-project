import Model from "@/components/Model";
import ProjectForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";
import React from "react";
import { redirect } from "next/navigation";
import { getProjectDetails } from "@/lib/action";
import { ProjectInterface } from "@/common.types";

const EditProject = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();
  const result = await getProjectDetails(id)as {
    project?: ProjectInterface
  }

  if (!session?.user) {
    redirect("/");
  }
  return (
    <Model>
      <h3 className="model-head-text">Edit Project</h3>
      <ProjectForm type="edit" session={session} project={result?.project}/>
    </Model>
  );
};

export default EditProject;
