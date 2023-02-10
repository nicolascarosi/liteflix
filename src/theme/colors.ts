interface ColorTheme {
  [key: string]: string
}

const colors: ColorTheme = {
  primary: '#64EEBC',
  success: '#64EEBC',
  error: '#FF0000',
  disabled: '#929292',
  'bg-button': '#242424',
  'bg-menu': '#242424c7',
  'bg-body': '#242424',
  'btn-outline-bg': '#24242480',
  'btn-outline-border': '#FFFFFF80',
  black: '#242424',
  white: '#FFFFFF',
}

export type { ColorTheme }
export { colors }
