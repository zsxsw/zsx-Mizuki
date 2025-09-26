// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
}

export const projectsData: Project[] = [
	{
		id: "zsx-mizuki",
		title: "Mizuki Blog Theme的自用版本",
		description:
			"基于astro的mizuki博客的自用修改版本，感谢大佬开源！",
		image: "https://img.314926.xyz/images/2025/09/22/20250922193025414.webp",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "in-progress",
		liveDemo: "https://me.zhzsx.cn",
		sourceCode: "https://github.com/zsxsw/zsx-mizuki",
		startDate: "2025-09-25",
		endDate: "2025-09-25",
		featured: true,
		tags: ["Blog", "Theme", "Open Source"],
	},
	{
		id: "homepage",
		title: "个人主页",
		description:
			"基于fishcpy的主页修改版本。",
		image: "https://img.314926.xyz/images/2025/09/23/cover-25.webp",
		category: "web",
		techStack: ["Vue", "TypeScript"],
		status: "completed",
		liveDemo: "https://home.zhzsx.cn",
		sourceCode: "https://github.com/zsxsw/homepage",
		startDate: "2025-09-25",
		endDate: "2025-09-25",
		featured: true,
		tags: ["Portfolio", "Vue", "Animation"],
	},
	{
		id: "task-manager-app",
		title: "Task Manager App",
		description:
			"Cross-platform task management application supporting team collaboration and project management.",
		image: "",
		category: "mobile",
		techStack: ["React Native", "TypeScript", "Redux", "Firebase"],
		status: "in-progress",
		startDate: "2024-03-01",
		tags: ["Mobile", "Productivity", "Team Collaboration"],
	},
	{
		id: "data-visualization-tool",
		title: "Data Visualization Tool",
		description:
			"Data visualization tool supporting multiple chart types and interactive analysis.",
		image: "",
		category: "web",
		techStack: ["Vue.js", "D3.js", "TypeScript", "Node.js"],
		status: "completed",
		liveDemo: "https://dataviz.example.com",
		startDate: "2023-06-01",
		endDate: "2023-11-01",
		tags: ["Data Visualization", "Analytics", "Charts"],
	},
	{
		id: "e-commerce-platform",
		title: "E-commerce Platform",
		description:
			"Full-stack e-commerce platform including user management, product management, and order processing features.",
		image: "",
		category: "web",
		techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
		status: "planned",
		startDate: "2024-07-01",
		tags: ["E-commerce", "Full Stack", "Payment Integration"],
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => techSet.add(tech));
	});
	return Array.from(techSet).sort();
};
