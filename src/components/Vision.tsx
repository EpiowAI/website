import type { Component } from "solid-js";
import { css } from "../../styled-system/css";
import { container, stack } from "../../styled-system/patterns";

export const Vision: Component = () => {
	return (
		<section
			id="vision"
			class={css({
				py: { base: 20, md: 32 },
				bg: "brand.dark",
			})}
		>
			<div class={container({ maxWidth: "6xl" })}>
				<div
					class={stack({
						gap: 16,
					})}
				>
					<div class={stack({ gap: 4, textAlign: "center" })}>
						<h2
							class={css({
								fontSize: { base: "3xl", md: "5xl" },
								fontWeight: "bold",
								color: "white",
								letterSpacing: "-0.02em",
							})}
						>
							Our Vision
						</h2>
						<p
							class={css({
								fontSize: { base: "lg", md: "xl" },
								color: "gray.400",
								maxWidth: "3xl",
								margin: "0 auto",
							})}
						>
							Shaping tomorrow's digital landscape through innovative AI
							solutions
						</p>
					</div>

					<div
						class={css({
							display: "grid",
							gridTemplateColumns: { base: "1fr", md: "repeat(2, 1fr)" },
							gap: 8,
						})}
					>
						<div
							class={css({
								p: 8,
								bg: "rgba(255, 255, 255, 0.05)",
								borderRadius: "2xl",
								border: "1px solid rgba(255, 255, 255, 0.1)",
								transition: "all 0.3s",
								_hover: {
									bg: "rgba(0, 102, 255, 0.1)",
									borderColor: "brand.primary",
									transform: "translateY(-4px)",
								},
							})}
						>
							<div
								class={css({
									w: 16,
									h: 16,
									bg: "brand.primary",
									borderRadius: "lg",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "2xl",
									mb: 4,
								})}
							>
								🚀
							</div>
							<h3
								class={css({
									fontSize: "2xl",
									fontWeight: "bold",
									color: "white",
									mb: 3,
								})}
							>
								Innovation First
							</h3>
							<p class={css({ color: "gray.400", lineHeight: 1.7 })}>
								We don't follow trends—we create them. Our team pushes the
								boundaries of what's possible with AI, delivering groundbreaking
								solutions that set new industry standards.
							</p>
						</div>

						<div
							class={css({
								p: 8,
								bg: "rgba(255, 255, 255, 0.05)",
								borderRadius: "2xl",
								border: "1px solid rgba(255, 255, 255, 0.1)",
								transition: "all 0.3s",
								_hover: {
									bg: "rgba(0, 204, 255, 0.1)",
									borderColor: "brand.secondary",
									transform: "translateY(-4px)",
								},
							})}
						>
							<div
								class={css({
									w: 16,
									h: 16,
									bg: "brand.secondary",
									borderRadius: "lg",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "2xl",
									mb: 4,
								})}
							>
								⚡
							</div>
							<h3
								class={css({
									fontSize: "2xl",
									fontWeight: "bold",
									color: "white",
									mb: 3,
								})}
							>
								Technical Excellence
							</h3>
							<p class={css({ color: "gray.400", lineHeight: 1.7 })}>
								Powered by cutting-edge technology and architectural brilliance,
								every solution we craft is built for performance, scalability,
								and long-term success. We don't compromise on quality.
							</p>
						</div>

						<div
							class={css({
								p: 8,
								bg: "rgba(255, 255, 255, 0.05)",
								borderRadius: "2xl",
								border: "1px solid rgba(255, 255, 255, 0.1)",
								transition: "all 0.3s",
								_hover: {
									bg: "rgba(0, 102, 255, 0.1)",
									borderColor: "brand.primary",
									transform: "translateY(-4px)",
								},
							})}
						>
							<div
								class={css({
									w: 16,
									h: 16,
									bg: "brand.primary",
									borderRadius: "lg",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "2xl",
									mb: 4,
								})}
							>
								🎯
							</div>
							<h3
								class={css({
									fontSize: "2xl",
									fontWeight: "bold",
									color: "white",
									mb: 3,
								})}
							>
								Impact Driven
							</h3>
							<p class={css({ color: "gray.400", lineHeight: 1.7 })}>
								We're obsessed with creating tangible value. Every AI solution
								we develop is designed to solve real problems, drive measurable
								results, and transform businesses at their core.
							</p>
						</div>

						<div
							class={css({
								p: 8,
								bg: "rgba(255, 255, 255, 0.05)",
								borderRadius: "2xl",
								border: "1px solid rgba(255, 255, 255, 0.1)",
								transition: "all 0.3s",
								_hover: {
									bg: "rgba(0, 204, 255, 0.1)",
									borderColor: "brand.secondary",
									transform: "translateY(-4px)",
								},
							})}
						>
							<div
								class={css({
									w: 16,
									h: 16,
									bg: "brand.secondary",
									borderRadius: "lg",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									fontSize: "2xl",
									mb: 4,
								})}
							>
								🌍
							</div>
							<h3
								class={css({
									fontSize: "2xl",
									fontWeight: "bold",
									color: "white",
									mb: 3,
								})}
							>
								Global Vision
							</h3>
							<p class={css({ color: "gray.400", lineHeight: 1.7 })}>
								Based in the UK, thinking globally. We envision a future where
								intelligent AI seamlessly integrates into every aspect of
								business and life, and we're building that future today.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
