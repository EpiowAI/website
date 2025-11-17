import { TbArrowRight, TbSparkles } from "solid-icons/tb";
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
			{/* Animated gradient background */}
			<div
				class={css({
					position: "absolute",
					inset: 0,
					bgGradient: "to-br",
					gradientFrom: "brand.darker",
					gradientVia: "brand.dark",
					gradientTo: "brand.darker",
				})}
			/>

			{/* Grid pattern overlay */}
			<div
				class={css({
					position: "absolute",
					inset: 0,
					backgroundImage:
						"linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)",
					backgroundSize: "64px 64px",
					maskImage:
						"radial-gradient(ellipse at center, black, transparent 80%)",
				})}
			/>

			{/* Gradient orbs */}
			<div
				class={css({
					position: "absolute",
					top: "20%",
					left: "10%",
					width: "500px",
					height: "500px",
					bg: "brand.primary",
					borderRadius: "full",
					filter: "blur(128px)",
					opacity: 0.15,
					animation: "pulse 8s ease-in-out infinite",
				})}
			/>
			<div
				class={css({
					position: "absolute",
					bottom: "10%",
					right: "10%",
					width: "600px",
					height: "600px",
					bg: "brand.secondary",
					borderRadius: "full",
					filter: "blur(128px)",
					opacity: 0.15,
					animation: "pulse 10s ease-in-out infinite",
					animationDelay: "2s",
				})}
			/>

			{/* Content */}
			<div
				class={css({
					position: "relative",
					zIndex: 10,
					maxWidth: "1280px",
					mx: "auto",
					px: { base: 6, md: 8 },
					textAlign: "center",
				})}
			>
				<div
					class={css({
						display: "inline-flex",
						alignItems: "center",
						gap: 2,
						px: 4,
						py: 2,
						mb: 6,
						bg: "rgba(59, 130, 246, 0.1)",
						border: "1px solid rgba(59, 130, 246, 0.2)",
						borderRadius: "full",
						fontSize: "sm",
						fontWeight: "semibold",
						color: "brand.primary",
					})}
				>
					<TbSparkles size={16} />
					<span>AI Application Development</span>
				</div>

				<h1
					class={css({
						fontSize: { base: "4xl", sm: "5xl", md: "6xl", lg: "7xl" },
						fontWeight: "black",
						lineHeight: 1.1,
						letterSpacing: "tight",
						mb: 6,
					})}
				>
					<span class={css({ color: "white" })}>
						Building the Future
						<br />
					</span>
					<span
						class={css({
							bgGradient: "to-r",
							gradientFrom: "brand.primary",
							gradientVia: "brand.accent",
							gradientTo: "brand.secondary",
							bgClip: "text",
							color: "transparent",
						})}
					>
						with Intelligent AI
					</span>
				</h1>

				<p
					class={css({
						fontSize: { base: "lg", md: "xl" },
						color: "gray.400",
						maxWidth: "2xl",
						mx: "auto",
						mb: 10,
						lineHeight: 1.8,
					})}
				>
					Epiow Limited delivers cutting-edge AI solutions that transform
					businesses. From concept to deployment, we craft intelligent
					applications that drive real results.
				</p>

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
							display: "inline-flex",
							alignItems: "center",
							gap: 2,
							px: 8,
							py: 4,
							bgGradient: "to-r",
							gradientFrom: "brand.primary",
							gradientTo: "brand.secondary",
							color: "white",
							borderRadius: "lg",
							fontSize: "lg",
							fontWeight: "semibold",
							transition: "all 0.3s",
							boxShadow: "0 4px 14px 0 rgba(59, 130, 246, 0.4)",
							_hover: {
								transform: "translateY(-2px)",
								boxShadow: "0 6px 20px 0 rgba(59, 130, 246, 0.6)",
							},
						})}
					>
						<span>Get Started</span>
						<TbArrowRight size={20} />
					</a>
					<a
						href="#services"
						class={css({
							display: "inline-flex",
							alignItems: "center",
							gap: 2,
							px: 8,
							py: 4,
							bg: "rgba(255, 255, 255, 0.05)",
							color: "white",
							borderRadius: "lg",
							fontSize: "lg",
							fontWeight: "semibold",
							border: "1px solid rgba(255, 255, 255, 0.1)",
							transition: "all 0.3s",
							_hover: {
								bg: "rgba(255, 255, 255, 0.1)",
								borderColor: "brand.primary",
							},
						})}
					>
						<span>Our Services</span>
					</a>
				</div>
			</div>
		</section>
	);
};
