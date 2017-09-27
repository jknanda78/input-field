import { h, Component } from 'preact';
import PropTypes from 'prop-types';

const {
	oneOf,
	string,
	bool,
	func
} = PropTypes;

/**
 * InputField class (UI component) with basic input field features
 */
class InputField extends Component {

	/**
	 * @param {Event} e
	 */
	onClickHandler = e => {
	  const { onClick } = this.props;

	  if (onClick) {
	    onClick(e);
	  }
	}

	/**
	 * @param props
	 */
	constructor(props) {
		super(props);

		this.onClickHandler = this.onClickHandler.bind(this);
	}

	render(props) {
		const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

		return (
			<input {...propsForInput} onClick={this.onClickHandler} />
		);
	}
}

/**
 * @final
 */
InputField.defaultProps = {
	onBlur: null,
	onChange: null,
	onClick: null,
	onFocus: null,
	onKeyDown: null,
	onKeyUp: null,
	onMouseDown: null,
	onMouseUp: null,
	placeholder: null,
	readonly: null,
	required: false,
	type: 'text',
	value: null
};

/**
 * @final
 */
InputField.propTypes = {
	autoComplete: oneOf([
		'on',
		'off'
	]),
	id: string.isRequired,
	label: string.isRequired,
	maxLength: string.isRequired,
	name: string.isRequired,
	onBlur: func,
	onChange: func,
	onClick: func,
	onFocus: func,
	onKeyDown: func,
	onKeyUp: func,
	onMouseDown: func,
	onMouseUp: func,
	placeholder: string,
	readonly: bool,
	required: bool,
	type: string,
	value: oneOf([
		bool,
		string
	])
};

export default InputField;
