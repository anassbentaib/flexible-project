import Model from "@/components/Model";
import ProjectForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";
import React from "react";
import { redirect } from "next/navigation";

const CreateProject = async () => {
  const session = await getCurrentUser();
  console.log("session", session);

  if (!session?.user) {
    redirect("/");
  }
  return (
    <Model>
      <h3 className="model-head-text">Create a New Project</h3>
      <ProjectForm type="create" session={session} />
    </Model>
  );
};

export default CreateProject;
