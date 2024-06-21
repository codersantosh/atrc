import React from 'react';

/*Value Structure
Type object
{
data-title: 'my-title'
}
**/

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useState, Fragment } from '@wordpress/element';

/** Libraries */
import classnames from 'classnames';

import { escape, map } from 'lodash';

/* Controls */
import AtrcControlText from '../control-text';

/*Molecules*/
import AtrcPanelTools from '../../molecules/panel-tools';
import AtrcNotice from '../../molecules/notice';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcControlCustomAttributes = (props) => {
	const {
		label = __('Custom attributes', 'atrc-prefix-atrc'),
		className = '',
		variant = '',
		value = {},
		notAllowedAttributes = [],
		onChange = () => {},
	} = props;

	const [inputValue, setInputValue] = useState(
		Object.entries(value)
			.map(([name, val]) => `${name}='${val}'`)
			.join(' ')
	);
	const [error, setError] = useState('');

	const handleBlur = () => {
		if (!inputValue) {
			onChange({});
			return;
		}
		const attributeRegex =
			/\b([\w-]+?)=['"](.+?)['"]|\b([\w-]+?)=['](.+?)[']|\b([\w-]+)/g;
		const updatedAttributes = {};
		const duplicateAttributes = [];
		const disallowedAttributes = [];

		const matches = [];
		let match;
		while ((match = attributeRegex.exec(inputValue))) {
			matches.push(match);
		}

		// eslint-disable-next-line no-unused-vars
		for (const [fullMatch, name, value1, name2, value2, name3] of matches) {
			let attributeName;
			let attributeValue;
			if (name2 || name3) {
				attributeName = escape(name2 || name3);
				attributeValue = escape(value2 || true);
			} else {
				attributeName = escape(name);
				attributeValue = escape(value1);
			}
			if (attributeName) {
				if (notAllowedAttributes.includes(attributeName)) {
					disallowedAttributes.push(attributeName);
				} else if (updatedAttributes[attributeName]) {
					duplicateAttributes.push(attributeName);
				} else {
					updatedAttributes[attributeName] = attributeValue;
				}
			}
		}

		if (matches.length === 0) {
			setError('Invalid attribute(s)');
		} else if (duplicateAttributes.length > 0) {
			setError(
				`Attribute(s) "${duplicateAttributes.join(
					', '
				)}" are used more than once`
			);
		} else if (disallowedAttributes.length > 0) {
			setError(
				`Attribute(s) "${disallowedAttributes.join(', ')}" are not allowed`
			);
		} else {
			setError('');
		}
		onChange(updatedAttributes);
	};

	const AttributesTabs = [
		{
			name: 'attributes',
			title: label,
			hasValue: value && value.length,
			onDeselect: () => onChange({}),
		},
	];

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-cust-attrib'),
				className,
				variant ? AtrcPrefix('ctrl-cust-attrib') + '-' + variant : ''
			)}
			label={label}
			resetAll={() => onChange({})}
			tools={AttributesTabs}>
			{(activeItems) =>
				map(activeItems, (tab, iDx) => (
					<Fragment key={iDx}>
						<AtrcControlText
							label={label}
							value={inputValue}
							onBlur={handleBlur}
							onChange={(newVal) => {
								if (undefined === newVal || '' === newVal || null === newVal) {
									onChange({});
									setInputValue('');
								} else {
									setInputValue(newVal);
								}
							}}
							help={
								<>
									{__(
										'You can type in custom HTML attributes for this block in the field above.',
										'atrc-prefix-atrc'
									)}
									&nbsp;
									{__('Example:', 'atrc-prefix-atrc')}
									<br />
									<code>{`data-title="my-title"`}</code>
									<br />
									{__(
										"If the attributes are already present on the blocks it wouldn't apply.",
										'atrc-prefix-atrc'
									)}
								</>
							}
						/>
						{error && (
							<AtrcNotice
								isDismissible={false}
								autoDismiss={false}
								status='warning'>
								{error}
							</AtrcNotice>
						)}
					</Fragment>
				))
			}
		</AtrcPanelTools>
	);
};

export default AtrcControlCustomAttributes;
