import { h } from 'preact';
import InputField from './js/components/input-field';

const props = {
	type: 'text',
	name: 'username',
	onClick: e => {
		window.console && console.log('InputField::Props::onClick', e);
	}
};

const App = () => (
	<InputField {...props} />
);

export default App;
