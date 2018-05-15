import Typography from 'typography'
import twinPeaksTheme from 'typography-theme-twin-peaks'

twinPeaksTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'a': {
    color: '#3889f7',
    backgroundImage: 'none'
  },
  'a:hover': {
    color: '#e13532',
    textDecoration: 'underline'
  }
})
const typography = new Typography(twinPeaksTheme)

if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
