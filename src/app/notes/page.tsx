"use client";
import BlurFade from "@/components/magicui/blur-fade";
import { posts } from "#site/content";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { formatDateOrDaysAgo, sortPosts } from "@/lib/utils";
import { QueryPagination } from "@/components/query-pagination";

// export const metadata = {
// 	title: "Notes",
// 	description: "My ramblings all things web dev.",
// };
const POSTS_PER_PAGE = 5;

interface BlogPageProps {
	searchParams: {
		page?: string;
	};
}

const textBlur = {
	initial: {
		filter: "blur(0px)",
		opacity: 1,
	},
	show: {
		filter: "blur(4px)",

		transition: { duration: 0.4 },
	},
	hide: {
		filter: "blur(0px)",
		opacity: 1,
		transition: { duration: 0.4 },
	},
};

const BLUR_FADE_DELAY = 0.04;

export default function BlogPage({ searchParams }: BlogPageProps) {
	const currentPage = Number(searchParams?.page) || 1;
	const sortedPosts = sortPosts(posts.filter(post => post.published));
	const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

	const displayPosts = sortedPosts.slice(
		POSTS_PER_PAGE * (currentPage - 1),
		POSTS_PER_PAGE * currentPage
	);
	const [activeIndex, setActiveIndex] = useState(-1);
	return (
		<section className="space-y-8">
			{currentPage <= 1 ? (
				<BlurFade delay={BLUR_FADE_DELAY}>
					<h1 className="font-medium text-2xl mb-8 tracking-tighter">笔记</h1>
					<p className="text-muted-foreground">我关于WEB开发的各种随笔。</p>
				</BlurFade>
			) : null}

			{displayPosts?.length > 0 ? (
				displayPosts.map((post, index) => (
					<BlurFade delay={BLUR_FADE_DELAY * 2 + index * 0.05} key={post.slug}>
						<Link
							className="flex flex-col space-y-1 mb-4"
							href={post.slug}
							onMouseOver={() => setActiveIndex(index)}
							onMouseLeave={() => setActiveIndex(-1)}
						>
							<motion.div
								variants={textBlur}
								initial="initial"
								animate={
									activeIndex !== -1 && activeIndex !== index ? "show" : "hide"
								}
								className="w-full flex flex-col "
							>
								<p className="w-fit tracking-tight text-base">{post.title}</p>
								<p className=" mt-2 h-6 text-xs text-muted-foreground">
									{formatDateOrDaysAgo(post.date)}
								</p>
							</motion.div>
						</Link>
					</BlurFade>
				))
			) : (
				<p>没有笔记。</p>
			)}
			<BlurFade delay={BLUR_FADE_DELAY * 3}>
				<QueryPagination
					className="justify-end max-w-[720px] "
					totalPages={totalPages}
				/>
			</BlurFade>
		</section>
	);
}
