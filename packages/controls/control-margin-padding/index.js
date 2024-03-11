/*Value Structure
Type Object
{
    "minW":{
        "normal":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
        "hover":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
    },
    "w":{
        "normal":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
        "hover":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
    },
    "maxW":{
        "normal":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
        "hover":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
    },
    "minH":{
        "normal":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
        "hover":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
    },
    "h":{
        "normal":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
        "hover":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
    },
    "maxH":{
        "normal":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
        "hover":{
            "sm":"",
            "md":"",
            "lg":"",
            "xl":"",
            "xxl":""
        },
    },
}

OR
Unit:
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
'',tab, device,'deviceTab
*/

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import { cloneDeep, map } from 'lodash';
import classnames from 'classnames';

/* Controls */
import AtrcControlBoxFour from '../control-box-four';
import AtrcControlBoxFourDevice from '../control-box-four-device';
import AtrcControlBoxFourTab from './../control-box-four-tab';
import AtrcControlBoxFourDeviceTab from './../control-box-four-device-tab';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcControlMarginPadding = ({
	label = __('Margin & Padding', 'atrc-prefix-atrc'),
	value = {},
	variant = '',
	className = '',
	type = '',
	onChange = () => {},
	marginProps = {},
	paddingProps = {},
}) => {
	let Tag = AtrcControlBoxFour;

	if ('deviceTab' === type) {
		Tag = AtrcControlBoxFourDeviceTab;
	} else if ('device' === type) {
		Tag = AtrcControlBoxFourDevice;
	} else if ('tab' === type) {
		Tag = AtrcControlBoxFourTab;
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

	tools.push({
		name: 'm',
		title: __('Margin', 'atrc-prefix-atrc'),
		hasValue: !!value.m,
		onDeselect: () => resetAttr('m'),
	});
	toolsReset.push('m');

	tools.push({
		name: 'p',
		title: __('Padding', 'atrc-prefix-atrc'),
		hasValue: !!value.p,
		onDeselect: () => resetAttr('p'),
	});
	toolsReset.push('p');

	const AllTabs = {
		tools,
		resetAll: toolsReset,
	};

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-m-p'),
				className,
				variant ? AtrcPrefix('ctrl-m-p') + '-' + variant : ''
			)}
			label={label}
			resetAll={() => resetAll()}
			tools={AllTabs.tools}>
			{(activeItems) =>
				map(activeItems, function (item, iDx) {
					if ('m' === item) {
						return (
							<Tag
								label={__('Margin', 'atrc-prefix-atrc')}
								value={value[item]}
								onChange={(newVal) => setAttr(item, newVal)}
								key={iDx}
								{...marginProps}
							/>
						);
					}
					if ('p' === item) {
						return (
							<Tag
								label={__('Padding', 'atrc-prefix-atrc')}
								value={value[item]}
								onChange={(newVal) => setAttr(item, newVal)}
								key={iDx}
								{...paddingProps}
							/>
						);
					}
					return null;
				})
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlMarginPadding;
