import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { HiDevicePhoneMobile } from "react-icons/hi2";
import { IoLogoWechat } from "react-icons/io5";
import { MailIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
	return (
		<main className="flex flex-col min-h-[100dvh] space-y-10">
			<Image
				className="absolute left-1/2 top-0 -z-10 -translate-x-1/2"
				src="/gradient-background-top.webp"
				alt="background-top"
				width="1512"
				height="550"
			></Image>
			<Image
				className="absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2 "
				src="/gradient-background-bottom.webp"
				alt="background-bottom"
				width="1512"
				height="550"
			></Image>
			<section id="hero">
				<div className="mx-auto w-full max-w-2xl space-y-8">
					<div className="gap-2 flex justify-between">
						<div className="flex-col flex flex-1 space-y-2">
							<BlurFadeText
								delay={BLUR_FADE_DELAY}
								className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
								yOffset={8}
								text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
							/>
							<BlurFadeText
								className="max-w-[600px] md:text-xl"
								delay={BLUR_FADE_DELAY}
								text={DATA.description}
							/>
						</div>
						<BlurFade delay={BLUR_FADE_DELAY * 2}>
							<Avatar className="size-28 border">
								<AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
								<AvatarFallback>{DATA.initials}</AvatarFallback>
							</Avatar>
						</BlurFade>
					</div>
				</div>
			</section>

			<section id="skills">
				<div className="flex min-h-0 flex-col gap-y-3">
					<BlurFade delay={BLUR_FADE_DELAY * 3}>
						<h2 className="text-xl font-bold">技能</h2>
					</BlurFade>
					<div className="flex flex-wrap gap-1">
						{DATA.skills.map((skill, id) => (
							<BlurFade key={skill} delay={BLUR_FADE_DELAY * 4 + id * 0.05}>
								<Badge key={skill}>{skill}</Badge>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			<section id="projects">
				<div className="space-y-12 w-full py-12">
					<BlurFade delay={BLUR_FADE_DELAY * 7}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
									我的作品
								</div>

								<p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									查看我最近的作品
								</p>
							</div>
						</div>
					</BlurFade>
					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
						{DATA.projects.map((project, id) => (
							<BlurFade
								key={project.title}
								delay={BLUR_FADE_DELAY * 8 + id * 0.05}
							>
								<ProjectCard
									href={project.href}
									key={project.title}
									title={project.title}
									description={project.description}
									dates={project.dates}
									tags={project.technologies}
									image={project.image}
									video={project.video}
									links={project.links}
								/>
							</BlurFade>
						))}
					</div>
				</div>
			</section>

			<section id="contact">
				<div className="space-y-12 w-full py-12  relative mx-auto flex max-w-2xl flex-col rounded-2xl p-8 shadow-sm ">
					<BlurFade delay={BLUR_FADE_DELAY * 9}>
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
								联系我
							</div>
						</div>
					</BlurFade>

					<div className="space-y-5">
						{DATA.contact.details.map((contact, index) => (
							<BlurFade key={index} delay={BLUR_FADE_DELAY * 10 + index * 0.05}>
								<div className="flex items-center gap-4">
									{contact.icon}
									<span className="text-muted-foreground">{contact.text}</span>
								</div>
							</BlurFade>
						))}
					</div>
				</div>
			</section>
			<div>
				<p className="text-sm text-muted-foreground">© 2024 Pxpilot HCl.</p>
			</div>
		</main>
	);
}
