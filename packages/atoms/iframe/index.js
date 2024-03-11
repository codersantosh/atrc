/* WordPress */
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcIframe = (props) => {
	const {
		variant = '',
		className = '',
		url = '',
		frameBorder = 0,
		title = __('Atrc Iframe', 'atrc-prefix-atrc'),
		...defaultProps
	} = props;

	return (
		<iframe
			className={classnames(
				AtrcPrefix('frame'),
				className,
				variant ? AtrcPrefix('frame') + '-' + variant : ''
			)}
			src={url}
			frameBorder={frameBorder}
			title={title}
			{...defaultProps}
		/>
	);
};

export default AtrcIframe;
