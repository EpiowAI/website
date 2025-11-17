import type { Component } from "solid-js";
import { For } from "solid-js";
import { css } from "../../styled-system/css";
import { container, stack } from "../../styled-system/patterns";

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
			<div class={container({ maxWidth: "6xl" })}>
				<div class={stack({ gap: 12 })}>
					<div class={stack({ gap: 4, textAlign: "center" })}>
						<h2
							class={css({
								fontSize: { base: "3xl", md: "5xl" },
								fontWeight: "bold",
								color: "white",
								letterSpacing: "-0.02em",
							})}
						>
							Powered by{" "}
							<span
								class={css({
									background:
										"linear-gradient(90deg, {colors.brand.secondary} 0%, {colors.brand.primary} 100%)",
									backgroundClip: "text",
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
								maxWidth: "3xl",
								margin: "0 auto",
							})}
						>
							We leverage the most advanced technologies and frameworks to build
							robust, scalable AI solutions
						</p>
					</div>

					<div
						class={css({
							display: "flex",
							flexWrap: "wrap",
							gap: 4,
							justifyContent: "center",
						})}
					>
						<For each={technologies}>
							{(tech) => (
								<div
									class={css({
										px: 6,
										py: 3,
										bg: "rgba(255, 255, 255, 0.05)",
										borderRadius: "full",
										border: "1px solid rgba(255, 255, 255, 0.1)",
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
							mt: 8,
							p: 8,
							bg: "rgba(0, 102, 255, 0.1)",
							borderRadius: "2xl",
							border: "2px solid {colors.brand.primary}",
							textAlign: "center",
						})}
					>
						<p
							class={css({
								fontSize: { base: "lg", md: "xl" },
								color: "white",
								fontWeight: "medium",
								lineHeight: 1.6,
							})}
						>
							Our commitment to technical excellence means we're always
							exploring and adopting the latest innovations in AI and software
							development, ensuring your solutions are built with tomorrow's
							technology, today.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
