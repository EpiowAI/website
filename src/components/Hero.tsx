import { TbBrain, TbChevronRight } from "solid-icons/tb";
import type { Component } from "solid-js";
import { css } from "../../styled-system/css";

export const Hero: Component = () => {
	return (
		<section
			class={css({
				position: "relative",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				overflow: "hidden",
				bg: "brand.darker",
			})}
		>
			{/* Animated mesh gradient background */}
			<div
				class={css({
					position: "absolute",
					inset: 0,
					background:
						"radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)",
				})}
			/>

			{/* Grid overlay */}
			<div
				class={css({
					position: "absolute",
					inset: 0,
					backgroundImage:
						"linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px)",
					backgroundSize: "100px 100px",
					maskImage:
						"radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 100%)",
				})}
			/>

			{/* Floating orbs */}
			<div
				class={css({
					position: "absolute",
					top: "10%",
					left: "10%",
					width: "400px",
					height: "400px",
					background:
						"radial-gradient(circle, rgba(168, 85, 247, 0.4), transparent)",
					borderRadius: "full",
					filter: "blur(80px)",
					animation: "float 8s ease-in-out infinite",
				})}
			/>
			<div
				class={css({
					position: "absolute",
					bottom: "10%",
					right: "10%",
					width: "500px",
					height: "500px",
					background:
						"radial-gradient(circle, rgba(6, 182, 212, 0.3), transparent)",
					borderRadius: "full",
					filter: "blur(80px)",
					animation: "float 10s ease-in-out infinite",
					animationDelay: "2s",
				})}
			/>

			{/* Content */}
			<div
				class={css({
					position: "relative",
					zIndex: 10,
					maxWidth: "1400px",
					mx: "auto",
					px: { base: 6, md: 8 },
					textAlign: "center",
				})}
			>
				{/* Logo/Brand */}
				<div
					class={css({
						display: "inline-flex",
						alignItems: "center",
						gap: 3,
						mb: 8,
						px: 6,
						py: 3,
						bg: "rgba(168, 85, 247, 0.1)",
						border: "1px solid rgba(168, 85, 247, 0.3)",
						borderRadius: "full",
						backdropFilter: "blur(10px)",
					})}
				>
					<TbBrain
						size={24}
						class={css({
							color: "brand.primary",
							animation: "glow 2s ease-in-out infinite alternate",
						})}
					/>
					<span
						class={css({
							fontSize: "lg",
							fontWeight: "bold",
							bgGradient: "to-r",
							gradientFrom: "brand.primary",
							gradientTo: "brand.cyan",
							bgClip: "text",
							color: "transparent",
						})}
					>
						EPIOW
					</span>
				</div>

				{/* Main headline */}
				<h1
					class={css({
						fontSize: { base: "4xl", sm: "5xl", md: "7xl", lg: "8xl" },
						fontWeight: "black",
						lineHeight: 1,
						letterSpacing: "tight",
						mb: 8,
					})}
				>
					<div
						class={css({
							mb: 4,
						})}
					>
						<span class={css({ color: "white" })}>The Future of</span>
					</div>
					<div
						class={css({
							bgGradient: "to-r",
							gradientFrom: "brand.primary",
							gradientVia: "brand.cyan",
							gradientTo: "brand.pink",
							bgClip: "text",
							color: "transparent",
							position: "relative",
							display: "inline-block",
						})}
					>
						Intelligent Systems
						<div
							class={css({
								position: "absolute",
								bottom: 0,
								left: 0,
								right: 0,
								height: "4px",
								bgGradient: "to-r",
								gradientFrom: "brand.primary",
								gradientTo: "brand.cyan",
								borderRadius: "full",
								animation: "pulse 2s ease-in-out infinite",
							})}
						/>
					</div>
				</h1>

				{/* Subtitle */}
				<p
					class={css({
						fontSize: { base: "xl", md: "2xl" },
						color: "gray.400",
						maxWidth: "3xl",
						mx: "auto",
						mb: 12,
						lineHeight: 1.6,
					})}
				>
					We architect next-generation AI solutions that transform businesses
					into autonomous, intelligent enterprises.
				</p>

				{/* CTA */}
				<div
					class={css({
						display: "flex",
						gap: 4,
						justifyContent: "center",
						flexWrap: "wrap",
					})}
				>
					<a
						href="#contact"
						class={css({
							group: "cta-primary",
							display: "inline-flex",
							alignItems: "center",
							gap: 2,
							px: 10,
							py: 5,
							position: "relative",
							overflow: "hidden",
							borderRadius: "full",
							fontSize: "lg",
							fontWeight: "bold",
							color: "white",
							transition: "all 0.3s",
							_before: {
								content: '""',
								position: "absolute",
								inset: 0,
								bgGradient: "to-r",
								gradientFrom: "brand.primary",
								gradientTo: "brand.cyan",
								borderRadius: "full",
								transition: "all 0.3s",
							},
							_after: {
								content: '""',
								position: "absolute",
								inset: 0,
								bgGradient: "to-r",
								gradientFrom: "brand.cyan",
								gradientTo: "brand.pink",
								borderRadius: "full",
								opacity: 0,
								transition: "all 0.3s",
							},
							_hover: {
								transform: "translateY(-2px)",
								boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)",
								_after: {
									opacity: 1,
								},
							},
						})}
					>
						<span class={css({ position: "relative", zIndex: 1 })}>
							Start Building
						</span>
						<TbChevronRight
							size={20}
							class={css({ position: "relative", zIndex: 1 })}
						/>
					</a>
					<a
						href="#solutions"
						class={css({
							display: "inline-flex",
							alignItems: "center",
							gap: 2,
							px: 10,
							py: 5,
							bg: "rgba(255, 255, 255, 0.05)",
							border: "1px solid rgba(255, 255, 255, 0.1)",
							borderRadius: "full",
							fontSize: "lg",
							fontWeight: "bold",
							color: "white",
							backdropFilter: "blur(10px)",
							transition: "all 0.3s",
							_hover: {
								bg: "rgba(168, 85, 247, 0.1)",
								borderColor: "brand.primary",
								transform: "translateY(-2px)",
							},
						})}
					>
						Explore Solutions
					</a>
				</div>

				{/* Stats */}
				<div
					class={css({
						display: "grid",
						gridTemplateColumns: { base: "1fr", sm: "repeat(3, 1fr)" },
						gap: 8,
						mt: 20,
						pt: 12,
						borderTop: "1px solid rgba(255, 255, 255, 0.1)",
					})}
				>
					<div>
						<div
							class={css({
								fontSize: "3xl",
								fontWeight: "bold",
								bgGradient: "to-r",
								gradientFrom: "brand.primary",
								gradientTo: "brand.cyan",
								bgClip: "text",
								color: "transparent",
								mb: 2,
							})}
						>
							99.9%
						</div>
						<div class={css({ color: "gray.500", fontSize: "sm" })}>
							Uptime Guarantee
						</div>
					</div>
					<div>
						<div
							class={css({
								fontSize: "3xl",
								fontWeight: "bold",
								bgGradient: "to-r",
								gradientFrom: "brand.cyan",
								gradientTo: "brand.pink",
								bgClip: "text",
								color: "transparent",
								mb: 2,
							})}
						>
							&lt;100ms
						</div>
						<div class={css({ color: "gray.500", fontSize: "sm" })}>
							Response Time
						</div>
					</div>
					<div>
						<div
							class={css({
								fontSize: "3xl",
								fontWeight: "bold",
								bgGradient: "to-r",
								gradientFrom: "brand.pink",
								gradientTo: "brand.primary",
								bgClip: "text",
								color: "transparent",
								mb: 2,
							})}
						>
							24/7
						</div>
						<div class={css({ color: "gray.500", fontSize: "sm" })}>
							AI Monitoring
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
