import { createRoot } from 'react-dom/client'

import { App } from '#app/index'

const container = document.querySelector('#root')
const root = createRoot(container!)

root.render(<App />)
