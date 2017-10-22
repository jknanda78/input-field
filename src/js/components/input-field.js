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
	 * @param {Event} e
	 */
	onChangeHandler = e => {
	  const { onChange } = this.props;

	  if (onChange) {
	    onChange(e);
	  }
	}

	/**
	 * @param {Event} e
	 */
	onKeyUpHandler = e => {
	  const { onKeyUp } = this.props;

	  if (onKeyUp) {
	    onKeyUp(e);
	  }
	}

	/**
	 * @param {Event} e
	 */
	onKeyDownHandler = e => {
	  const { onKeyDown } = this.props;

	  if (onKeyDown) {
	    onKeyDown(e);
	  }
	}

	/**
	 * @param {Event} e
	 */
	onFocusHandler = e => {
	  const { onFocus } = this.props;

	  if (onFocus) {
	    onFocus(e);
	  }
	}

	/**
	 * @param {Event} e
	 */
	onBlurHandler = e => {
	  const { onBlur } = this.props;

	  if (onBlur) {
	    onBlur(e);
	  }
	}

	/**
	 * @param {Event} e
	 */
	onBlurHandler = e => {
	  const { onBlur } = this.props;

	  if (onBlur) {
	    onBlur(e);
	  }
	}

	/**
	 * @param {Event} e
	 */
	onMouseUpHandler = e => {
	  const { onMouseUp } = this.props;

	  if (onMouseUp) {
	    onMouseUp(e);
	  }
	}

	/**
	 * @param {Event} e
	 */
	onMouseDownHandler = e => {
	  const { onMouseDown } = this.props;

	  if (onMouseDown) {
	    onMouseDown(e);
	  }
	}

	render(props) {
		const { label, ...propsForInput } = props; // eslint-disable-line no-unused-vars

		return (
			<input {...propsForInput}
				onClick={this.onClickHandler}
				onChange={this.onChangeHandler}
				onKeyUp={this.onKeyUpHandler}
				onKeyDown={this.onKeyDownHandler}
				onFocus={this.onFocusHandler}
				onBlur={this.onBlurHandler}
				onMouseUp={this.onMouseUpHandler}
				onMouseDown={this.onMouseDownHandler}
			/>
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
