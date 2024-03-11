/*WordPress*/
import { useEffect } from '@wordpress/element';

import { __, sprintf } from '@wordpress/i18n';

/*Library*/
import { createUseStyles } from 'react-jss';

/*Local*/
export default function AtrcControlSelectGoogleFontsPreview({ font, weight }) {
	const useStyles = createUseStyles({
		root: {
			fontFamily: ({ font }) => font,
			fontWeight: ({ weight }) => weight,
		},
	});
	const classes = useStyles({ font, weight });

	useEffect(() => {
		const link = document.createElement('link');
		link.href = `https://fonts.googleapis.com/css?family=${font}:${weight}`;
		link.rel = 'stylesheet';
		document.head.appendChild(link);
	}, [font, weight]);

	const weights = weight.split(',');
	return (
		<>
			{weights.map((wt) => (
				<div
					className={classes.root}
					key={wt}
					style={{ fontWeight: wt }}>
					{sprintf(
						__(
							'This text is styled with a Google font `%s` and weight `%s`.',
							'atrc-prefix-atrc'
						),
						font,
						wt || __('default', 'atrc-prefix-atrc')
					)}
				</div>
			))}
		</>
	);
}
