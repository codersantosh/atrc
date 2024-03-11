/*Attributes Structure
Type Object
{
on
url
tgt
ttl
rel
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlText from '../control-text';
import AtrcControlToggle from '../control-toggle';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';

/*Local*/
const AtrcControlLink = (props) => {
	const {
		label = '',
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		allowOn = false,
		allowUrl = true,
		allowTitle = true,
		allowTarget = true,
		allowRel = false,
		onProps = {},
		urlProps = {},
		titleProps = {},
		targetProps = {},
		relProps = {},
		...defaultProps
	} = props;

	const setAttr = (newVal, type) => {
		const valueCloned = cloneDeep(value);

		if (newVal) {
			valueCloned[type] = newVal;
		} else {
			delete valueCloned[type];
		}

		onChange(valueCloned);
	};

	const isAllowField = ({ fieldType = '' }) => {
		if (allowOn) {
			if (!value || !value.on) {
				return false;
			}
		}
		if (allowUrl && 'url' === fieldType) {
			return true;
		}
		if (allowTitle && 'ttl' === fieldType) {
			return true;
		}

		if (allowTarget && 'tgt' === fieldType) {
			return true;
		}

		if (allowRel && 'rel' === fieldType) {
			return true;
		}
		return false;
	};

	return (
		<>
			{label && (
				<AtrcLabel className={classnames(AtrcPrefix('m-0'))}>{label}</AtrcLabel>
			)}

			<AtrcWrap
				className={classnames(
					AtrcPrefix('ctrl-link'),

					className,
					variant ? AtrcPrefix('ctrl-link') + '-' + variant : ''
				)}
				{...defaultProps}>
				{/* {label && <AtrcLabel>{label}</AtrcLabel>} */}
				{allowOn && (
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlToggle
							label={__('Allow link', 'atrc-prefix-atrc')}
							checked={value && value.on}
							onChange={() => {
								let newVal = true;
								if (value && value.on) {
									newVal = false;
								}
								setAttr(newVal, 'on');
							}}
							{...onProps}
						/>
					</AtrcPanelRow>
				)}
				{isAllowField({ fieldType: 'url' }) && (
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlText
							label={__('URL', 'atrc-prefix-atrc')}
							wrapProps={{
								className: 'at-flx-grw-1',
							}}
							value={value.url}
							type='url'
							onChange={(newVal) => setAttr(newVal, 'url')}
							{...urlProps}
						/>
					</AtrcPanelRow>
				)}

				{isAllowField({ fieldType: 'ttl' }) && (
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlText
							label={__('Title', 'atrc-prefix-atrc')}
							value={value.ttl}
							type='text'
							onChange={(newVal) => setAttr(newVal, 'ttl')}
							{...titleProps}
						/>
					</AtrcPanelRow>
				)}
				{isAllowField({ fieldType: 'tgt' }) && (
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlToggle
							label={__('Open in new tab', 'atrc-prefix-atrc')}
							checked={value && value.tgt === '_blank'}
							onChange={() => {
								let newVal = '';
								if ((value && value.tgt === '') || !value || !value.tgt) {
									newVal = '_blank';
								}
								setAttr(newVal, 'tgt');
							}}
							{...targetProps}
						/>
					</AtrcPanelRow>
				)}
				{isAllowField({ fieldType: 'rel' }) && (
					<AtrcPanelRow className={classnames('at-m')}>
						<AtrcControlText
							label={__('Relation', 'atrc-prefix-atrc')}
							value={value.rel}
							type='text'
							onChange={(newVal) => setAttr(newVal, 'rel')}
							{...relProps}
						/>
					</AtrcPanelRow>
				)}
			</AtrcWrap>
		</>
	);
};
export default AtrcControlLink;
