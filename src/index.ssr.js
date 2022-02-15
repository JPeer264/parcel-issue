import { renderToString } from 'react-dom/server'

const mySvg = new URL('./some.svg', import.meta.url);

const output = renderToString((
  <img src={mySvg} />
))

console.log(output);
