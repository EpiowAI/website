import { TbBulb, TbCode, TbRocket, TbWorld } from "solid-icons/tb";
import { type Component, For } from "solid-js";
import { css } from "../../styled-system/css";

const capabilities = [
	{
		icon: TbRocket,
		title: "Autonomous Intelligence",
		description:
			"Self-learning systems that adapt, evolve, and optimize without human intervention.",
		gradient: "linear-gradient(135deg, #a855f7 0%, #06b6d4 100%)",
	},
	{
		icon: TbCode,
		title: "Neural Architecture",
		description:
			"Advanced deep learning frameworks built for scale, speed, and precision.",
		gradient: "linear-gradient(135deg, #06b6d4 0%, #10b981 100%)",
	},
	{
		icon: TbBulb,
		title: "Cognitive Computing",
		description:
			"AI that thinks, reasons, and makes decisions like human experts, only faster.",
		gradient: "linear-gradient(135deg, #10b981 0%, #ec4899 100%)",
	},
	{
		icon: TbWorld,
		title: "Distributed AI",
		description:
			"Edge-to-cloud AI infrastructure that processes billions of data points in real-time.",
		gradient: "linear-gradient(135deg, #ec4899 0%, #a855f7 100%)",
	},
];

export const Vision: Component = () => {
	return (
		<section
			id="vision"
			class={css({
				py: { base: 24, md: 32 },
				bg: "brand.dark",
				position: "relative",
			})}
		>
			{/* Background elements */}
			<div
				class={css({
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: "800px",
					height: "800px",
					background:
						"radial-gradient(circle, rgba(168, 85, 247, 0.05), transparent)",
					filter: "blur(100px)",
					pointerEvents: "none",
				})}
			/>

			<div
				class={css({
					maxWidth: "1400px",
					mx: "auto",
					px: { base: 6, md: 8 },
					position: "relative",
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
							bg: "rgba(168, 85, 247, 0.1)",
							border: "1px solid rgba(168, 85, 247, 0.2)",
							borderRadius: "full",
							fontSize: "sm",
							fontWeight: "semibold",
							color: "brand.primary",
						})}
					>
						Our Capabilities
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
						Where{" "}
						<span
							class={css({
								bgGradient: "to-r",
								gradientFrom: "brand.primary",
								gradientTo: "brand.cyan",
								bgClip: "text",
								color: "transparent",
							})}
						>
							Intelligence
						</span>
						<br />
						Meets Innovation
					</h2>
					<p
						class={css({
							fontSize: { base: "lg", md: "xl" },
							color: "gray.400",
							maxWidth: "3xl",
							mx: "auto",
						})}
					>
						We're not just building AI—we're architecting the cognitive
						infrastructure of tomorrow's enterprises
					</p>
				</div>

				{/* Capabilities Grid */}
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
					<For each={capabilities}>
						{(capability, index) => (
							<div
								class={css({
									position: "relative",
									p: 8,
									bg: "rgba(255, 255, 255, 0.02)",
									backdropFilter: "blur(20px)",
									border: "1px solid rgba(255, 255, 255, 0.05)",
									borderRadius: "2xl",
									transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
									overflow: "hidden",
									_hover: {
										bg: "rgba(255, 255, 255, 0.05)",
										borderColor: "rgba(168, 85, 247, 0.5)",
										transform: "translateY(-8px)",
										boxShadow: "0 20px 60px rgba(168, 85, 247, 0.2)",
									},
								})}
							>
								{/* Gradient border effect on hover */}
								<div
									class={css({
										position: "absolute",
										inset: 0,
										background: capability.gradient,
										opacity: 0,
										borderRadius: "2xl",
										transition: "opacity 0.4s",
										pointerEvents: "none",
										_groupHover: {
											opacity: 0.1,
										},
									})}
								/>

								<div class={css({ position: "relative", zIndex: 1 })}>
									<div
										class={css({
											display: "inline-flex",
											p: 4,
											mb: 6,
											bg: "rgba(168, 85, 247, 0.1)",
											borderRadius: "xl",
											border: "1px solid rgba(168, 85, 247, 0.2)",
										})}
									>
										<capability.icon
											size={32}
											class={css({
												color: "brand.primary",
											})}
										/>
									</div>

									<h3
										class={css({
											fontSize: "2xl",
											fontWeight: "bold",
											color: "white",
											mb: 3,
										})}
									>
										{capability.title}
									</h3>

									<p
										class={css({
											color: "gray.400",
											lineHeight: 1.8,
											fontSize: "md",
										})}
									>
										{capability.description}
									</p>
								</div>

								{/* Index number */}
								<div
									class={css({
										position: "absolute",
										top: 8,
										right: 8,
										fontSize: "6xl",
										fontWeight: "black",
										color: "rgba(255, 255, 255, 0.02)",
										lineHeight: 1,
									})}
								>
									0{index() + 1}
								</div>
							</div>
						)}
					</For>
				</div>
			</div>
		</section>
	);
};
