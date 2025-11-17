import {
	TbBrain,
	TbChartDots3,
	TbChevronRight,
	TbCpu,
	TbEye,
	TbMessageCircle,
	TbNetwork,
} from "solid-icons/tb";
import { type Component, For } from "solid-js";
import { css } from "../../styled-system/css";

const solutions = [
	{
		icon: TbBrain,
		title: "Neural AI Systems",
		description:
			"Deep learning architectures that learn,  adapt, and evolve autonomously.",
		features: [
			"Transformer Models",
			"Reinforcement Learning",
			"Transfer Learning",
		],
	},
	{
		icon: TbCpu,
		title: "Edge AI Computing",
		description:
			"Ultra-low latency AI processing at the edge for real-time decision making.",
		features: [
			"On-Device ML",
			"Distributed Intelligence",
			"Real-time Processing",
		],
	},
	{
		icon: TbMessageCircle,
		title: "Conversational AI",
		description:
			"Next-gen NLP systems with human-like understanding and context awareness.",
		features: ["Multi-modal Chat", "Sentiment Analysis", "Intent Recognition"],
	},
	{
		icon: TbEye,
		title: "Computer Vision",
		description:
			"Advanced visual AI for object detection, tracking, and scene understanding.",
		features: ["Object Recognition", "Video Analytics", "3D Reconstruction"],
	},
	{
		icon: TbChartDots3,
		title: "Predictive Analytics",
		description:
			"AI-powered forecasting and anomaly detection for proactive insights.",
		features: ["Time Series", "Anomaly Detection", "Forecasting Models"],
	},
	{
		icon: TbNetwork,
		title: "AI Infrastructure",
		description:
			"Scalable ML platforms and orchestration for enterprise AI deployment.",
		features: ["MLOps Pipeline", "Model Serving", "Auto-scaling"],
	},
];

export const Services: Component = () => {
	return (
		<section
			id="solutions"
			class={css({
				py: { base: 24, md: 32 },
				bg: "brand.darker",
				position: "relative",
			})}
		>
			<div
				class={css({
					maxWidth: "1400px",
					mx: "auto",
					px: { base: 6, md: 8 },
				})}
			>
				{/* Header */}
				<div
					class={css({
						textAlign: "center",
						mb: 20,
					})}
				>
					<div
						class={css({
							display: "inline-block",
							px: 4,
							py: 2,
							mb: 6,
							bg: "rgba(6, 182, 212, 0.1)",
							border: "1px solid rgba(6, 182, 212, 0.2)",
							borderRadius: "full",
							fontSize: "sm",
							fontWeight: "semibold",
							color: "brand.cyan",
						})}
					>
						AI Solutions
					</div>
					<h2
						class={css({
							fontSize: { base: "4xl", md: "5xl", lg: "6xl" },
							fontWeight: "black",
							color: "white",
							mb: 6,
							lineHeight: 1.1,
						})}
					>
						Enterprise-Grade{" "}
						<span
							class={css({
								bgGradient: "to-r",
								gradientFrom: "brand.cyan",
								gradientTo: "brand.pink",
								bgClip: "text",
								color: "transparent",
							})}
						>
							AI Systems
						</span>
					</h2>
					<p
						class={css({
							fontSize: { base: "lg", md: "xl" },
							color: "gray.400",
							maxWidth: "3xl",
							mx: "auto",
						})}
					>
						Production-ready AI solutions engineered for performance,
						scalability, and reliability
					</p>
				</div>

				{/* Solutions Grid */}
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
					<For each={solutions}>
						{(solution) => (
							<div
								class={css({
									position: "relative",
									p: 6,
									bg: "rgba(255, 255, 255, 0.02)",
									backdropFilter: "blur(20px)",
									border: "1px solid rgba(255, 255, 255, 0.05)",
									borderRadius: "xl",
									transition: "all 0.3s",
									_hover: {
										bg: "rgba(255, 255, 255, 0.04)",
										borderColor: "rgba(6, 182, 212, 0.3)",
										transform: "translateY(-4px)",
										boxShadow: "0 20px 40px rgba(6, 182, 212, 0.1)",
									},
								})}
							>
								<solution.icon
									size={40}
									class={css({
										color: "brand.cyan",
										mb: 4,
									})}
								/>

								<h3
									class={css({
										fontSize: "xl",
										fontWeight: "bold",
										color: "white",
										mb: 2,
									})}
								>
									{solution.title}
								</h3>

								<p
									class={css({
										color: "gray.400",
										fontSize: "sm",
										lineHeight: 1.7,
										mb: 4,
									})}
								>
									{solution.description}
								</p>

								{/* Features */}
								<div
									class={css({
										display: "flex",
										flexWrap: "wrap",
										gap: 2,
										mb: 4,
									})}
								>
									<For each={solution.features}>
										{(feature) => (
											<span
												class={css({
													px: 2.5,
													py: 1,
													bg: "rgba(6, 182, 212, 0.1)",
													border: "1px solid rgba(6, 182, 212, 0.2)",
													borderRadius: "md",
													fontSize: "xs",
													color: "brand.cyan",
													fontWeight: "medium",
												})}
											>
												{feature}
											</span>
										)}
									</For>
								</div>

								{/* Learn more link */}
								<a
									href="#contact"
									class={css({
										display: "inline-flex",
										alignItems: "center",
										gap: 1,
										fontSize: "sm",
										fontWeight: "semibold",
										color: "brand.cyan",
										transition: "all 0.3s",
										_hover: {
											gap: 2,
										},
									})}
								>
									Learn more
									<TbChevronRight size={16} />
								</a>
							</div>
						)}
					</For>
				</div>
			</div>
		</section>
	);
};
