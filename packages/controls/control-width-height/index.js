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
'',unit, unitDevice
*/

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import { cloneDeep, map } from 'lodash';
import classnames from 'classnames';

/* Controls */
import AtrcControlUnit from '../control-unit';
import AtrcControlUnitDevice from '../control-unit-device';
import AtrcControlUnitTab from '../control-unit-tab';
import AtrcControlUnitDeviceTab from '../control-unit-device-tab';

/* Molecules */
import AtrcPanelTools from '../../molecules/panel-tools';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcControlWidthHeight = ({
	label = __('Width & Height', 'atrc-prefix-atrc'),
	value = {},
	variant = '',
	className = '',
	type = '',
	onChange = () => {},
	allowMinWidth = false,
	allowWidth = false,
	allowMaxWidth = false,
	allowMinHeight = false,
	allowHeight = false,
	allowMaxHeight = false,
	minWidthProps = {},
	widthProps = {},
	maxWidthProps = {},
	minHeightProps = {},
	heightTabs = {},
	maxHeightTabs = {},
}) => {
	let Tag = AtrcControlUnit;

	if ('deviceTab' === type) {
		Tag = AtrcControlUnitDeviceTab;
	} else if ('device' === type) {
		Tag = AtrcControlUnitDevice;
	} else if ('tab' === type) {
		Tag = AtrcControlUnitTab;
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
	if (allowMinWidth) {
		tools.push({
			name: 'minW',
			title: __('Min width', 'atrc-prefix-atrc'),
			hasValue: !!value.minW,
			onDeselect: () => resetAttr('minW'),
		});
		toolsReset.push('minW');
	}
	if (allowWidth) {
		tools.push({
			name: 'w',
			title: __('Width', 'atrc-prefix-atrc'),
			hasValue: !!value.w,
			onDeselect: () => resetAttr('w'),
		});
		toolsReset.push('w');
	}
	if (allowMaxWidth) {
		tools.push({
			name: 'maxW',
			title: __('Max width', 'atrc-prefix-atrc'),
			hasValue: !!value.maxW,
			onDeselect: () => resetAttr('maxW'),
		});
		toolsReset.push('maxW');
	}

	if (allowMinHeight) {
		tools.push({
			name: 'minH',
			title: __('Min height', 'atrc-prefix-atrc'),
			hasValue: !!value.minH,
			onDeselect: () => resetAttr('minH'),
		});
		toolsReset.push('minH');
	}
	if (allowHeight) {
		tools.push({
			name: 'h',
			title: __('Height', 'atrc-prefix-atrc'),
			hasValue: !!value.h,
			onDeselect: () => resetAttr('h'),
		});
		toolsReset.push('w');
	}
	if (allowMaxHeight) {
		tools.push({
			name: 'maxH',
			title: __('Max height', 'atrc-prefix-atrc'),
			hasValue: !!value.maxH,
			onDeselect: () => resetAttr('maxH'),
		});
		toolsReset.push('maxH');
	}

	const AllTabs = {
		tools,
		resetAll: toolsReset,
	};

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-w-h'),
				className,
				variant ? AtrcPrefix('ctrl-w-h') + '-' + variant : ''
			)}
			label={label}
			resetAll={() => resetAll()}
			tools={AllTabs.tools}>
			{(activeItems) =>
				map(activeItems, function (item, iDx) {
					if ('minW' === item) {
						return (
							<Tag
								label={__('Min width', 'atrc-prefix-atrc')}
								value={value[item]}
								onChange={(newVal) => setAttr(item, newVal)}
								key={iDx}
								{...minWidthProps}
							/>
						);
					}
					if ('w' === item) {
						return (
							<Tag
								label={__('Width', 'atrc-prefix-atrc')}
								value={value[item]}
								onChange={(newVal) => setAttr(item, newVal)}
								key={iDx}
								{...widthProps}
							/>
						);
					}
					if ('maxW' === item) {
						return (
							<Tag
								label={__('Max width', 'atrc-prefix-atrc')}
								value={value[item]}
								onChange={(newVal) => setAttr(item, newVal)}
								key={iDx}
								{...maxWidthProps}
							/>
						);
					}
					if ('minH' === item) {
						return (
							<Tag
								label={__('Min height', 'atrc-prefix-atrc')}
								value={value[item]}
								onChange={(newVal) => setAttr(item, newVal)}
								key={iDx}
								{...minHeightProps}
							/>
						);
					}
					if ('h' === item) {
						return (
							<Tag
								label={__('Height', 'atrc-prefix-atrc')}
								value={value[item]}
								onChange={(newVal) => setAttr(item, newVal)}
								key={iDx}
								{...heightTabs}
							/>
						);
					}
					if ('maxH' === item) {
						return (
							<Tag
								label={__('Max height', 'atrc-prefix-atrc')}
								value={value[item]}
								onChange={(newVal) => setAttr(item, newVal)}
								key={iDx}
								{...maxHeightTabs}
							/>
						);
					}

					return null;
				})
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlWidthHeight;
