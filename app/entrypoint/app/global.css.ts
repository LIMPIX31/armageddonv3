import { globalStyle } from '@vanilla-extract/css'
import { vars } from '@theme/css'

globalStyle('html, body', {
	overflowX: 'hidden',
	minHeight: '100dvh',
	fontSize: '16px',
	fontFamily: vars.font.main,
	background: vars.color.background,
})

globalStyle('*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))', {
	all: 'unset',
	display: 'revert',
})

globalStyle('*,*::before,*::after', {
	boxSizing: 'border-box',
})

globalStyle('a, button', {
	cursor: 'revert',
})

globalStyle('button, img', {
	userSelect: 'none',
})

globalStyle('ol, ul, menu', {
	listStyle: 'none',
})

globalStyle('img', {
	maxInlineSize: '100%',
	maxBlockSize: '100%',
})

globalStyle('table', {
	borderCollapse: 'collapse',
})

globalStyle('input, textarea', {
	WebkitUserSelect: 'auto',
})

globalStyle('textarea', {
	whiteSpace: 'revert',
})

globalStyle('meter', {
	WebkitAppearance: 'revert',
	appearance: 'revert',
})

globalStyle(':where(pre)', {
	all: 'revert',
})

globalStyle('::placeholder', {
	color: 'unset',
})

globalStyle('::marker', {
	content: 'initial',
})

globalStyle(':where([hidden])', {
	contentVisibility: 'hidden',
})

globalStyle(':where([contenteditable]:not([contenteditable="false"]))', {
	MozUserModify: 'read-write',
	WebkitUserModify: 'read-write',
	overflowWrap: 'break-word',
	WebkitLineBreak: 'after-white-space' as never,
	WebkitUserSelect: 'none',
})

globalStyle(':where(dialog:modal)', {
	all: 'revert',
})
