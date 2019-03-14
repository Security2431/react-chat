import { compose } from 'react-app-rewired'
import rewireEslint from 'react-app-rewired-eslint'
import rewirePolyfills from 'react-app-rewired-polyfills'

module.exports = compose(
  rewirePolyfills,
  rewireEslint
)
