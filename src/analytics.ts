import { Project } from "./data";

export const sendAnalyticsClickEvent = (
  eventName: string,
  project: Project
) => {
  const command = "event";
  const eventParams = { repo: project.repo };
  gtag(command, eventName, eventParams);
};
