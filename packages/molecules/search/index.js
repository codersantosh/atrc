import React from 'react';

/*WordPress*/
import { __ } from '@wordpress/i18n';

import { useState, useEffect } from '@wordpress/element';

import { SearchControl } from '@wordpress/components';

/*Library*/
import classnames from 'classnames';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcButton from '../../atoms/button';

/*Prefix*/
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcSearchBtn = (props) => {
	const { doSearch, className = '', ...defaultProps } = props;

	return (
		<AtrcButton
			onClick={() => doSearch()}
			className={classnames(className, AtrcPrefix('btn-search'), 'at-m')}
			{...defaultProps}
		/>
	);
};

const AtrcSearch = (props) => {
	const {
		type = '',
		className = '',
		variant = '',
		placeholder = '',
		value = '',
		doSearch = '',
		allowButton = true,
		buttonProps = {},
		wrapProps = {},
	} = props;
	const [input, setInput] = useState(value);

	useEffect(() => {
		if (input !== value) setInput(value);
	}, [value]);

	/*Run only once on mount*/
	useEffect(() => {
		if ('keyDown' === type) {
			doSearch(input);
		}
	}, [input]);

	return (
		<AtrcWrap
			{...wrapProps}
			className={classnames(
				AtrcPrefix('search-wrp'),
				wrapProps.className ? wrapProps.className : '',
				'at-flx',
				'at-al-itm-strh'
			)}>
			<AtrcWrap
				className={classnames('at-flx-grow-1')}
				variant='input-box'>
				<SearchControl
					className={classnames(
						AtrcPrefix('search'),
						className,
						variant ? AtrcPrefix('search') + '-' + variant : ''
					)}
					placeholder={placeholder || __('Search', 'atrc-prefix-atrc')}
					value={input}
					onChange={setInput}
					onKeyDown={(e) => {
						if (e.keyCode === 13) {
							doSearch(input);
						}
					}}
				/>
			</AtrcWrap>
			{allowButton ? (
				<AtrcSearchBtn
					doSearch={() => doSearch(input)}
					children={__('Search', 'atrc-prefix-atrc')}
					{...buttonProps}
				/>
			) : null}
		</AtrcWrap>
	);
};

export default AtrcSearch;
