/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcButton from '../../../../atoms/button';
import AtrcSpinner from '../../../../atoms/spinner';

/* Prefix */
import AtrcPrefix from '../../../../prefix-vars';

/* Local */
const AtrcButtonSaveTemplate1 = (props) => {
	const {
		className = '',
		isLoading = false,
		canSave = false,
		text = {
			saved: __('Saved', 'atrc-prefix-atrc'),
			save: __('Save settings', 'atrc-prefix-atrc'),
		},
		spinnerPos = 'before',
		spinnerProps = {},
		...defaultProps
	} = props;

	return (
		<AtrcButton
			className={classnames(
				className,
				AtrcPrefix('btn-save'),
				'at-flx at-al-itm-ctr'
			)}
			disabled={isLoading || !canSave}
			{...defaultProps}>
			{'after' !== spinnerPos && isLoading ? (
				<AtrcSpinner
					variant='inline'
					{...spinnerProps}
				/>
			) : null}
			{!isLoading ? (canSave ? text.save : text.saved) : null}

			{'after' === spinnerPos && isLoading ? (
				<AtrcSpinner
					variant='inline'
					{...spinnerProps}
				/>
			) : null}
		</AtrcButton>
	);
};

export default AtrcButtonSaveTemplate1;
