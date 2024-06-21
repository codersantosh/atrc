import React from 'react';

/* Library */
import classnames from 'classnames';

/* Atoms */
import AtrcWrap from '../../../../atoms/wrap';
import AtrcText from '../../../../atoms/text';
import AtrcHr from '../../../../atoms/hr';

/* Molecules */
import AtrcButtonGroup from '../../../../molecules/button-group';

/* Templates */
import AtrcButtonIconTemplate1 from '../../button-icon/template-1';

/* Local */
const AtrcTitleTemplate2 = (props) => {
	const { title, buttons = [], className = '', ...defaultProps } = props;
	return (
		<>
			<AtrcWrap
				className={classnames(
					'at-flx',
					'at-al-itm-ctr',
					'at-jfy-cont-btw',
					'at-p',
					className ? className : ''
				)}
				{...defaultProps}>
				<AtrcText
					tag='h5'
					className={classnames('at-m')}>
					{title}
				</AtrcText>

				{buttons && buttons.length ? (
					<AtrcButtonGroup>
						{buttons.map((item, iDx) => (
							<AtrcButtonIconTemplate1
								key={`at-title-button-icon-${iDx}`}
								{...item}
							/>
						))}
					</AtrcButtonGroup>
				) : null}
			</AtrcWrap>

			<AtrcHr className={classnames('at-m')} />
		</>
	);
};

export default AtrcTitleTemplate2;
