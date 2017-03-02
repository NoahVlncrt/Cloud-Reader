import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import './routes.jsx';
import { DocHead } from 'meteor/kadira:dochead';

DocHead.addLink({
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
    rel: 'stylesheet'
});