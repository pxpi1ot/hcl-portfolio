import { posts } from "#site/content";
import { MDXContent } from "@/components/mdx-components";
import { notFound } from "next/navigation";

import { Metadata } from "next";
import { formatDateOrDaysAgo } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";
// import { siteConfig } from "@/config/site";
// import { Tag } from "@/components/tag";
interface PostPageProps {
	params: {
		slug: string[];
	};
}

async function getPostFromParams(params: PostPageProps["params"]) {
	const slug = params?.slug?.join("/");
	const post = posts.find(post => post.slugAsParams === slug);

	return post;
}

export async function generateMetadata({
	params,
}: PostPageProps): Promise<Metadata> {
	const post = await getPostFromParams(params);

	if (!post) {
		return {};
	}

	const ogSearchParams = new URLSearchParams();
	ogSearchParams.set("title", post.title);

	return {
		title: post.title,
		description: post.description,
		// authors: { name: siteConfig.author },
		openGraph: {
			title: post.title,
			description: post.description,
			type: "article",
			url: post.slug,
			images: [
				{
					url: `/api/og?${ogSearchParams.toString()}`,
					width: 1200,
					height: 630,
					alt: post.title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.description,
			images: [`/api/og?${ogSearchParams.toString()}`],
		},
	};
}

export async function generateStaticParams(): Promise<
	PostPageProps["params"][]
> {
	return posts.map(post => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
	const post = await getPostFromParams(params);

	if (!post || !post.published) {
		notFound();
	}
	const BLUR_FADE_DELAY = 0.04;

	return (
		<article className="container py-6 prose dark:prose-invert ">
			<BlurFade delay={BLUR_FADE_DELAY}>
				<h2 className="mb-2">{post.title}</h2>
			</BlurFade>
			<BlurFade delay={BLUR_FADE_DELAY * 2}>
				<p className="mt-2 h-6 text-muted-foreground">
					{formatDateOrDaysAgo(post.date)}
				</p>{" "}
			</BlurFade>
			{/* <div className="flex gap-2 mb-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div> */}
			{post.description ? (
				<BlurFade delay={BLUR_FADE_DELAY * 3}>
					<p className="text-md ">前文：{post.description}</p>
				</BlurFade>
			) : null}
			<BlurFade delay={BLUR_FADE_DELAY * 4}>
				<hr className="my-4 border-gray-300 dark:border-muted" />
				<MDXContent code={post.body} />
			</BlurFade>
		</article>
	);
}
