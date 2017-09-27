import { h } from 'preact';
import InputField from './js/components/input-field';

const props = {
	type: 'text',
	name: 'username',
	label: 'Username',
	onClick: e => {
		console.log('InputField::Props::onClick', e); // eslint-disable-line no-console
	}
};

const App = () => (
	<InputField {...props} />
);

export default App;
