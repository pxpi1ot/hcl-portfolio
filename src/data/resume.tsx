import { Icons } from "@/components/icons";
import { HomeIcon, MailIcon, NotebookIcon } from "lucide-react";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { IoLogoWechat } from "react-icons/io5";

export const DATA = {
	name: "Pxpilot",
	initials: "HCl",
	url: "http://localhost:3000",
	location: "Xiamen, Fujian",
	locationLink: "https://www.google.com/maps/place/sanfrancisco",
	description:
		"TS/JS爱好者💻。喜欢使用React⚛️、Next.js🚀构建漂亮的、高效的系统🌟。",
	summary:
		"At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
	avatarUrl: "/me.png",
	skills: {
		frontend: [
			"React",
			"Next.js",
			"Vue",
			"Uniapp",
			"ECharts",
			"TailwindCSS",
			"ShadcnUI",
			"Ant Design",
		],
		backend: ["Node.js", "Hono.js", "Express", "Drizzle ORM"],
		databases: ["PostgresSQL", "MySQL"],
		other: ["Typescript", "Javascript", "Docker"],
	},
	navbar: [
		{ href: "/", icon: HomeIcon, label: "主页" },
		{ href: "/notes", icon: NotebookIcon, label: "笔记" },
	],
	contact: {
		details: [
			{
				icon: <HiDevicePhoneMobile className="size-6" />,
				text: "18960059402",
			},
			{
				icon: <MailIcon className="size-6" />,
				text: "pxpilot@qq.com",
			},

			{
				icon: <IoLogoWechat className="size-6" />,
				text: "h18960059402",
			},
		],

		social: {
			GitHub: {
				name: "GitHub",
				url: "https://github.com/pxpi1ot",
				icon: Icons.github,

				navbar: true,
			},
			X: {
				name: "X",
				url: "https://x.com/pxpi1ot",
				icon: Icons.x,

				navbar: true,
			},
			email: {
				name: "Send Email",
				url: "#",
				icon: Icons.email,

				navbar: false,
			},
		},
	},

	projects: [
		{
			title: "实时文档",
			href: "https://live-docs-beta-weld.vercel.app/",

			active: true,
			description: "基于lexical编辑器和Liveblocks云服务实现的多人在线协作文档",
			technologies: [
				"Next.js",
				"Typescript",
				"Liveblocks",
				"Clerk",
				"TailwindCSS",
				"Shadcn UI",
				"lexical",
			],
			links: [
				{
					type: "网站",
					href: "https://live-docs-beta-weld.vercel.app/",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "源码",
					href: "https://github.com/pxpi1ot/LiveDocs",
					icon: <Icons.github className="size-3" />,
				},
			],
			image:
				"https://cdn3.easylink.cc/14bstu_postspark_export_2025-01-04_11-42-52.png?e=1735965797&token=J_WyMIdhZtwb0E0QHWRqEfQrd5lVSWLffl9QxaxP:o0tWrPtvxv8GCllVEwpWOjZFzb0=",
		},
	],
} as const;
