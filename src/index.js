import { render } from 'react-dom';

const mySvg = new URL('./some.svg', import.meta.url);

render(<img src={mySvg} />, document.getElementById('main'));
