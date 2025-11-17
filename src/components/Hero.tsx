import type { Component } from "solid-js";
import { css } from "../../styled-system/css";
import { container, stack } from "../../styled-system/patterns";

export const Hero: Component = () => {
	return (
		<section
			class={css({
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				position: "relative",
				overflow: "hidden",
				background:
					"linear-gradient(135deg, {colors.brand.dark} 0%, {colors.brand.primary} 100%)",
			})}
		>
			<div
				class={css({
					position: "absolute",
					inset: 0,
					opacity: 0.1,
					backgroundImage:
						"radial-gradient(circle at 20% 50%, {colors.brand.secondary} 0%, transparent 50%), radial-gradient(circle at 80% 80%, {colors.brand.primary} 0%, transparent 50%)",
				})}
			/>

			<div
				class={container({
					maxWidth: "7xl",
					position: "relative",
					zIndex: 1,
				})}
			>
				<div
					class={stack({
						gap: 8,
						textAlign: "center",
					})}
				>
					<h1
						class={css({
							fontSize: { base: "4xl", md: "6xl", lg: "7xl" },
							fontWeight: "bold",
							color: "white",
							lineHeight: 1.1,
							letterSpacing: "-0.02em",
						})}
					>
						Pioneering the Future
						<br />
						<span
							class={css({
								background:
									"linear-gradient(90deg, {colors.brand.secondary} 0%, {colors.brand.primary} 100%)",
								backgroundClip: "text",
								color: "transparent",
							})}
						>
							with Intelligent AI
						</span>
					</h1>

					<p
						class={css({
							fontSize: { base: "lg", md: "xl", lg: "2xl" },
							color: "gray.300",
							maxWidth: "3xl",
							margin: "0 auto",
							lineHeight: 1.6,
						})}
					>
						Epiow Limited transforms visionary ideas into cutting-edge AI
						applications. We craft intelligent solutions that redefine what's
						possible.
					</p>

					<div
						class={css({
							display: "flex",
							gap: 4,
							justifyContent: "center",
							marginTop: 8,
							flexWrap: "wrap",
						})}
					>
						<a
							href="#contact"
							class={css({
								px: 8,
								py: 4,
								bg: "brand.primary",
								color: "white",
								borderRadius: "full",
								fontSize: "lg",
								fontWeight: "semibold",
								transition: "all 0.3s",
								_hover: {
									bg: "brand.secondary",
									transform: "translateY(-2px)",
									boxShadow: "0 10px 40px rgba(0, 204, 255, 0.3)",
								},
							})}
						>
							Start Your AI Journey
						</a>
						<a
							href="#vision"
							class={css({
								px: 8,
								py: 4,
								border: "2px solid {colors.brand.primary}",
								color: "white",
								borderRadius: "full",
								fontSize: "lg",
								fontWeight: "semibold",
								transition: "all 0.3s",
								_hover: {
									bg: "brand.primary",
									transform: "translateY(-2px)",
								},
							})}
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};
