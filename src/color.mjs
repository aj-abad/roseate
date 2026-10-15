// Color modifiers. Inputs are '#rrggbb' strings; outputs are '#rrggbbaa'.

const channels = (hex) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
const byte = (n) => Math.round(n).toString(16).padStart(2, '0');

/** `color` at `opacity` (0 to 1). */
export function alpha(color, opacity) {
	return color.slice(0, 7) + byte(opacity * 255);
}

/**
 * A transparent color that looks exactly like `color` when drawn over
 * `background`. For colors VS Code requires to be transparent, so the
 * decorations underneath them stay visible.
 */
export function over(color, background, opacity = 0.8) {
	const bg = channels(background);
	const rgb = channels(color).map((c, i) => (c - (1 - opacity) * bg[i]) / opacity);
	if (rgb.some((c) => c < -0.5 || c > 255.5)) {
		throw new Error(`${color} can't be matched over ${background} at opacity ${opacity}`);
	}
	return '#' + rgb.map(byte).join('') + byte(opacity * 255);
}
