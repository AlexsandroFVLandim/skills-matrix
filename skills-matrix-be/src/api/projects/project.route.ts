import { Router } from "express";
import ProjectController from "./project.controller";

const project: Router = Router();

const projectController = new ProjectController();
project.get("/", projectController.getProjects);
project.post("/", projectController.createProjects);

project.get("/:project_id", projectController.getProject);
project.get("/:project_id/teams", projectController.getProjectTeams);
project.get("/:project_id/positions", projectController.getProjectPositions);

export default project;
