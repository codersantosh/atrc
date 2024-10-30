import React from 'react';

/*Value Structure

Type Object
{
    "normal":"",
    "hover":"",
}

**/

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { isEmpty, map, cloneDeep } from 'lodash';

/*Controls*/
import AtrcControlDropdownColor from '../control-dropdown-color';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcControlDropdownColorTab = (props) => {
    const {
        value = {},
        label = __('Color', 'atrc-prefix-atrc'),
        onChange = () => { },
        variant = '',
        className = '',
        allowedTabs = ['normal', 'hover'],
        ...defaultProps
    } = props;

    const setAttr = (newVal, type) => {
        const valueCloned = cloneDeep(value);
        valueCloned[type] = newVal;
        onChange(valueCloned);
    };

    const hasTabValue = (tab) => {
        if (!value || isEmpty(value)) {
            return false;
        }

        return !!value[tab];
    };

    const resetTab = (tab) => {
        const valueCloned = cloneDeep(value);
        delete valueCloned[tab];

        onChange(valueCloned);
    };

    const resetAll = () => {
        onChange({});
    };

    const AllTabs = [];
    if (allowedTabs.includes('normal')) {
        AllTabs.push({
            name: 'normal',
            title: __('Normal', 'atrc-prefix-atrc'),
            hasValue: hasTabValue('normal'),
            onDeselect: () => resetTab('normal'),
        });
    }

    if (allowedTabs.includes('hover')) {
        AllTabs.push({
            name: 'hover',
            title: __('Hover', 'atrc-prefix-atrc'),
            hasValue: hasTabValue('hover'),
            onDeselect: () => resetTab('hover'),
        });
    }

    return (
        <AtrcPanelTools
            className={classnames(
                AtrcPrefix('ctrl-range-tab'),
                className,
                variant ? AtrcPrefix('ctrl-range-tab') + '-' + variant : ''
            )}
            label={label}
            resetAll={resetAll}
            allowTabs={true}
            tools={AllTabs}>
            {(activeItems) =>
                map(activeItems, (tab, iDx) => (
                    <AtrcControlDropdownColor
                        label={''}
                        value={value && value[tab]}
                        onChange={(newVal) => setAttr(newVal, tab)}
                        key={iDx}
                        {...defaultProps}
                    />
                ))
            }
        </AtrcPanelTools>
    );
};
export default AtrcControlDropdownColorTab;
