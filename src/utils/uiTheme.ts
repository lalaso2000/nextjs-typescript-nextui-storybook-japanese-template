import { createTheme } from '@nextui-org/react'

const fontFamilies = [
  'Roboto',
  'Noto Sans JP',
  'Lato',
  '游ゴシック Medium',
  '游ゴシック体',
  'Yu Gothic Medium',
  'YuGothic',
  'ヒラギノ角ゴ ProN',
  'Hiragino Kaku Gothic ProN',
  'メイリオ',
  'Meiryo',
  'ＭＳ Ｐゴシック',
  'MS PGothic',
  'sans-serif',
].join(',')

export const lightTheme = createTheme({
  type: 'light',
  theme: {
    fonts: {
      sans: fontFamilies,
    },
  },
})

export const darkTheme = createTheme({
  type: 'dark',
  theme: {
    fonts: {
      sans: fontFamilies,
    },
  },
})
