import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CalloutProps {
	children?: ReactNode;
	type?: "default" | "warning" | "danger";
}

export function Callout({
	children,
	type = "default",
	...props
}: CalloutProps) {
	return (
		<div
			className={cn(
				"dark:text-gray-200 flex  my-6 rounded-xl border px-4 shadow-lg bg-green-500/50 backdrop-blur-sm",
				{
					"bg-red-500/50 backdrop-blur-sm": type === "danger",
					"bg-yellow-500/50 backdrop-blur-sm": type === "warning",
				}
			)}
			{...props}
		>
			<div className="p-0">{children}</div>
		</div>
	);
}
