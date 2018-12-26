import { h, render } from 'preact'
import App from './components/App'

const mountNode = document.getElementById('root')

render(<App />, mountNode, mountNode.lastChild)

if (module.hot) {
  module.hot.dispose(function() {
    // module is about to be replaced
  })

  module.hot.accept(function() {
    // module or one of its dependencies was just updated
  })
}
