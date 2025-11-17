import { type Component, For } from "solid-js";
import { css } from "../../styled-system/css";

const visionPoints = [
	{
		icon: "🚀",
		title: "Innovation First",
		description:
			"We don't follow trends—we create them. Pushing boundaries with groundbreaking AI solutions that set industry standards.",
		color: "brand.primary",
	},
	{
		icon: "⚡",
		title: "Technical Excellence",
		description:
			"Built for performance and scalability. Every solution leverages cutting-edge architecture and best practices.",
		color: "brand.accent",
	},
	{
		icon: "🎯",
		title: "Impact Driven",
		description:
			"Creating tangible value. Our AI solutions solve real problems and deliver measurable business results.",
		color: "brand.secondary",
	},
	{
		icon: "🌍",
		title: "Global Vision",
		description:
			"Based in the UK, thinking globally. Building the future where AI seamlessly integrates into business and life.",
		color: "brand.primary",
	},
];

export const Vision: Component = () => {
	return (
		<section
			id="vision"
			class={css({
				py: { base: 20, md: 32 },
				bg: "brand.dark",
				position: "relative",
			})}
		>
			<div
				class={css({
					maxWidth: "1280px",
					mx: "auto",
					px: { base: 6, md: 8 },
				})}
			>
				{/* Header */}
				<div
					class={css({
						textAlign: "center",
						mb: 16,
					})}
				>
					<h2
						class={css({
							fontSize: { base: "3xl", md: "4xl", lg: "5xl" },
							fontWeight: "bold",
							color: "white",
							mb: 4,
						})}
					>
						Our Vision
					</h2>
					<p
						class={css({
							fontSize: { base: "lg", md: "xl" },
							color: "gray.400",
							maxWidth: "2xl",
							mx: "auto",
						})}
					>
						Shaping tomorrow's digital landscape through innovative AI solutions
					</p>
				</div>

				{/* Grid */}
				<div
					class={css({
						display: "grid",
						gridTemplateColumns: {
							base: "1fr",
							md: "repeat(2, 1fr)",
						},
						gap: 6,
					})}
				>
					<For each={visionPoints}>
						{(point) => (
							<div
								class={css({
									position: "relative",
									p: 8,
									bg: "rgba(255, 255, 255, 0.02)",
									backdropFilter: "blur(10px)",
									border: "1px solid rgba(255, 255, 255, 0.05)",
									borderRadius: "xl",
									transition: "all 0.3s",
									_hover: {
										bg: "rgba(255, 255, 255, 0.05)",
										borderColor: point.color,
										transform: "translateY(-4px)",
									},
								})}
							>
								<div
									class={css({
										display: "flex",
										alignItems: "center",
										gap: 4,
										mb: 4,
									})}
								>
									<div
										class={css({
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
											width: 14,
											height: 14,
											fontSize: "2xl",
											bg: `rgba(59, 130, 246, 0.1)`,
											borderRadius: "lg",
										})}
									>
										{point.icon}
									</div>
									<h3
										class={css({
											fontSize: "xl",
											fontWeight: "bold",
											color: "white",
										})}
									>
										{point.title}
									</h3>
								</div>
								<p
									class={css({
										color: "gray.400",
										lineHeight: 1.7,
									})}
								>
									{point.description}
								</p>
							</div>
						)}
					</For>
				</div>
			</div>
		</section>
	);
};
