import type { Component } from "solid-js";
import { For } from "solid-js";
import { css } from "../../styled-system/css";
import { container, stack } from "../../styled-system/patterns";

const services = [
	{
		icon: "🤖",
		title: "AI Application Development",
		description:
			"Custom AI-powered applications tailored to your business needs, from intelligent automation to predictive analytics.",
	},
	{
		icon: "🧠",
		title: "Machine Learning Solutions",
		description:
			"Advanced ML models that learn, adapt, and deliver insights that drive strategic decision-making.",
	},
	{
		icon: "💬",
		title: "Natural Language Processing",
		description:
			"Sophisticated NLP systems for chatbots, sentiment analysis, and intelligent text processing.",
	},
	{
		icon: "👁️",
		title: "Computer Vision",
		description:
			"State-of-the-art image and video analysis for automation, recognition, and visual intelligence.",
	},
	{
		icon: "📊",
		title: "Data Analytics & AI",
		description:
			"Transform raw data into actionable intelligence with our AI-driven analytics platforms.",
	},
	{
		icon: "⚙️",
		title: "AI Integration & Consulting",
		description:
			"Seamlessly integrate AI capabilities into your existing systems with expert guidance.",
	},
];

export const Services: Component = () => {
	return (
		<section
			id="services"
			class={css({
				py: { base: 20, md: 32 },
				bg: "rgba(10, 10, 15, 0.5)",
			})}
		>
			<div class={container({ maxWidth: "7xl" })}>
				<div class={stack({ gap: 16 })}>
					<div class={stack({ gap: 4, textAlign: "center" })}>
						<h2
							class={css({
								fontSize: { base: "3xl", md: "5xl" },
								fontWeight: "bold",
								color: "white",
								letterSpacing: "-0.02em",
							})}
						>
							AI Solutions That{" "}
							<span
								class={css({
									background:
										"linear-gradient(90deg, {colors.brand.primary} 0%, {colors.brand.secondary} 100%)",
									backgroundClip: "text",
									color: "transparent",
								})}
							>
								Transform
							</span>
						</h2>
						<p
							class={css({
								fontSize: { base: "lg", md: "xl" },
								color: "gray.400",
								maxWidth: "3xl",
								margin: "0 auto",
							})}
						>
							Comprehensive AI services designed to revolutionize your business
							operations
						</p>
					</div>

					<div
						class={css({
							display: "grid",
							gridTemplateColumns: {
								base: "1fr",
								md: "repeat(2, 1fr)",
								lg: "repeat(3, 1fr)",
							},
							gap: 6,
						})}
					>
						<For each={services}>
							{(service) => (
								<div
									class={css({
										p: 8,
										bg: "rgba(255, 255, 255, 0.03)",
										borderRadius: "xl",
										border: "1px solid rgba(255, 255, 255, 0.1)",
										transition: "all 0.3s",
										_hover: {
											bg: "rgba(0, 102, 255, 0.08)",
											borderColor: "brand.primary",
											transform: "translateY(-4px)",
											boxShadow: "0 20px 40px rgba(0, 102, 255, 0.2)",
										},
									})}
								>
									<div
										class={css({
											fontSize: "3xl",
											mb: 4,
										})}
									>
										{service.icon}
									</div>
									<h3
										class={css({
											fontSize: "xl",
											fontWeight: "bold",
											color: "white",
											mb: 3,
										})}
									>
										{service.title}
									</h3>
									<p class={css({ color: "gray.400", lineHeight: 1.6 })}>
										{service.description}
									</p>
								</div>
							)}
						</For>
					</div>
				</div>
			</div>
		</section>
	);
};
