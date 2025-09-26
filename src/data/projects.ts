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
		id: "Sink",
		title: "Sink",
		description:
			"自用短链工具。",
		image: "https://img.314926.xyz/images/2025/09/23/cover-26.webp",
		category: "web",
		techStack: ["Vue", "TypeScript"],
		status: "completed",
		liveDemo: "https://sink.zhzsx.cn",
		sourceCode: "https://github.com/zsxsw/Sink",
		startDate: "2025-09-18",
		endDate: "2025-09-22",
		tags: ["analysis", "short link"],
	},
	{
		id: "frosti-blog",
		title: "Frosti-blog",
		description:
			"A clean, elegant, and fast static blog template! 🚀 Developed with Astro",
		image: "https://img.314926.xyz/images/2025/09/23/cover-27.webp",
		category: "web",
		techStack: ["Astro", "mdx"],
		status: "completed",
		liveDemo: "https://blog.zhzsx.cn",
		sourceCode: "https://github.com/zsxsw/Frosti-blog",
		startDate: "2025-09-20",
		endDate: "2025-09-22",
		tags: ["astro", "blog"],
	},
	{
		id: "clouds-mail",
		title: "clouds-mail",
		description:
			"基于Cloudflare Workers的邮件转发服务",
		image: "https://img.314926.xyz/images/2025/09/25/cover-28.webp",
		category: "web",
		techStack: ["Vue", "TypeScript"],
		status: "completed",
		liveDemo: "https://mail.zhzsx.cn",
		startDate: "2025-09-12",
		endDate: "2025-09-15",
		tags: ["mail"],
	},
	{
		id: "Uptime-Status",
		title: "Uptime-Status",
		description:
			"优雅的站点状态监控面板",
		image: "https://img.314926.xyz/images/2025/09/25/cover-29.webp",
		category: "web",
		techStack: ["Vue", "JavaScript"],
		status: "completed",
		liveDemo: "https://status.zhzsx.cn",
		startDate: "2025-09-24",
		endDate: "2025-09-24",
		tags: ["uptime status"],
	},
	{
		id: "moment",
		title: "Github-issues-moment",
		description:
			"基于github issues的动态页面",
		image: "https://img.314926.xyz/images/2025/09/25/cover-30.webp",
		category: "web",
		techStack: ["html"],
		status: "in-progress",
		liveDemo: "https://moment.zhzsx.cn",
		sourceCode: "https://github.com/zsxsw/github-issues-moments",
		startDate: "2025-09-24",
		endDate: "2025-09-24",
		tags: ["moment"],
	},
	{
		id: "zsx-SaroProck",
		title: "zsx-SaroProck",
		description:
			"基于Telegram的动态页面和主页",
		image: "https://img.314926.xyz/images/2025/09/25/cover-31.webp",
		category: "web",
		techStack: ["Astro", "TypeScript", "MDX"],
		status: "completed",
		liveDemo: "https://www.zhzsx.cn",
		sourceCode: "https://github.com/zsxsw/zsx-SaroProck",
		startDate: "2025-09-24",
		endDate: "2025-09-24",
		tags: ["SaroProck"],
	},
	{
		id: "zsx-astro-theme-fishcpy",
		title: "zsx-astro-theme-fishcpy",
		description:
			"基于astro-theme-fishcpy的自用修改版本",
		image: "https://img.314926.xyz/images/2025/09/26/cover-32.webp",
		category: "web",
		techStack: ["Astro", "TypeScript", "Svelte"],
		status: "completed",
		liveDemo: "https://blog-v3.zhzsx.cn",
		sourceCode: "https://github.com/zsxsw/zsx-astro-theme-fishcpy",
		startDate: "2025-09-23",
		endDate: "2025-09-25",
		tags: ["astro-theme-fishcpy"],
	},
	{
		id: "piliplus",
		title: "piliplus",
		description:
			"B站的第三方改版，目前支持移动、平板和PC端",
		featured: true,
		image: "https://img.314926.xyz/images/2025/09/26/cover-33.webp",
		category: "mobile",
		techStack: ["Dart", "GLSL", "C++"],
		status: "in-progress",
		liveDemo: "https://blog-v3.zhzsx.cn",
		sourceCode: "https://github.com/zsxsw/zsx-astro-theme-fishcpy",
		startDate: "2024-10-23",
		tags: ["piliplus"],
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
