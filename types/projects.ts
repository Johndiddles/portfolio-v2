export type Project = {
  title: string;
  description: string;
  tools: string[];
  status: "in_progress" | "completed" | "maintenance";
  thumbnail_url: string;
  canViewCode: boolean;
  canViewProject: boolean;
  github_repo_url?: string;
  project_live_url?: string;
};
