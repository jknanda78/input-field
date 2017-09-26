import { h, Component } from 'preact';
import PropTypes from 'prop-types';

const {
	oneOf,
	string,
	bool,
	func
} = PropTypes;

const AtomDesign = props => (
	<div>
		<p>atom design</p>
		<label for={props.name}>{props.label}</label>
		{props.children}
	</div>
);

const VaultDesign = props => (
	<div>
		<p>vault design</p>
		<label for={props.name}>{props.label}</label>
		{props.children}
	</div>
);

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
	    onClick();
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
		return (
			<div>
				<AtomDesign {...props}>
					<input  {...props} onClick={this.onClickHandler} />
				</AtomDesign>

				<VaultDesign {...props}>
					<input  {...props} onClick={this.onClickHandler} />
				</VaultDesign>
			</div>
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
