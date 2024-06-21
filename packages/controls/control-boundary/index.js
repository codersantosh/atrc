import React from 'react';

/*Value Structure
Type Object

OR
{
    "minW":'',
    "w":'',
    "maxW":'',
    "minH":'',
    "h":''
    "maxH":'',
}

OR
unitDevice:
{
    "minW":{
        "sm":"",
        "md":"",
        "lg":"",
        "xl":"",
        "xxl":""
    },
    "w":{
        "sm":"",
        "md":"",
        "lg":"",
        "xl":"",
        "xxl":""
        
    },
    "maxW":{
        "sm":"",
        "md":"",
        "lg":"",
        "xl":"",
        "xxl":""
    },
    "minH":{
        "sm":"",
        "md":"",
        "lg":"",
        "xl":"",
        "xxl":""
    },
    "h":{
        "sm":"",
        "md":"",
        "lg":"",
        "xl":"",
        "xxl":""
    },
    "maxH":{
        "sm":"",
        "md":"",
        "lg":"",
        "xl":"",
        "xxl":""
    },
}

OR

{
    "minW":{
        "normal":'',
        "hover":'',
    },
    "w":{
        "normal":'',
        "hover":'',
    },
    "maxW":{
        "normal":'',
        "hover":'',
    },
    "minH":{
        "normal":'',
        "hover":'',
    },
    "h":{
        "normal":'',
        "hover":'',
    },
    "maxH":{
        "normal":'',
        "hover":'',
    },
}
* 
type string
'',tab
*/

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import { cloneDeep, map } from 'lodash';
import classnames from 'classnames';

/* Controls */
import AtrcControlBorder from '../control-border';
import AtrcControlBorderRadius from '../control-border-radius';
import AtrcControlBoxShadow from '../control-box-shadow';
import AtrcControlBorderTab from '../control-border-tab';
import AtrcControlBorderRadiusTab from '../control-border-radius-tab';
import AtrcControlBoxShadowTab from '../control-box-shadow-tab';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';
import AtrcPanelRow from '../../molecules/panel-row';

/*Local*/
const AtrcControlBoundary = ({
	label = __('Boundary', 'atrc-prefix-atrc'),
	value = {},
	variant = '',
	className = '',
	type = '',
	onChange = () => {},
	allowBorder = true,
	allowBorderRadius = true,
	allowBoxShadow = true,
	borderProps = {},
	borderRadiusProps = {},
	boxShadowProps = {},
}) => {
	let BorderTag = AtrcControlBorder;
	let BorderRadiusTag = AtrcControlBorderRadius;
	let BoxShadowTag = AtrcControlBoxShadow;

	if ('tab' === type) {
		BorderTag = AtrcControlBorderTab;
		BorderRadiusTag = AtrcControlBorderRadiusTab;
		BoxShadowTag = AtrcControlBoxShadowTab;
	}

	const resetAttr = (attr) => {
		const valueCloned = cloneDeep(value);
		delete valueCloned[attr];

		onChange(valueCloned);
	};

	const setAttr = (attr, newVal) => {
		const valueCloned = cloneDeep(value);
		valueCloned[attr] = newVal;

		onChange(valueCloned);
	};

	const resetAll = () => {
		onChange({});
	};

	const tools = [];
	const toolsReset = [];
	if (allowBorder) {
		tools.push({
			name: 'bdr',
			title: __('Border', 'atrc-prefix-atrc'),
			hasValue: !!value.bdr,
			onDeselect: () => resetAttr('bdr'),
		});
		toolsReset.push('bdr');
	}
	if (allowBorderRadius) {
		tools.push({
			name: 'bdrRad',
			title: __('Border radius', 'atrc-prefix-atrc'),
			hasValue: !!value.bdrRad,
			onDeselect: () => resetAttr('bdrRad'),
		});
		toolsReset.push('w');
	}
	if (allowBoxShadow) {
		tools.push({
			name: 'boxSdw',
			title: __('Box shadow', 'atrc-prefix-atrc'),
			hasValue: !!value.boxSdw,
			onDeselect: () => resetAttr('boxSdw'),
		});
		toolsReset.push('boxSdw');
	}

	const AllTabs = {
		tools,
		resetAll: toolsReset,
	};

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-bd'),
				className,
				variant ? AtrcPrefix('ctrl-bd') + '-' + variant : ''
			)}
			label={label}
			resetAll={() => resetAll()}
			tools={AllTabs.tools}>
			{(activeItems) =>
				map(activeItems, function (item, iDx) {
					if ('bdr' === item) {
						return (
							<AtrcPanelRow>
								<BorderTag
									className={classnames('at-flx-grw-1')}
									label={__('Border', 'atrc-prefix-atrc')}
									value={value[item] || {}}
									onChange={(newVal) => setAttr(item, newVal)}
									key={iDx}
									{...borderProps}
								/>
							</AtrcPanelRow>
						);
					}
					if ('bdrRad' === item) {
						return (
							<AtrcPanelRow>
								<BorderRadiusTag
									className={classnames('at-flx-grw-1')}
									label={__('Border radius', 'atrc-prefix-atrc')}
									value={value[item]}
									onChange={(newVal) => setAttr(item, newVal)}
									key={iDx}
									{...borderRadiusProps}
								/>
							</AtrcPanelRow>
						);
					}
					if ('boxSdw' === item) {
						return (
							<AtrcPanelRow>
								<BoxShadowTag
									className={classnames('at-flx-grw-1')}
									label={__('Box shadow', 'atrc-prefix-atrc')}
									value={value[item]}
									onChange={(newVal) => setAttr(item, newVal)}
									key={iDx}
									{...boxShadowProps}
								/>
							</AtrcPanelRow>
						);
					}
					return null;
				})
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlBoundary;
