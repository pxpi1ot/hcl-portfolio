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
		"前端开发爱好者💻。喜欢使用React⚛️、Next.js🚀构建漂亮的、高效的系统🌟。",
	summary:
		"At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), [interned at big tech companies in Silicon Valley](https://www.youtube.com/watch?v=d-LJ2e5qKdE), and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
	avatarUrl: "/me.png",
	skills: {
		frontend: ["React", "Next.js", "Vue", "Uniapp", "TailwindCSS"],
		backend: ["Node.js", "Hono", "Nest", "Express", "Prisma ORM"],
		other: ["Typescript", "Javascript", "Vite", "Docker", "MySQL"],
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
			title: "任务管理系统",
			href: "https://live-docs.pxpilot.icu",

			active: true,
			description:
				"具有表格、看板、日程三种视图，可查看任务进度，分配任务，邀请成员加入工作区。使用Hono接管Next.js的Route Handlers提供后端接口，zod作为数据验证工具，保证前后端类型安全。",
			technologies: [
				"Next.js",
				"Typescript",
				"hello-pangea/dnd",
				"react-big-calendar",
				"Clerk",
				"TailwindCSS",
				"Shadcn UI",
				"zod",
				"Hono",
			],
			links: [
				{
					type: "网站",
					href: "https://task.pxpilot.icu",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "源码",
					href: "https://github.com/pxpi1ot/task",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/p-tasks.png",
		},
		{
			title: "实时通讯APP",
			href: "",

			active: true,
			description:
				"用Uniapp（nvue）实现类似微信的即时通讯平台app。实现了群聊，私聊，朋友圈，离线消息推送，本地聊天记录存储、发送文字，语音，定位（高德地图api），视频等功能",
			technologies: [
				"Uniapp",
				"Vuex",
				"Egg.js",
				"MinIO",
				"Redis",
				"MySQL",
				"WebSocket",
			],
			links: [],
			image: "/p-chat.png",
		},
		{
			title: "实时文档",
			href: "https://live-docs.pxpilot.icu",

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
					href: "https://live-docs.pxpilot.icu",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "源码",
					href: "https://github.com/pxpi1ot/LiveDocs",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "/p-livedocs.png",
		},
	],
} as const;
