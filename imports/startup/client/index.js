import injectTapEventPlugin from 'react-tap-event-plugin';
import './routes.jsx';
import { DocHead } from 'meteor/kadira:dochead';

injectTapEventPlugin();

DocHead.addLink({
    href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
    rel: 'stylesheet'
});