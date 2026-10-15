// TextMate syntax rules: https://code.visualstudio.com/api/extension-guides/color-theme#syntax-colors

import { alpha } from './color.mjs';
import { black, white, rose, syntax, material, log } from './palette.mjs';

// JSON keys get a different color at each nesting level.
const jsonKeyColors = [
	material.purple,
	material.yellow,
	material.orange,
	material.red,
	syntax.jsonKey,
	material.blue,
	material.coral,
	material.purple,
	material.green,
];
const jsonKeyRules = jsonKeyColors.map((foreground, level) => ({
	name: `JSON Key - Level ${level}`,
	scope: [
		'source.json ' +
			'meta.structure.dictionary.json meta.structure.dictionary.value.json '.repeat(level) +
			'meta.structure.dictionary.json support.type.property-name.json',
	],
	settings: { foreground },
}));

export default [
	{
		settings: { foreground: syntax.default },
	},
	{
		name: 'Comment',
		scope: ['comment', 'punctuation.definition.comment'],
		settings: { fontStyle: 'italic', foreground: syntax.comment },
	},
	{
		name: 'Variables',
		scope: ['variable', 'string constant.other.placeholder'],
		settings: { foreground: material.white },
	},
	{
		name: 'Colors',
		scope: ['constant.other.color'],
		settings: { foreground: white },
	},
	{
		name: 'Invalid',
		scope: ['invalid', 'invalid.illegal'],
		settings: { foreground: material.red },
	},
	{
		name: 'Keyword',
		scope: ['keyword', 'keyword.cmake'],
		settings: { foreground: syntax.keyword },
	},
	{
		name: 'Storage',
		scope: ['storage.type', 'storage.source.cmake'],
		settings: { foreground: syntax.storage },
	},
	{
		name: 'Operator, Misc',
		scope: [
			'keyword.control',
			'constant.other.color',
			'punctuation',
			'meta.tag',
			'punctuation.definition.tag',
			'punctuation.separator.inheritance.php',
			'punctuation.definition.tag.html',
			'punctuation.definition.tag.begin.html',
			'punctuation.definition.tag.end.html',
			'punctuation.section.embedded',
			'keyword.other.template',
			'keyword.other.substitution',
		],
		settings: { foreground: syntax.operator },
	},
	{
		name: 'Tag',
		scope: ['entity.name.tag', 'meta.tag.sgml', 'markup.deleted.git_gutter'],
		settings: { foreground: material.coral },
	},
	{
		name: 'Function, Special Method',
		scope: [
			'entity.name.function',
			'meta.function-call',
			'variable.function',
			'support.function',
			'keyword.other.special-method',
			'variable.source.cmake',
		],
		settings: { foreground: syntax.function },
	},
	{
		name: 'Block Level Variables',
		scope: ['meta.block variable.other'],
		settings: { foreground: syntax.blockVariable },
	},
	{
		name: 'Other Variable, String Link',
		scope: ['support.other.variable', 'string.other.link'],
		settings: { foreground: syntax.otherVariable },
	},
	{
		name: 'Number, Constant, Function Argument, Tag Attribute, Embedded',
		scope: [
			'constant.numeric',
			'constant.language',
			'support.constant',
			'constant.character',
			'constant.escape',
			'variable.parameter',
			'keyword.other.unit',
			'keyword.other',
		],
		settings: { foreground: syntax.constant },
	},
	{
		name: 'String, Symbols, Inherited Class, Markup Heading',
		scope: [
			'string',
			'constant.other.symbol',
			'constant.other.key',
			'entity.other.inherited-class',
			'markup.heading',
			'markup.inserted.git_gutter',
			'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js',
		],
		settings: { fontStyle: '', foreground: syntax.string },
	},
	{
		name: 'Class, Support',
		scope: [
			'entity.name',
			'support.type',
			'support.class',
			'support.orther.namespace.use.php',
			'meta.use.php',
			'support.other.namespace.php',
			'markup.changed.git_gutter',
			'support.type.sys-types',
		],
		settings: { foreground: syntax.class },
	},
	{
		name: 'Entity Types',
		scope: ['support.type'],
		settings: { foreground: syntax.type },
	},
	{
		name: 'CSS Class and Support',
		scope: [
			'source.css support.type.property-name',
			'source.sass support.type.property-name',
			'source.scss support.type.property-name',
			'source.less support.type.property-name',
			'source.stylus support.type.property-name',
			'source.postcss support.type.property-name',
		],
		settings: { foreground: syntax.cssProperty },
	},
	{
		name: 'Sub-methods',
		scope: ['entity.name.module.js', 'variable.import.parameter.js', 'variable.other.class.js'],
		settings: { foreground: material.red },
	},
	{
		name: 'Language methods',
		scope: ['variable.language'],
		settings: { fontStyle: 'italic', foreground: material.red },
	},
	{
		name: 'entity.name.method.js',
		scope: ['entity.name.method.js'],
		settings: { fontStyle: 'italic', foreground: rose.pink },
	},
	{
		name: 'meta.method.js',
		scope: ['meta.class-method.js entity.name.function.js', 'variable.function.constructor'],
		settings: { foreground: material.blue },
	},
	{
		name: 'Attributes',
		scope: ['entity.other.attribute-name'],
		settings: { foreground: syntax.attribute },
	},
	{
		name: 'HTML Attributes',
		scope: [
			'text.html.basic entity.other.attribute-name.html',
			'text.html.basic entity.other.attribute-name',
		],
		settings: { fontStyle: 'italic', foreground: material.yellow },
	},
	{
		name: 'CSS Classes',
		scope: ['entity.other.attribute-name.class'],
		settings: { foreground: material.yellow },
	},
	{
		name: "CSS ID's",
		scope: ['source.sass keyword.control'],
		settings: { foreground: material.blue },
	},
	{
		name: 'Inserted',
		scope: ['markup.inserted'],
		settings: { foreground: material.green },
	},
	{
		name: 'Deleted',
		scope: ['markup.deleted'],
		settings: { foreground: material.red },
	},
	{
		name: 'Changed',
		scope: ['markup.changed'],
		settings: { foreground: material.purple },
	},
	{
		name: 'Regular Expressions',
		scope: ['string.regexp'],
		settings: { foreground: material.cyan },
	},
	{
		name: 'Escape Characters',
		scope: ['constant.character.escape'],
		settings: { foreground: material.cyan },
	},
	{
		name: 'URL',
		scope: ['*url*', '*link*', '*uri*'],
		settings: { fontStyle: 'underline' },
	},
	{
		name: 'Decorators',
		scope: ['tag.decorator.js entity.name.tag.js', 'tag.decorator.js punctuation.definition.tag.js'],
		settings: { fontStyle: 'italic', foreground: syntax.decorator },
	},
	{
		name: 'ES7 Bind Operator',
		scope: ['source.js constant.other.object.key.js string.unquoted.label.js'],
		settings: { fontStyle: 'italic', foreground: material.red },
	},
	...jsonKeyRules,
	{
		name: 'Markdown - Plain',
		scope: ['text.html.markdown', 'punctuation.definition.list_item.markdown'],
		settings: { foreground: material.white },
	},
	{
		name: 'Markdown - Markup Raw Inline',
		scope: ['text.html.markdown markup.inline.raw.markdown'],
		settings: { foreground: material.purple },
	},
	{
		name: 'Markdown - Markup Raw Inline Punctuation',
		scope: ['text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown'],
		settings: { foreground: material.gray },
	},
	{
		name: 'Markdown - Heading',
		scope: [
			'markdown.heading',
			'markup.heading | markup.heading entity.name',
			'markup.heading.markdown punctuation.definition.heading.markdown',
		],
		settings: { foreground: material.green },
	},
	{
		name: 'Markup - Italic',
		scope: ['markup.italic'],
		settings: { fontStyle: 'italic', foreground: material.coral },
	},
	{
		name: 'Markup - Bold',
		scope: ['markup.bold', 'markup.bold string'],
		settings: { fontStyle: 'bold', foreground: material.coral },
	},
	{
		name: 'Markup - Bold-Italic',
		scope: [
			'markup.bold markup.italic',
			'markup.italic markup.bold',
			'markup.quote markup.bold',
			'markup.bold markup.italic string',
			'markup.italic markup.bold string',
			'markup.quote markup.bold string',
		],
		settings: { fontStyle: 'bold', foreground: material.coral },
	},
	{
		name: 'Markup - Underline',
		scope: ['markup.underline'],
		settings: { fontStyle: 'underline', foreground: material.orange },
	},
	{
		name: 'Markup - Strike',
		scope: ['markup.strike'],
		settings: { fontStyle: 'strikethrough' },
	},
	{
		name: 'Markdown - Blockquote',
		scope: ['markup.quote punctuation.definition.blockquote.markdown'],
		settings: { foreground: material.gray },
	},
	{
		name: 'Markup - Quote',
		scope: ['markup.quote'],
		settings: { fontStyle: 'italic' },
	},
	{
		name: 'Markdown - Link',
		scope: ['string.other.link.title.markdown'],
		settings: { foreground: material.blue },
	},
	{
		name: 'Markdown - Link Description',
		scope: ['string.other.link.description.title.markdown'],
		settings: { foreground: material.purple },
	},
	{
		name: 'Markdown - Link Anchor',
		scope: ['constant.other.reference.link.markdown'],
		settings: { foreground: material.yellow },
	},
	{
		name: 'Markup - Raw Block',
		scope: ['markup.raw.block'],
		settings: { foreground: material.purple },
	},
	{
		name: 'Markdown - Raw Block Fenced',
		scope: ['markup.raw.block.fenced.markdown'],
		settings: { foreground: alpha(black, 0.31) },
	},
	{
		name: 'Markdown - Fenced Bode Block',
		scope: ['punctuation.definition.fenced.markdown'],
		settings: { foreground: alpha(black, 0.31) },
	},
	{
		name: 'Markdown - Fenced Bode Block Variable',
		scope: [
			'markup.raw.block.fenced.markdown',
			'variable.language.fenced.markdown',
			'punctuation.section.class.end',
		],
		settings: { foreground: material.white },
	},
	{
		name: 'Markdown - Fenced Language',
		scope: ['variable.language.fenced.markdown'],
		settings: { foreground: material.gray },
	},
	{
		name: 'Markdown - Separator',
		scope: ['meta.separator'],
		settings: { fontStyle: 'bold', foreground: material.gray },
	},
	{
		name: 'Markup - Table',
		scope: ['markup.table'],
		settings: { foreground: material.white },
	},
	{ scope: 'token.info-token', settings: { foreground: log.info } },
	{ scope: 'token.warn-token', settings: { foreground: log.warn } },
	{ scope: 'token.error-token', settings: { foreground: log.error } },
	{ scope: 'token.debug-token', settings: { foreground: log.debug } },
	{
		name: 'C include',
		scope: [
			// 'meta.preprocessor.include.c',
			'string.quoted.other.lt-gt.include.c',
			'string.quoted.double.include.c',
		],
		settings: { foreground: syntax.include, fontStyle: 'bold' },
	},
	{
		name: 'C include keyword',
		scope: ['keyword.control.directive.include.c'],
		settings: { fontStyle: '' },
	},
	{
		name: 'parameters',
		scope: ['meta.function-call.c', 'storage.modifier'],
		settings: { foreground: syntax.parameter },
	},
];
