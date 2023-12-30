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

/*Inbuilt*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';
import AtrcText from '../../atoms/text';
import AtrcToggle from '../../atoms/toggle';
import AtrcPrefix from '../../prefix-vars';
import AtrcPanelRow from '../panel-row';

/*Local Components*/
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
		...defaultProps
	} = props;

	const setAttr = (newVal, type) => {
		const valueCloned = Object.assign({}, value);
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
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcWrap
					className={classnames(
						AtrcPrefix('ctrl-link'),
						'at-flx-grw-1',
						className,
						variant ? AtrcPrefix('ctrl-link') + '-' + variant : ''
					)}
					{...defaultProps}>
					{/* {label && <AtrcLabel>{label}</AtrcLabel>} */}
					{allowOn && (
						<AtrcPanelRow className={classnames('at-m')}>
							<AtrcToggle
								label={__('Allow link', 'atrc-prefix-atrc')}
								checked={value && value.on}
								onChange={() => {
									let newVal = true;
									if (value && value.on) {
										newVal = false;
									}
									setAttr(newVal, 'on');
								}}
							/>
						</AtrcPanelRow>
					)}
					{isAllowField({ fieldType: 'url' }) && (
						<AtrcPanelRow className={classnames('at-m')}>
							<AtrcText
								label={__('URL', 'atrc-prefix-atrc')}
								wrapProps={{
									className: 'at-flx-grw-1',
								}}
								value={value.url}
								type='url'
								onChange={(newVal) => setAttr(newVal, 'url')}
							/>
						</AtrcPanelRow>
					)}

					{isAllowField({ fieldType: 'ttl' }) && (
						<AtrcPanelRow className={classnames('at-m')}>
							<AtrcText
								label={__('Title', 'atrc-prefix-atrc')}
								value={value.ttl}
								type='text'
								onChange={(newVal) => setAttr(newVal, 'ttl')}
							/>
						</AtrcPanelRow>
					)}
					{isAllowField({ fieldType: 'tgt' }) && (
						<AtrcPanelRow className={classnames('at-m')}>
							<AtrcToggle
								label={__('Open in new tab', 'atrc-prefix-atrc')}
								checked={value && value.tgt === '_blank'}
								onChange={() => {
									let newVal = '';
									if ((value && value.tgt === '') || !value || !value.tgt) {
										newVal = '_blank';
									}
									setAttr(newVal, 'tgt');
								}}
							/>
						</AtrcPanelRow>
					)}
					{isAllowField({ fieldType: 'rel' }) && (
						<AtrcPanelRow className={classnames('at-m')}>
							<AtrcText
								label={__('Relation', 'atrc-prefix-atrc')}
								value={value.rel}
								type='text'
								onChange={(newVal) => setAttr(newVal, 'rel')}
							/>
						</AtrcPanelRow>
					)}
				</AtrcWrap>
			</AtrcPanelRow>
		</>
	);
};
export default AtrcControlLink;
