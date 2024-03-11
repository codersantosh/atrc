/*WordPress*/
import { FontSizePicker } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcResetButtonIcon from '../../atoms/reset-button-icon';
import { AtrcResetWrap } from '../../atoms/reset-button-icon';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const RenderFontSizePicker = (props) => {
	const { variant = '', className = '', ...defaultProps } = props;

	return (
		<FontSizePicker
			className={classnames(
				AtrcPrefix('ctrl-fnt-sz-picker'),
				className,
				variant ? AtrcPrefix('ctrl-fnt-sz-picker') + '-' + variant : ''
			)}
			{...defaultProps}
			__nextHasNoMarginBottom={true}
		/>
	);
};

const AtrcControlFontSizePicker = (props) => {
	const { value = '', allowReset = true, onChange } = props;

	if (allowReset) {
		return (
			<AtrcResetWrap>
				<RenderFontSizePicker {...props} />
				<AtrcResetButtonIcon
					value={value}
					onClick={() => onChange('')}
				/>
			</AtrcResetWrap>
		);
	}
	return <RenderFontSizePicker {...props} />;
};
export default AtrcControlFontSizePicker;
