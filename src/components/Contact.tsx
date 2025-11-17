import { TbArrowRight, TbMail, TbMapPin } from "solid-icons/tb";
import type { Component } from "solid-js";
import { css } from "../../styled-system/css";

export const Contact: Component = () => {
	return (
		<section
			id="contact"
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
				<div
					class={css({
						maxWidth: "4xl",
						mx: "auto",
						textAlign: "center",
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
						Ready to Build the Future?
					</h2>
					<p
						class={css({
							fontSize: { base: "lg", md: "xl" },
							color: "gray.400",
							mb: 12,
						})}
					>
						Let's discuss how we can transform your vision into intelligent
						reality
					</p>

					<div
						class={css({
							p: 8,
							bg: "rgba(255, 255, 255, 0.02)",
							backdropFilter: "blur(10px)",
							border: "1px solid rgba(59, 130, 246, 0.2)",
							borderRadius: "2xl",
						})}
					>
						<div
							class={css({
								display: "flex",
								flexDirection: "column",
								gap: 6,
								mb: 8,
							})}
						>
							<a
								href="mailto:contact@epiow.com"
								class={css({
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									gap: 3,
									p: 4,
									bg: "rgba(59, 130, 246, 0.1)",
									borderRadius: "lg",
									transition: "all 0.3s",
									_hover: {
										bg: "rgba(59, 130, 246, 0.2)",
									},
								})}
							>
								<TbMail size={24} class={css({ color: "brand.primary" })} />
								<span
									class={css({
										fontSize: { base: "md", md: "lg" },
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
								<TbMapPin size={24} class={css({ color: "gray.400" })} />
								<span
									class={css({
										fontSize: { base: "md", md: "lg" },
										color: "gray.300",
									})}
								>
									United Kingdom
								</span>
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
								px: 6,
								py: 3,
								bgGradient: "to-r",
								gradientFrom: "brand.primary",
								gradientTo: "brand.secondary",
								color: "white",
								fontWeight: "semibold",
								borderRadius: "lg",
								transition: "all 0.3s",
								_hover: {
									transform: "translateY(-2px)",
									boxShadow: "0 6px 20px 0 rgba(59, 130, 246, 0.4)",
								},
							})}
						>
							<span>View on GitHub</span>
							<TbArrowRight size={20} />
						</a>
					</div>

					<p
						class={css({
							color: "gray.500",
							fontSize: "sm",
							mt: 8,
						})}
					>
						Epiow Limited - Registered in the United Kingdom
					</p>
				</div>
			</div>
		</section>
	);
};
