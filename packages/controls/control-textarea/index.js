/*WordPress*/
import { TextareaControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcResetButtonIcon, {
	AtrcResetWrap,
} from '../../atoms/reset-button-icon';
import AtrcWrapLib from '../../atoms/wrap-lib';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderComponent = (props) => {
	let {
		className = '',
		variant = '',
		value = '',
		allowReset = '',
		wrapProps = {},
		resetProps = {},
		...defaultProps
	} = props;

	if (value === null || value === undefined) {
		value = '';
	}
	return (
		<TextareaControl
			className={classnames(
				AtrcPrefix('ctrl-txt-area'),
				className,
				variant ? AtrcPrefix('ctrl-txt-area') + '-' + variant : ''
			)}
			value={value}
			{...defaultProps}
		/>
	);
};
const AtrcControlTextarea = (props) => {
	const {
		allowReset = true,
		value = '',
		wrapProps = {},
		resetProps = {},
		onChange,
	} = props;

	return (
		<AtrcWrapLib className={classnames('at-flx-grw-1')}>
			{allowReset ? (
				<AtrcResetWrap
					{...wrapProps}
					{...resetProps}
					className={classnames(
						AtrcPrefix('ctrl-txt-area-rst'),

						resetProps.className || '',
						wrapProps.className ? wrapProps.className : ''
					)}>
					<RenderComponent {...props} />
					<AtrcResetButtonIcon
						value={value}
						onClick={() => onChange('')}
					/>
				</AtrcResetWrap>
			) : (
				<RenderComponent {...props} />
			)}
		</AtrcWrapLib>
	);
};

export default AtrcControlTextarea;
