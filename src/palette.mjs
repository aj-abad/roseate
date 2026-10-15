// Every color the theme uses, by name. colors.mjs and tokens.mjs refer to
// these instead of hex literals; color.mjs derives transparent variants.

export const white = '#ffffff';
export const black = '#000000';

/** Mauve-tinted grays, darkest to lightest. */
export const gray = {
	charcoal: '#252526', // notifications (Dark+ widget gray)
	ink: '#291d2a', // inputs, peek editor
	night: '#2c2833', // editor background
	dusk: '#302d36', // side bar, tabs, widgets
	haze: '#372f3c', // range highlight
	smoke: '#373941', // hover highlight
	ash: '#4f4355', // borders, rulers, word highlight
	pewter: '#746f77', // code lens, bracket match
	stone: '#7e6f7b', // line numbers
	fog: '#8f6f80', // ghost text
};

/** Plums and pinks: the theme's chrome and accents. */
export const rose = {
	aubergine: '#502b3c', // activity bar, dropdowns, secondary buttons
	plum: '#6e3a52', // title bar, status bar, list selection
	wine: '#792548', // text selection
	brick: '#8f404d', // whitespace markers
	cranberry: '#ac334d', // focused list item
	crimson: '#af273e', // buttons, badges, focus border
	raspberry: '#c8426f', // button hover
	orchid: '#db45a2', // strong word highlight
	magenta: '#e02eb4', // peek view border
	cerise: '#ee3b9a', // links, progress, active indicators, numbers and constants
	neon: '#ff1c73', // status bar while debugging
	pink: '#ff82cb', // light accent
	salmon: '#fe7c8e', // extension buttons, active tab text
	mauve: '#c599af', // inactive text
	petal: '#f3b4bf', // scrollbar
	blush: '#fde3e8', // UI text
	lavenderBlush: '#fff0f5', // editor text, cursors
};

/** Editor diagnostics and search. */
export const status = {
	error: '#ff4e47', // also error lines in output logs
	warning: '#1df5bf',
	link: '#3b79c7',
	findMatch: '#f39d12',
	findHighlight: '#59b8b3',
};

/** Source control gutter and diff colors. */
export const git = {
	added: '#45c758',
	deleted: '#fc644d',
	modified: '#943bc7',
};

/** Syntax colors specific to Roseate. */
export const syntax = {
	default: '#e0e0e0',
	comment: '#547a70',
	keyword: '#d4509d',
	operator: '#d348a5',
	storage: '#e276b5',
	function: '#7cc9b2',
	string: '#c7b2a0',
	class: '#ce81d8',
	type: '#d6b2cb',
	cssProperty: '#d6b2b8',
	attribute: '#ea92d7',
	decorator: '#d182ff',
	blockVariable: '#f78997',
	otherVariable: '#ff666e',
	parameter: '#ee96b4',
	include: '#e29db2',
	jsonKey: '#c17e70',
};

/** Material Theme colors the original theme was built from. */
export const material = {
	white: '#eeffff',
	gray: '#65737e',
	red: '#ff5370',
	coral: '#f07178',
	orange: '#f78c6c',
	yellow: '#ffcb6b',
	green: '#c3e88d',
	cyan: '#89ddff',
	blue: '#82aaff',
	purple: '#c792ea',
	yellowLight: '#ffe08a',
	cyanLight: '#b4ecff',
	blueLight: '#a6c4ff',
};

/** VS Code's default colors for output-channel log tokens (errors use status.error). */
export const log = {
	info: '#6796e6',
	warn: '#cd9731',
	debug: '#b267e6',
};
