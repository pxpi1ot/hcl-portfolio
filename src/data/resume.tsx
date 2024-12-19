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
	skills: [
		"React",
		"Next.js",
		"Vue",
		"Uniapp",
		"Typescript",
		"Javascript",
		"TailwindCSS",
		"Node.js",
		"Hono.js",
		"Drizzle ORM",
		"ShadcnUI",
		"Postgres",
		"Mysql",
		"Docker",
	],
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
			title: "Chat Collect",
			href: "https://chatcollect.com",
			dates: "Jan 2024 - Feb 2024",
			active: true,
			description:
				"With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Stripe",
				"Shadcn UI",
				"Magic UI",
			],
			links: [
				{
					type: "Website",
					href: "https://chatcollect.com",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "",
			video:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
		},
		{
			title: "Magic UI",
			href: "https://magicui.design",
			dates: "June 2023 - Present",
			active: true,
			description:
				"Designed, developed and sold animated UI components for developers.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Stripe",
				"Shadcn UI",
				"Magic UI",
			],
			links: [
				{
					type: "Website",
					href: "https://magicui.design",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/magicuidesign/magicui",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "https://cdn.magicui.design/bento-grid.mp4",
		},
		{
			title: "llm.report",
			href: "https://llm.report",
			dates: "April 2023 - September 2023",
			active: true,
			description:
				"Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Shadcn UI",
				"Magic UI",
				"Stripe",
				"Cloudflare Workers",
			],
			links: [
				{
					type: "Website",
					href: "https://llm.report",
					icon: <Icons.globe className="size-3" />,
				},
				{
					type: "Source",
					href: "https://github.com/dillionverma/llm.report",
					icon: <Icons.github className="size-3" />,
				},
			],
			image: "",
			video: "https://cdn.llm.report/openai-demo.mp4",
		},
		{
			title: "Automatic Chat",
			href: "https://automatic.chat",
			dates: "April 2023 - March 2024",
			active: true,
			description:
				"Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
			technologies: [
				"Next.js",
				"Typescript",
				"PostgreSQL",
				"Prisma",
				"TailwindCSS",
				"Shadcn UI",
				"Magic UI",
				"Stripe",
				"Cloudflare Workers",
			],
			links: [
				{
					type: "Website",
					href: "https://automatic.chat",
					icon: <Icons.globe className="size-3" />,
				},
			],
			image: "",
			video:
				"https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
		},
	],
} as const;
