"use client";

import ScrollProgress from "@/components/magicui/scroll-progress";

interface Props {
	children: React.ReactNode;
}

const NoteLayout = ({ children }: Props) => {
	return (
		<main className="">
			<ScrollProgress />
			{children}
		</main>
	);
};

export default NoteLayout;
