/*Attributes Structure
 Type Object
 {
	ppSrc
 ======Link==========
ppUrl;

 ====== Image==========
"ppImgFrm":"",
"ppImgId":"",
"ppImgUrl":"",
"ppImgSz":"",

 ====== Video==========

"ppVidFrm":"",
"ppVidId":"",
"ppVidUrl":"",
}
 * */

/*WordPress*/
import { __ } from '@wordpress/i18n';

/*Library*/
import classnames from 'classnames';

import { isEmpty, map } from 'lodash';

/*Inbuilt*/
import {
	AtrcControlImg,
	AtrcControlVideo,
	AtrcPanelTools,
	AtrcControlLink,
	AtrcPanelRow,
} from '../index';

import AtrcPrefix from '../../prefix-vars';
import { AtrcSelect } from '../../atoms';

/*Local Components*/
const RenderTabPanel = ({
	value,
	setLink,
	setImage,
	setVideo,
	tab = 'img',
}) => {
	if ('lnk' === tab) {
		return (
			<AtrcControlLink
				label={__('Link', 'atrc-prefix-atrc')}
				value={{
					url: value && value.ppUrl,
				}}
				onChange={setLink}
				allowTarget={false}
				allowTitle={false}
			/>
		);
	}
	if ('img' === tab) {
		return (
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlImg
					label={__('Image', 'atrc-prefix-atrc')}
					value={{
						frm: value && value.ppImgFrm,
						id: value && value.ppImgId,
						sz: value && value.ppImgSz,
						url: value && value.ppImgUrl,
					}}
					allowDimensions={false}
					allowDetails={false}
					onChange={setImage}
				/>
			</AtrcPanelRow>
		);
	}
	if ('vid' === tab) {
		return (
			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlVideo
					label={__('Video', 'atrc-prefix-atrc')}
					value={{
						frm: value && value.ppVidFrm,
						id: value && value.ppVidId,
						url: value && value.ppVidUrl,
						onSettings: value && value.ppVidOnSet,
						loop: value && value.ppVidLoop,
						muted: value && value.ppVidMuted,
						onBgVidMobile: value && value.onBgVidMb,
					}}
					allowSettings={false}
					onChange={setVideo}
				/>
			</AtrcPanelRow>
		);
	}
	return null;
};

const AtrcControlPopup = (props) => {
	const {
		label = __('Popup options', 'atrc-prefix-atrc'),
		help = '',
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		allowLink = true,
		allowImage = true,
		allowVideo = true,
	} = props;

	const SelectOptions = [];
	if (allowLink) {
		SelectOptions.push({
			label: __('Link', 'atrc-prefix-atrc'),
			value: 'lnk',
		});
	}
	if (allowImage) {
		SelectOptions.push({
			label: __('Image', 'atrc-prefix-atrc'),
			value: 'img',
		});
	}
	if (allowVideo) {
		SelectOptions.push({
			label: __('Video', 'atrc-prefix-atrc'),
			value: 'vid',
		});
	}

	const setLink = (newVal) => {
		const valueCloned = Object.assign({}, value);

		delete valueCloned.ppUrl;
		delete valueCloned.ppTarget;
		delete valueCloned.ppTtl;
		delete valueCloned.ppRel;

		valueCloned.ppSrc = 'lnk';

		if (newVal.url) {
			valueCloned.ppUrl = newVal.url;
		}
		if (newVal.target) {
			valueCloned.ppTarget = newVal.target;
		}
		if (newVal.ttl) {
			valueCloned.ppTtl = newVal.ttl;
		}
		if (newVal.rel) {
			valueCloned.ppRel = newVal.rel;
		}

		onChange(valueCloned);
	};

	const setImage = (newVal) => {
		const valueCloned = Object.assign({}, value);

		delete valueCloned.ppImgFrm;
		delete valueCloned.ppImgId;
		delete valueCloned.ppImgUrl;
		delete valueCloned.ppImgSz;

		valueCloned.ppSrc = 'img';

		if (newVal.frm) {
			valueCloned.ppImgFrm = newVal.frm;
		}
		if (newVal.id) {
			valueCloned.ppImgId = newVal.id;
		}
		if (newVal.url) {
			valueCloned.ppImgUrl = newVal.url;
		}
		if (newVal.size) {
			valueCloned.ppImgSz = newVal.size;
		}

		onChange(valueCloned);
	};

	const setVideo = (newVal) => {
		const valueCloned = Object.assign({}, value);

		delete valueCloned.ppVidFrm;
		delete valueCloned.ppVidId;
		delete valueCloned.ppVidUrl;

		valueCloned.ppSrc = 'vid';

		if (newVal.frm) {
			valueCloned.ppVidFrm = newVal.frm;
		}
		if (newVal.id) {
			valueCloned.ppVidId = newVal.id;
		}
		if (newVal.url) {
			valueCloned.ppVidUrl = newVal.url;
		}

		onChange(valueCloned);
	};

	const hasTabValue = () => {
		if (!value || isEmpty(value)) {
			return false;
		}

		return !!(
			value.ppUrl ||
			value.ppTarget ||
			value.ppTtl ||
			value.ppRel ||
			value.ppImgFrm ||
			value.ppImgId ||
			value.ppImgUrl ||
			value.ppImgSz ||
			value.ppVidFrm ||
			value.ppVidId ||
			value.ppVidUrl
		);
	};

	const setAttr = (newVal, type) => {
		const valueCloned = Object.assign({}, value);
		if (newVal) {
			valueCloned[type] = newVal;
		} else {
			delete valueCloned[type];
		}

		const resetLink = () => {
			delete valueCloned.ppUrl;
			delete valueCloned.ppTarget;
			delete valueCloned.ppTtl;
			delete valueCloned.ppRel;
		};

		const resetImage = () => {
			delete valueCloned.ppImgFrm;
			delete valueCloned.ppImgId;
			delete valueCloned.ppImgUrl;
			delete valueCloned.ppImgSz;
		};

		const resetVideo = () => {
			delete valueCloned.ppVidFrm;
			delete valueCloned.ppVidId;
			delete valueCloned.ppVidUrl;
		};

		switch (newVal) {
			case 'lnk':
				resetVideo();
				resetImage();
				break;

			case 'img':
				resetVideo();
				resetLink();
				break;

			case 'vid':
				resetVideo();
				resetImage();
				break;

			default:
				break;
		}
		onChange(valueCloned);
	};

	return (
		<AtrcPanelTools
			className={classnames(
				AtrcPrefix('ctrl-pp'),
				className,
				variant ? AtrcPrefix('ctrl-pp') + '-' + variant : ''
			)}
			label={label}
			help={help}
			resetAll={() => onChange({})}
			allowTabs={true}
			tools={[
				{
					name: 'pp',
					title: __('Popup', 'atrc-prefix-atrc'),
					hasValue: hasTabValue(),
					onDeselect: () => onChange({}),
				},
			]}>
			{(activeItems) =>
				map(activeItems, (item, iDx) => (
					<>
						<AtrcPanelRow
							className='at-m'
							key={iDx}>
							<AtrcSelect
								label={__('Source', 'atrc-prefix-atrc')}
								wrapProps={{
									className: 'at-flx-grw-1',
								}}
								value={(value && value.ppSrc) || 'img'}
								options={SelectOptions}
								onChange={(newVal) => setAttr(newVal, 'ppSrc')}
							/>
						</AtrcPanelRow>
						<RenderTabPanel
							value={value}
							onChange={onChange}
							setLink={setLink}
							setImage={setImage}
							setVideo={setVideo}
							tab={value && value.ppSrc}
							key={iDx}
						/>
					</>
				))
			}
		</AtrcPanelTools>
	);
};
export default AtrcControlPopup;
