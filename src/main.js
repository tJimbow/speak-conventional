import Reveal from 'reveal.js';
import Highlight from 'reveal.js/plugin/highlight';
import Notes from 'reveal.js/plugin/notes';
import Zoom from 'reveal.js/plugin/zoom';

import 'reveal.js/reset.css';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/black.css';
import 'reveal.js/plugin/highlight/monokai.css';
import './theme.css';

const deck = new Reveal({
  hash: true,
  slideNumber: 'c/t',
  controlsTutorial: false,
  transition: 'slide',
  width: 1280,
  height: 760,
  margin: 0.06,
  plugins: [Highlight, Notes, Zoom],
});

deck.initialize();
