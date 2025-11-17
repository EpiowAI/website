import type { Component } from "solid-js";
import { css } from "../../styled-system/css";
import { container } from "../../styled-system/patterns";

export const Footer: Component = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer
			class={css({
				py: 8,
				bg: "brand.dark",
				borderTop: "1px solid rgba(255, 255, 255, 0.1)",
			})}
		>
			<div class={container({ maxWidth: "6xl" })}>
				<div
					class={css({
						display: "flex",
						flexDirection: { base: "column", md: "row" },
						justifyContent: "space-between",
						alignItems: "center",
						gap: 4,
						textAlign: { base: "center", md: "left" },
					})}
				>
					<div>
						<p
							class={css({
								color: "gray.400",
								fontSize: "sm",
							})}
						>
							© {currentYear} Epiow Limited. All rights reserved.
						</p>
					</div>

					<div
						class={css({
							display: "flex",
							gap: 6,
							color: "gray.400",
							fontSize: "sm",
						})}
					>
						<a
							href="#vision"
							class={css({
								transition: "color 0.3s",
								_hover: {
									color: "brand.primary",
								},
							})}
						>
							Vision
						</a>
						<a
							href="#services"
							class={css({
								transition: "color 0.3s",
								_hover: {
									color: "brand.primary",
								},
							})}
						>
							Services
						</a>
						<a
							href="#technology"
							class={css({
								transition: "color 0.3s",
								_hover: {
									color: "brand.primary",
								},
							})}
						>
							Technology
						</a>
						<a
							href="#contact"
							class={css({
								transition: "color 0.3s",
								_hover: {
									color: "brand.primary",
								},
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
