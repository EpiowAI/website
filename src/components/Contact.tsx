import { TbArrowRight, TbBrandGithub, TbMail, TbMapPin } from "solid-icons/tb";
import type { Component } from "solid-js";
import { css } from "../../styled-system/css";

export const Contact: Component = () => {
	return (
		<section
			id="contact"
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
				<div class={css({ maxWidth: "4xl", mx: "auto", textAlign: "center" })}>
					<h2
						class={css({
							fontSize: { base: "4xl", md: "5xl", lg: "6xl" },
							fontWeight: "black",
							color: "white",
							mb: 6,
						})}
					>
						Let's Build{" "}
						<span
							class={css({
								bgGradient: "to-r",
								gradientFrom: "brand.primary",
								gradientTo: "brand.cyan",
								bgClip: "text",
								color: "transparent",
							})}
						>
							Together
						</span>
					</h2>
					<p
						class={css({
							fontSize: { base: "lg", md: "xl" },
							color: "gray.400",
							mb: 12,
						})}
					>
						Ready to transform your business with intelligent AI?
					</p>

					<div
						class={css({
							p: 8,
							bg: "rgba(255, 255, 255, 0.02)",
							backdropFilter: "blur(20px)",
							border: "1px solid rgba(168, 85, 247, 0.2)",
							borderRadius: "2xl",
							mb: 8,
						})}
					>
						<div
							class={css({ display: "flex", flexDirection: "column", gap: 4 })}
						>
							<a
								href="mailto:contact@epiow.com"
								class={css({
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: 3,
									p: 4,
									bg: "rgba(168, 85, 247, 0.1)",
									borderRadius: "lg",
									transition: "all 0.3s",
									_hover: { bg: "rgba(168, 85, 247, 0.2)" },
								})}
							>
								<TbMail size={24} class={css({ color: "brand.primary" })} />
								<span
									class={css({
										fontSize: "lg",
										fontWeight: "semibold",
										color: "brand.primary",
									})}
								>
									contact@epiow.com
								</span>
							</a>
							<div
								class={css({
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: 3,
								})}
							>
								<TbMapPin size={20} class={css({ color: "gray.400" })} />
								<span class={css({ color: "gray.300" })}>United Kingdom</span>
							</div>
						</div>
					</div>

					<a
						href="https://github.com/EpiowAI"
						target="_blank"
						rel="noopener noreferrer"
						class={css({
							display: "inline-flex",
							alignItems: "center",
							gap: 2,
							px: 8,
							py: 4,
							bg: "rgba(255, 255, 255, 0.05)",
							border: "1px solid rgba(255, 255, 255, 0.1)",
							borderRadius: "full",
							fontWeight: "semibold",
							color: "white",
							transition: "all 0.3s",
							_hover: {
								bg: "rgba(168, 85, 247, 0.1)",
								borderColor: "brand.primary",
							},
						})}
					>
						<TbBrandGithub size={20} />
						<span>GitHub</span>
						<TbArrowRight size={20} />
					</a>
				</div>
			</div>
		</section>
	);
};
