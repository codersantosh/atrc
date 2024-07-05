import React from 'react';

/* WordPress */
import { __ } from '@wordpress/i18n';

/* Library */
import classNames from 'classnames';

/* Atoms */
import AtrcWrap from '../../../../atoms/wrap';
import AtrcText from '../../../../atoms/text';
import AtrcProgress from '../../../../atoms/progress';

/* Prefix */
import AtrcPrefix from '../../../../prefix-vars';

/* Local */
const AtrcProgressTemplate1 = (props) => {
    const {
        className = '',
        total = 0,
        processed = 0,
        percentage = 0,
        totalLabel = __('Total:', 'atrc-prefix-atrc'),
        processedLabel = __('Processed:', 'atrc-prefix-atrc'),
        progressProps = {},
        ...defaultProps
    } = props;

    if (!total) {
        return null;
    }

    const progressPropsLocal = {
        className: classNames('at-bg-cl', 'at-m'),
        style: {
            '--at-bar-w': percentage + '%',
            '--at-h': '20px',
        },
    };

    const progressPropsFinal = { ...progressPropsLocal, ...progressProps };
    return (
        <AtrcWrap
            className={classNames(
                className,
                'at-bdr',
                'at-p',
                'at-bg-cl',
                AtrcPrefix('prog-tpl-1')
            )}>
            <AtrcWrap
                className={classNames('at-flx', 'at-al-itm-ctr', 'at-jfy-cont-btw')}>
                <AtrcText tag='p'>{totalLabel + total}</AtrcText>
                <AtrcText tag='p'>{processedLabel + processed}</AtrcText>
            </AtrcWrap>
            <AtrcProgress {...progressPropsFinal}>
                {percentage + '%'}
            </AtrcProgress>
        </AtrcWrap>
    );
};

export default AtrcProgressTemplate1;
