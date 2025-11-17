import type { Component } from "solid-js";
import { css } from "../../styled-system/css";

export const Footer: Component = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			class={css({
				py: 12,
				bg: "brand.darker",
				borderTop: "1px solid rgba(255, 255, 255, 0.05)",
			})}
		>
			<div
				class={css({
					maxWidth: "1400px",
					mx: "auto",
					px: { base: 6, md: 8 },
				})}
			>
				<div
					class={css({
						display: "flex",
						flexDirection: { base: "column", md: "row" },
						justifyContent: "space-between",
						alignItems: "center",
						gap: 6,
						textAlign: { base: "center", md: "left" },
					})}
				>
					<div>
						<div
							class={css({
								fontSize: "xl",
								fontWeight: "bold",
								bgGradient: "to-r",
								gradientFrom: "brand.primary",
								gradientTo: "brand.cyan",
								bgClip: "text",
								color: "transparent",
								mb: 2,
							})}
						>
							EPIOW
						</div>
						<p class={css({ color: "gray.500", fontSize: "sm" })}>
							© {currentYear} Epiow Limited. All rights reserved.
						</p>
					</div>

					<div class={css({ display: "flex", gap: 8, fontSize: "sm" })}>
						<a
							href="#vision"
							class={css({
								color: "gray.400",
								transition: "color 0.3s",
								_hover: { color: "brand.primary" },
							})}
						>
							Capabilities
						</a>
						<a
							href="#solutions"
							class={css({
								color: "gray.400",
								transition: "color 0.3s",
								_hover: { color: "brand.primary" },
							})}
						>
							Solutions
						</a>
						<a
							href="#technology"
							class={css({
								color: "gray.400",
								transition: "color 0.3s",
								_hover: { color: "brand.primary" },
							})}
						>
							Technology
						</a>
						<a
							href="#contact"
							class={css({
								color: "gray.400",
								transition: "color 0.3s",
								_hover: { color: "brand.primary" },
							})}
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};
