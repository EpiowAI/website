import type { Component } from "solid-js";
import { css } from "../../styled-system/css";
import { container, stack } from "../../styled-system/patterns";

export const Contact: Component = () => {
	return (
		<section
			id="contact"
			class={css({
				py: { base: 20, md: 32 },
				bg: "rgba(10, 10, 15, 0.5)",
			})}
		>
			<div class={container({ maxWidth: "4xl" })}>
				<div class={stack({ gap: 12, textAlign: "center" })}>
					<div class={stack({ gap: 4 })}>
						<h2
							class={css({
								fontSize: { base: "3xl", md: "5xl" },
								fontWeight: "bold",
								color: "white",
								letterSpacing: "-0.02em",
							})}
						>
							Ready to Build the Future?
						</h2>
						<p
							class={css({
								fontSize: { base: "lg", md: "xl" },
								color: "gray.400",
							})}
						>
							Let's discuss how we can transform your vision into intelligent
							reality
						</p>
					</div>

					<div
						class={css({
							p: { base: 8, md: 12 },
							bg: "rgba(0, 102, 255, 0.05)",
							borderRadius: "2xl",
							border: "1px solid {colors.brand.primary}",
						})}
					>
						<div
							class={stack({
								gap: 6,
							})}
						>
							<div
								class={css({
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: 3,
								})}
							>
								<div
									class={css({
										fontSize: "2xl",
									})}
								>
									📧
								</div>
								<a
									href="mailto:contact@epiow.com"
									class={css({
										fontSize: { base: "lg", md: "xl" },
										color: "brand.secondary",
										fontWeight: "semibold",
										transition: "all 0.3s",
										_hover: {
											color: "brand.primary",
											textDecoration: "underline",
										},
									})}
								>
									contact@epiow.com
								</a>
							</div>

							<div
								class={css({
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: 3,
								})}
							>
								<div
									class={css({
										fontSize: "2xl",
									})}
								>
									📍
								</div>
								<p
									class={css({
										fontSize: { base: "md", md: "lg" },
										color: "gray.300",
									})}
								>
									United Kingdom
								</p>
							</div>

							<div
								class={css({
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: 4,
									mt: 4,
								})}
							>
								<a
									href="https://github.com/EpiowAI"
									target="_blank"
									rel="noopener noreferrer"
									class={css({
										px: 6,
										py: 3,
										bg: "rgba(255, 255, 255, 0.1)",
										borderRadius: "lg",
										color: "white",
										fontWeight: "medium",
										transition: "all 0.3s",
										_hover: {
											bg: "brand.primary",
											transform: "translateY(-2px)",
										},
									})}
								>
									GitHub
								</a>
							</div>
						</div>
					</div>

					<p
						class={css({
							color: "gray.500",
							fontSize: "sm",
						})}
					>
						Epiow Limited - Registered in the United Kingdom
					</p>
				</div>
			</div>
		</section>
	);
};
