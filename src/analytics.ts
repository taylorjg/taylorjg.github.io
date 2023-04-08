import { Project } from "./data";

export const sendAnalyticsClickEvent = (
  eventName: string,
  project: Project
) => {
  const command = "event";
  const repo = { project };
  const eventParams = { repo };
  gtag(command, eventName, eventParams);
};
