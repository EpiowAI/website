import { type Component, For } from "solid-js";
import { css } from "../../styled-system/css";

const stack = [
	{
		category: "ML Frameworks",
		items: ["TensorFlow", "PyTorch", "JAX", "Hugging Face"],
	},
	{ category: "Cloud & Infra", items: ["AWS", "GCP", "Azure", "Kubernetes"] },
	{ category: "Languages", items: ["Python", "TypeScript", "Rust", "Go"] },
	{ category: "LLMs & AI", items: ["GPT-4", "Claude", "Gemini", "Llama 3"] },
];

export const Technology: Component = () => {
	return (
		<section
			id="technology"
			class={css({
				py: { base: 24, md: 32 },
				bg: "brand.dark",
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
				<div class={css({ textAlign: "center", mb: 16 })}>
					<h2
						class={css({
							fontSize: { base: "4xl", md: "5xl", lg: "6xl" },
							fontWeight: "black",
							mb: 6,
							lineHeight: 1.1,
						})}
					>
						<span class={css({ color: "white" })}>Built with </span>
						<span
							class={css({
								bgGradient: "to-r",
								gradientFrom: "brand.ai",
								gradientTo: "brand.primary",
								bgClip: "text",
								color: "transparent",
							})}
						>
							Cutting-Edge Tech
						</span>
					</h2>
				</div>

				<div
					class={css({
						display: "grid",
						gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)" },
						gap: 6,
					})}
				>
					<For each={stack}>
						{(tech) => (
							<div
								class={css({
									p: 6,
									bg: "rgba(255, 255, 255, 0.02)",
									backdropFilter: "blur(20px)",
									border: "1px solid rgba(255, 255, 255, 0.05)",
									borderRadius: "xl",
								})}
							>
								<h3
									class={css({
										fontSize: "lg",
										fontWeight: "bold",
										color: "brand.ai",
										mb: 4,
									})}
								>
									{tech.category}
								</h3>
								<div class={css({ display: "flex", flexWrap: "wrap", gap: 2 })}>
									<For each={tech.items}>
										{(item) => (
											<span
												class={css({
													px: 3,
													py: 1.5,
													bg: "rgba(16, 185, 129, 0.1)",
													border: "1px solid rgba(16, 185, 129, 0.2)",
													borderRadius: "md",
													fontSize: "sm",
													color: "gray.300",
													fontWeight: "medium",
												})}
											>
												{item}
											</span>
										)}
									</For>
								</div>
							</div>
						)}
					</For>
				</div>
			</div>
		</section>
	);
};
