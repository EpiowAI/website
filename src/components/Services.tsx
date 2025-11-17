import {
	TbBrain,
	TbChartBar,
	TbEye,
	TbMessageCircle,
	TbRobot,
	TbSettings,
} from "solid-icons/tb";
import { type Component, For } from "solid-js";
import { css } from "../../styled-system/css";

const services = [
	{
		icon: TbRobot,
		title: "AI Application Development",
		description:
			"Custom AI-powered applications tailored to your needs—from intelligent automation to predictive analytics.",
	},
	{
		icon: TbBrain,
		title: "Machine Learning Solutions",
		description:
			"Advanced ML models that learn, adapt, and deliver insights for strategic decision-making.",
	},
	{
		icon: TbMessageCircle,
		title: "Natural Language Processing",
		description:
			"Sophisticated NLP systems for chatbots, sentiment analysis, and intelligent text processing.",
	},
	{
		icon: TbEye,
		title: "Computer Vision",
		description:
			"State-of-the-art image and video analysis for automation, recognition, and visual intelligence.",
	},
	{
		icon: TbChartBar,
		title: "Data Analytics & AI",
		description:
			"Transform raw data into actionable intelligence with AI-driven analytics platforms.",
	},
	{
		icon: TbSettings,
		title: "AI Integration",
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
				bg: "brand.darker",
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
						AI Solutions That{" "}
						<span
							class={css({
								bgGradient: "to-r",
								gradientFrom: "brand.primary",
								gradientTo: "brand.secondary",
								bgClip: "text",
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
							maxWidth: "2xl",
							mx: "auto",
						})}
					>
						Comprehensive AI services designed to revolutionize your business
					</p>
				</div>

				{/* Services Grid */}
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
									p: 6,
									bg: "rgba(255, 255, 255, 0.02)",
									backdropFilter: "blur(10px)",
									border: "1px solid rgba(255, 255, 255, 0.05)",
									borderRadius: "xl",
									transition: "all 0.3s",
									cursor: "pointer",
									_hover: {
										bg: "rgba(59, 130, 246, 0.05)",
										borderColor: "brand.primary",
										transform: "translateY(-4px)",
										boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.25)",
									},
								})}
							>
								<service.icon
									size={40}
									class={css({ color: "brand.primary", mb: 4 })}
								/>
								<h3
									class={css({
										fontSize: "lg",
										fontWeight: "bold",
										color: "white",
										mb: 2,
									})}
								>
									{service.title}
								</h3>
								<p
									class={css({
										color: "gray.400",
										fontSize: "sm",
										lineHeight: 1.7,
									})}
								>
									{service.description}
								</p>
							</div>
						)}
					</For>
				</div>
			</div>
		</section>
	);
};
