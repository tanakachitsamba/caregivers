import React from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default () => <div>Hello</div>
