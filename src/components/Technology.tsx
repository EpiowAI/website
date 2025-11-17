import { type Component, For } from "solid-js";
import { css } from "../../styled-system/css";

const technologies = [
	"TypeScript",
	"Python",
	"TensorFlow",
	"PyTorch",
	"OpenAI",
	"Anthropic Claude",
	"SolidJS",
	"React",
	"Next.js",
	"Node.js",
	"Bun",
	"PostgreSQL",
	"Redis",
	"Docker",
	"Kubernetes",
	"AWS",
	"Azure",
	"GCP",
];

export const Technology: Component = () => {
	return (
		<section
			id="technology"
			class={css({
				py: { base: 20, md: 32 },
				bg: "brand.dark",
			})}
		>
			<div
				class={css({
					maxWidth: "1280px",
					mx: "auto",
					px: { base: 6, md: 8 },
				})}
			>
				<div
					class={css({
						textAlign: "center",
						mb: 12,
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
						Powered by{" "}
						<span
							class={css({
								bgGradient: "to-r",
								gradientFrom: "brand.accent",
								gradientTo: "brand.secondary",
								bgClip: "text",
								color: "transparent",
							})}
						>
							Cutting-Edge Tech
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
						We leverage the most advanced technologies to build robust, scalable
						AI solutions
					</p>
				</div>

				<div
					class={css({
						display: "flex",
						flexWrap: "wrap",
						gap: 3,
						justifyContent: "center",
						mb: 12,
					})}
				>
					<For each={technologies}>
						{(tech) => (
							<div
								class={css({
									px: 5,
									py: 2.5,
									bg: "rgba(255, 255, 255, 0.03)",
									backdropFilter: "blur(10px)",
									border: "1px solid rgba(255, 255, 255, 0.08)",
									borderRadius: "lg",
									color: "gray.300",
									fontSize: "sm",
									fontWeight: "medium",
									transition: "all 0.3s",
									_hover: {
										bg: "brand.primary",
										borderColor: "brand.primary",
										color: "white",
										transform: "translateY(-2px)",
									},
								})}
							>
								{tech}
							</div>
						)}
					</For>
				</div>

				<div
					class={css({
						p: 8,
						bg: "rgba(59, 130, 246, 0.05)",
						backdropFilter: "blur(10px)",
						border: "1px solid rgba(59, 130, 246, 0.2)",
						borderRadius: "2xl",
						textAlign: "center",
					})}
				>
					<p
						class={css({
							fontSize: { base: "md", md: "lg" },
							color: "gray.300",
							lineHeight: 1.8,
							maxWidth: "3xl",
							mx: "auto",
						})}
					>
						Our commitment to technical excellence means we're constantly
						exploring and adopting the latest innovations in AI and software
						development—ensuring your solutions are built with tomorrow's
						technology, today.
					</p>
				</div>
			</div>
		</section>
	);
};
