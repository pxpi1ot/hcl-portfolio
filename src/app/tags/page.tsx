import BlurFade from "@/components/magicui/blur-fade";
import { posts } from "#site/content";
import { getAllTags, sortTagsByCount } from "@/lib/utils";
import { Tag } from "@/components/tags";

const BLUR_FADE_DELAY = 0.04;

export default function TagsPage() {
	const tags = getAllTags(posts);

	const sortedTags = sortTagsByCount(tags);

	return (
		<div className="flex flex-col md:flex-row relative gap-10">
			<div>
				<BlurFade delay={BLUR_FADE_DELAY}>
					<h1 className="font-medium text-2xl mb-8 ">分类</h1>
				</BlurFade>
				<div className="absolute flex flex-wrap gap-2">
					{sortedTags?.map((tag, index) => (
						<BlurFade delay={BLUR_FADE_DELAY + index * 0.05} key={tag}>
							<Tag tag={tag} key={tag} count={tags[tag]} />
						</BlurFade>
					))}
				</div>
			</div>
		</div>
	);
}
