// Workbench colors: https://code.visualstudio.com/api/references/theme-color

import { alpha, over } from './color.mjs';
import { black, white, gray, rose, status, git, syntax, material } from './palette.mjs';

const editorBackground = gray.night;

// Six colors cycled by bracket pairs and the source control graph lanes.
const cycle = [rose.cerise, syntax.class, syntax.function, rose.pink, syntax.type, syntax.blockVariable];

export default {
	// base
	focusBorder: alpha(rose.crimson, 0.6),
	'widget.shadow': alpha(black, 0),
	'scrollbar.shadow': alpha(black, 0),
	'textLink.foreground': rose.cerise,
	'textLink.activeForeground': rose.pink,
	'progressBar.background': rose.cerise,
	'badge.background': rose.crimson,
	'badge.foreground': white,
	'settings.modifiedItemIndicator': rose.cerise,

	// activity bar
	'activityBar.background': rose.aubergine, // #33222c
	'activityBar.foreground': rose.blush,
	'activityBar.inactiveForeground': rose.mauve,
	'activityBar.activeBorder': rose.cerise,
	'activityBarBadge.background': alpha(rose.crimson, 0.8),
	'activityBarBadge.foreground': white,
	'activityBarTop.foreground': rose.blush,
	'activityBarTop.inactiveForeground': rose.mauve,
	'activityBarTop.activeBorder': rose.cerise,

	// side bar, tabs, panel
	'sideBar.background': gray.dusk,
	'sideBarSectionHeader.background': rose.aubergine,
	'editorGroupHeader.tabsBackground': gray.dusk,
	'editorGroup.dropBackground': alpha(rose.plum, 0.4),
	'tab.border': gray.dusk,
	'tab.activeForeground': rose.salmon,
	'tab.inactiveBackground': gray.dusk, // #422d3d
	'tab.inactiveForeground': rose.mauve,
	'panel.border': gray.ash,
	'panelTitle.activeForeground': white,

	// title bar, command center, menus
	'titleBar.activeBackground': rose.plum,
	'titleBar.activeForeground': rose.blush,
	'titleBar.inactiveBackground': rose.aubergine,
	'titleBar.inactiveForeground': rose.mauve,
	'commandCenter.background': rose.aubergine,
	'commandCenter.foreground': rose.blush,
	'commandCenter.activeBackground': alpha(rose.crimson, 0.33),
	'commandCenter.border': alpha(white, 0.1),
	'menu.background': gray.dusk,
	'menu.foreground': rose.blush,
	'menu.selectionBackground': rose.plum,
	'menu.separatorBackground': gray.ash,

	// status bar
	'statusBar.background': rose.plum,
	'statusBar.debuggingBackground': rose.neon,
	'statusBar.noFolderBackground': rose.plum,
	'statusBarItem.remoteBackground': rose.crimson,
	'statusBarItem.remoteForeground': white,
	'debugToolBar.background': gray.dusk,

	// buttons and inputs
	'button.background': rose.crimson,
	'button.foreground': white,
	'button.hoverBackground': rose.raspberry,
	'button.secondaryBackground': rose.aubergine,
	'button.secondaryForeground': rose.blush,
	'button.secondaryHoverBackground': rose.plum,
	'extensionButton.prominentBackground': rose.salmon,
	'extensionButton.prominentForeground': white,
	'extensionButton.prominentHoverBackground': rose.salmon,
	'dropdown.background': rose.aubergine,
	'dropdown.border': rose.aubergine,
	'input.background': gray.ink,
	'inputOption.activeBackground': alpha(rose.crimson, 0.33),
	'inputOption.activeBorder': rose.salmon,

	// lists
	'list.activeSelectionBackground': rose.plum,
	'list.activeSelectionForeground': white,
	'list.inactiveSelectionBackground': alpha(rose.plum, 0.8),
	'list.hoverBackground': alpha(rose.plum, 0.53),
	'list.focusBackground': rose.cranberry,
	'list.focusOutline': rose.plum,
	'list.highlightForeground': white,
	'list.dropBackground': alpha(rose.plum, 0.4),

	// quick input (command palette)
	'quickInput.background': gray.dusk,
	'quickInput.foreground': rose.blush,
	'quickInputList.focusBackground': rose.plum,
	'pickerGroup.foreground': rose.cerise,
	'pickerGroup.border': gray.ash,

	// notifications
	'notifications.background': gray.charcoal,
	'notifications.foreground': white,
	'notificationCenter.border': gray.dusk,
	'notificationCenterHeader.background': gray.dusk,
	'notificationLink.foreground': rose.cerise,

	// scrollbar
	'scrollbarSlider.background': alpha(rose.petal, 0.28),
	'scrollbarSlider.hoverBackground': alpha(rose.petal, 0.4),
	'scrollbarSlider.activeBackground': alpha(rose.petal, 0.53),

	// editor
	'editor.background': editorBackground,
	'editor.foreground': rose.lavenderBlush,
	'editorCursor.foreground': rose.lavenderBlush,
	'editor.lineHighlightBackground': rose.aubergine,
	'editor.lineHighlightBorder': rose.aubergine, // "#6e1148" "#472541"
	'editor.selectionBackground': rose.wine,
	'editor.inactiveSelectionBackground': alpha(rose.wine, 0.53),
	'editor.selectionHighlightBackground': alpha(gray.ash, 0.5),
	'editor.wordHighlightBackground': over(gray.ash, editorBackground),
	'editor.wordHighlightStrongBackground': alpha(rose.orchid, 0.5),
	'editor.findMatchBackground': alpha(status.findMatch, 0.84),
	'editor.findMatchHighlightBackground': alpha(status.findHighlight, 0.47),
	'editor.hoverHighlightBackground': over(gray.smoke, editorBackground),
	'editor.rangeHighlightBackground': over(gray.haze, editorBackground),
	'editorLink.activeForeground': status.link,
	'editorLineNumber.foreground': gray.stone,
	'editorWhitespace.foreground': rose.brick,
	'editorIndentGuide.background1': gray.dusk,
	'editorIndentGuide.activeBackground1': rose.plum,
	'editorRuler.foreground': gray.ash,
	'editorCodeLens.foreground': gray.pewter,
	'editorBracketMatch.background': gray.pewter,
	'editorBracketMatch.border': gray.pewter,
	'editorOverviewRuler.border': gray.ash,
	'editorError.foreground': status.error,
	'editorWarning.foreground': status.warning, // #25cc79, 3bb3eb
	'editorGutter.modifiedBackground': alpha(git.modified, 0.73),
	'editorGutter.addedBackground': alpha(git.added, 0.73),
	'editorGutter.deletedBackground': alpha(git.deleted, 0.73),
	'editorInlayHint.background': alpha(rose.aubergine, 0.53),
	'editorInlayHint.foreground': rose.mauve,
	'editorGhostText.foreground': gray.fog,
	'editorStickyScroll.border': gray.ash,
	'editorStickyScrollHover.background': rose.aubergine,
	'minimap.selectionHighlight': over(rose.wine, editorBackground),
	'minimap.selectionOccurrenceHighlight': over(gray.ash, editorBackground),

	// bracket pair colorization
	...Object.fromEntries(cycle.map((color, i) => [`editorBracketHighlight.foreground${i + 1}`, color])),
	'editorBracketHighlight.unexpectedBracket.foreground': status.error,

	// editor widgets and peek view
	'editorWidget.background': gray.dusk,
	'editorWidget.border': gray.ash,
	'editorSuggestWidget.background': gray.dusk,
	'editorSuggestWidget.border': gray.ash,
	'editorSuggestWidget.selectedBackground': rose.plum,
	'editorSuggestWidget.highlightForeground': rose.cerise,
	'editorSuggestWidget.focusHighlightForeground': rose.pink,
	'editorHoverWidget.background': gray.dusk,
	'editorHoverWidget.border': gray.ash,
	'peekView.border': rose.magenta,
	'peekViewTitle.background': gray.dusk,
	'peekViewEditor.background': gray.ink,
	'peekViewEditorGutter.background': gray.ink,
	'peekViewResult.background': gray.dusk,
	'peekViewResult.selectionBackground': rose.plum,

	// diff editor, matching the gutter
	'diffEditor.insertedLineBackground': alpha(git.added, 0.08),
	'diffEditor.insertedTextBackground': alpha(git.added, 0.2),
	'diffEditor.removedLineBackground': alpha(git.deleted, 0.08),
	'diffEditor.removedTextBackground': alpha(git.deleted, 0.2),

	// source control graph
	...Object.fromEntries(cycle.slice(0, 5).map((color, i) => [`scmGraph.foreground${i + 1}`, color])),

	// chat
	'chat.slashCommandBackground': alpha(rose.plum, 0.53),
	'chat.slashCommandForeground': rose.pink,

	// integrated terminal
	'terminal.foreground': rose.lavenderBlush,
	'terminal.selectionBackground': rose.wine,
	'terminalCursor.foreground': rose.lavenderBlush,
	'terminal.ansiBlack': gray.night,
	'terminal.ansiRed': material.red,
	'terminal.ansiGreen': syntax.function,
	'terminal.ansiYellow': material.yellow,
	'terminal.ansiBlue': material.blue,
	'terminal.ansiMagenta': syntax.storage,
	'terminal.ansiCyan': material.cyan,
	'terminal.ansiWhite': white,
	'terminal.ansiBrightBlack': gray.stone,
	'terminal.ansiBrightRed': syntax.otherVariable,
	'terminal.ansiBrightGreen': material.green,
	'terminal.ansiBrightYellow': material.yellowLight,
	'terminal.ansiBrightBlue': material.blueLight,
	'terminal.ansiBrightMagenta': rose.pink,
	'terminal.ansiBrightCyan': material.cyanLight,
	'terminal.ansiBrightWhite': white,
};
