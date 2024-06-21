import React from 'react';

/*Attributes Structure
Type Object
{
loc
lat
lng
markers:[]
mapTypeId
gestureHandling
zoom
mapTypeControl
zoomControl
fullscreenControl 
streetViewControl
}
 * */

/*WordPress*/
import { __, sprintf } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

/*Library*/
import classnames from 'classnames';
import { cloneDeep } from 'lodash';

/*Atoms*/
import AtrcWrap from '../../atoms/wrap';
import AtrcLabel from '../../atoms/label';

/* Controls */
import AtrcControlText from '../control-text';

/* Molecules */
import AtrcPanelRow from '../../molecules/panel-row';
import AtrcPanelBody from '../../molecules/panel-body';
import AtrcNotice from '../../molecules/notice';
import AtrcRepeater from '../../molecules/repeater';

/* Prefix */
import AtrcPrefix from '../../prefix-vars';
import AtrcRepeaterGroupAdd from '../../molecules/repeater/repeater-group-add';
import AtrcRepeaterGroup from '../../molecules/repeater/repeater-group';
import AtrcControlTextarea from '../control-textarea';
import AtrcControlSelect from '../control-select';
import AtrcControlRange from '../control-range';
import AtrcControlToggle from '../control-toggle';

/*Local*/
const AtrcControlMapGoogle = (props) => {
	const {
		label = '',
		className = '',
		variant = '',
		value = {},
		onChange = () => {},
		apiKey = '',
	} = props;

	const {
		loc = '',
		lat = '',
		lng = '',
		markers = [],
		mapTypeId = 'roadmap',
		gestureHandling = 'auto',
		zoom = 10,
		mapTypeControl,
		zoomControl,
		fullscreenControl,
		streetViewControl,
	} = value;

	// Initialize the state with an empty array
	const [notice, setNotice] = useState();

	const setAttr = (type, newVal) => {
		const valueCloned = cloneDeep(value);

		if (newVal) {
			valueCloned[type] = newVal;
		} else {
			delete valueCloned[type];
		}

		onChange(valueCloned);
	};

	/* Markers add/update/delete */
	// Function to delete a marker
	const deleteMarker = (markerIndex) => {
		// Make a copy of the item array
		const updatedMarkers = [...markers];

		// Remove the item at the specified idx
		updatedMarkers.splice(markerIndex, 1);

		//Add notice to user
		setNotice(__('Map marker deleted.', 'atrc-prefix-atrc'));

		// Set the updated value array as the new state
		setAttr('markers', updatedMarkers);
	};

	const updateMarker = (type, newVal, index) => {
		const updatedMarkers = [...markers];
		updatedMarkers[index][type] = newVal;
		setAttr('markers', updatedMarkers);
	};

	const addMarker = () => {
		const updatedMarkers = [
			...markers,
			{
				loc: '',
				lat: '',
				lng: '',
				title: '',
				desc: '',
			},
		];
		setAttr('markers', updatedMarkers);
	};

	return (
		<>
			{label && (
				<AtrcLabel className={classnames(AtrcPrefix('m-0'))}>{label}</AtrcLabel>
			)}
			{!apiKey ? (
				<AtrcPanelRow>
					<AtrcNotice isDismissible={false}>
						<AtrcWrap
							dangerouslySetInnerHTML={{
								__html: sprintf(
									// translators: %s: tag name a
									__(
										'To utilize advanced map functionalities, a %1$sGoogle Map API Key%2$s is needed.',
										'atrc-prefix-atrc'
									),
									"<a href='https://developers.google.com/maps/documentation/places/web-service/overview'>",
									'</a>'
								),
							}}
						/>
					</AtrcNotice>
				</AtrcPanelRow>
			) : null}

			<AtrcPanelRow className={classnames('at-m')}>
				<AtrcControlText
					label={__('Location', 'atrc-prefix-atrc')}
					type='text'
					placeholder={__('Enter a location…', 'atrc-prefix-atrc')}
					value={loc}
					onChange={(newVal) => {
						setAttr('loc', newVal);
					}}
				/>
			</AtrcPanelRow>

			{apiKey ? (
				<>
					<AtrcPanelRow
						className={classnames(
							'at-ptr-ev',
							AtrcPrefix('ptr-ev-non'),
							'at-m'
						)}>
						<AtrcControlText
							label={__('Latitude', 'atrc-prefix-atrc')}
							type='number'
							placeholder={__('Enter latitude…', 'atrc-prefix-atrc')}
							value={lat}
							onChange={(newVal) => {
								setAttr('lat', newVal);
							}}
						/>
					</AtrcPanelRow>
					<AtrcPanelRow
						className={classnames(
							'at-ptr-ev',
							AtrcPrefix('ptr-ev-non'),
							'at-m'
						)}>
						<AtrcControlText
							label={__('Longitude', 'atrc-prefix-atrc')}
							type='number'
							placeholder={__('Enter longitude', 'atrc-prefix-atrc')}
							value={lng}
							onChange={(newVal) => {
								setAttr('lng', newVal);
							}}
						/>
					</AtrcPanelRow>

					<AtrcPanelRow
						className={classnames(
							'at-ptr-ev',
							AtrcPrefix('ptr-ev-non'),
							'at-m'
						)}>
						<AtrcPanelBody
							className={classnames('at-flx-grw-1')}
							title={__('Markers', 'atrc-prefix-atrc')}
							initialOpen={false}>
							{notice && (
								<AtrcNotice
									onRemove={() => setNotice('')}
									onAutoRemove={() => setNotice('')}>
									{notice}
								</AtrcNotice>
							)}
							<AtrcPanelRow
								className={classnames('at-ptr-ev', AtrcPrefix('ptr-ev-non'))}>
								<AtrcRepeater
									groups={() =>
										markers.map((variation, index) => (
											<AtrcRepeaterGroup
												markerIndex={index}
												deleteGroup={deleteMarker}
												groupTitle={sprintf(
													// translators: %d: Index
													__('Marker %d', 'atrc-prefix-atrc'),
													index + 1
												)}
												deleteTitle={__('Remove marker', 'atrc-prefix-atrc')}
												key={index}>
												<AtrcPanelRow className={classnames('at-m')}>
													<AtrcControlText
														label={__('Enter a location…', 'atrc-prefix-atrc')}
														type='text'
														placeholder={__(
															'Enter a location…',
															'atrc-prefix-atrc'
														)}
														value={variation.loc}
														onChange={(newVal) =>
															updateMarker('loc', newVal, index)
														}
													/>
												</AtrcPanelRow>
												<AtrcPanelRow className={classnames('at-m')}>
													<AtrcControlText
														label={__('Latitude', 'atrc-prefix-atrc')}
														type='number'
														placeholder={__(
															'Enter latitude…',
															'atrc-prefix-atrc'
														)}
														value={variation.lat}
														onChange={(newVal) =>
															updateMarker('lat', newVal, index)
														}
													/>
												</AtrcPanelRow>
												<AtrcPanelRow className={classnames('at-m')}>
													<AtrcControlText
														label={__('Longitude', 'atrc-prefix-atrc')}
														type='number'
														placeholder={__(
															'Enter longitude',
															'atrc-prefix-atrc'
														)}
														value={variation.lng}
														onChange={(newVal) =>
															updateMarker('lng', newVal, index)
														}
													/>
												</AtrcPanelRow>
												<AtrcPanelRow className={classnames('at-m')}>
													<AtrcControlText
														label={__('Marker title', 'atrc-prefix-atrc')}
														type='text'
														placeholder={__(
															'Custom marker',
															'atrc-prefix-atrc'
														)}
														value={variation.title}
														onChange={(newVal) =>
															updateMarker('title', newVal, index)
														}
													/>
												</AtrcPanelRow>
												<AtrcPanelRow className={classnames('at-m')}>
													<AtrcControlTextarea
														label={__('Marker description', 'atrc-prefix-atrc')}
														type='text'
														placeholder={__(
															'Custom marker',
															'atrc-prefix-atrc'
														)}
														value={variation.desc}
														onChange={(newVal) =>
															updateMarker('desc', newVal, index)
														}
													/>
												</AtrcPanelRow>
											</AtrcRepeaterGroup>
										))
									}
									addGroup={() => (
										<AtrcRepeaterGroupAdd
											addGroup={addMarker}
											tooltipText={__('Add marker', 'atrc-prefix-atrc')}
											label={__('Add marker', 'atrc-prefix-atrc')}
										/>
									)}
								/>
							</AtrcPanelRow>
						</AtrcPanelBody>
					</AtrcPanelRow>
					<AtrcPanelRow
						className={classnames(
							'at-ptr-ev',
							AtrcPrefix('ptr-ev-non'),
							'at-m'
						)}>
						<AtrcPanelBody
							className={classnames('at-flx-grw-1')}
							title={__('Map options', 'atrc-prefix-atrc')}
							initialOpen={false}>
							<AtrcPanelRow
								className={classnames(
									'at-ptr-ev',
									AtrcPrefix('ptr-ev-non'),
									'at-m'
								)}>
								<AtrcControlToggle
									label={__('Full Screen Control', 'atrc-prefix-atrc')}
									checked={fullscreenControl}
									onChange={() => {
										setAttr('fullscreenControl', !fullscreenControl);
									}}
								/>
							</AtrcPanelRow>
							<AtrcPanelRow
								className={classnames(
									'at-ptr-ev',
									AtrcPrefix('ptr-ev-non'),
									'at-m'
								)}>
								<AtrcControlSelect
									label={__('Gesture handling', 'atrc-prefix-atrc')}
									wrapProps={{
										className: 'at-flx-grw-1',
									}}
									value={gestureHandling}
									options={[
										{
											label: __('Cooperative', 'atrc-prefix-atrc'),
											value: 'cooperative',
										},
										{
											label: __('Greedy', 'atrc-prefix-atrc'),
											value: 'greedy',
										},
										{
											label: __('None', 'atrc-prefix-atrc'),
											value: 'none',
										},
										{
											label: __('Auto', 'atrc-prefix-atrc'),
											value: 'auto',
										},
									]}
									onChange={(newVal) => {
										setAttr('gestureHandling', newVal);
									}}
								/>
							</AtrcPanelRow>
							<AtrcPanelRow
								className={classnames(
									'at-ptr-ev',
									AtrcPrefix('ptr-ev-non'),
									'at-m'
								)}>
								<AtrcControlSelect
									label={__('Map Type', 'atrc-prefix-atrc')}
									wrapProps={{
										className: 'at-flx-grw-1',
									}}
									value={mapTypeId}
									options={[
										{
											label: __('Road Map', 'atrc-prefix-atrc'),
											value: 'roadmap',
										},
										{
											label: __('Satellite View', 'atrc-prefix-atrc'),
											value: 'satellite',
										},
										{
											label: __('Hybrid', 'atrc-prefix-atrc'),
											value: 'hybrid',
										},
										{
											label: __('Terrain', 'atrc-prefix-atrc'),
											value: 'terrain',
										},
									]}
									onChange={(newVal) => {
										setAttr('mapTypeId', newVal);
									}}
								/>
							</AtrcPanelRow>

							<AtrcPanelRow
								className={classnames(
									'at-ptr-ev',
									AtrcPrefix('ptr-ev-non'),
									'at-m'
								)}>
								<AtrcControlToggle
									label={__('Map Type Control', 'atrc-prefix-atrc')}
									checked={mapTypeControl}
									onChange={() => {
										setAttr('mapTypeControl', !mapTypeControl);
									}}
								/>
							</AtrcPanelRow>
							<AtrcPanelRow
								className={classnames(
									'at-ptr-ev',
									AtrcPrefix('ptr-ev-non'),
									'at-m'
								)}>
								<AtrcControlToggle
									label={__('Zoom Control', 'atrc-prefix-atrc')}
									checked={zoomControl}
									onChange={(newVal) => {
										setAttr('zoomControl', !zoomControl);
									}}
								/>
							</AtrcPanelRow>

							<AtrcPanelRow
								className={classnames(
									'at-ptr-ev',
									AtrcPrefix('ptr-ev-non'),
									'at-m'
								)}>
								<AtrcControlToggle
									label={__('Streen View Control', 'atrc-prefix-atrc')}
									checked={streetViewControl}
									onChange={() => {
										setAttr('streetViewControl', !streetViewControl);
									}}
								/>
							</AtrcPanelRow>
						</AtrcPanelBody>
					</AtrcPanelRow>
					<AtrcPanelRow
						className={classnames(
							'at-ptr-ev',
							AtrcPrefix('ptr-ev-non'),
							'at-m'
						)}>
						<AtrcControlRange
							label={__('Map Zoom Level', 'atrc-prefix-atrc')}
							value={zoom}
							min={0}
							max={20}
							onChange={(newVal) => {
								setAttr('zoom', newVal);
							}}
						/>
					</AtrcPanelRow>
				</>
			) : null}
		</>
	);
};
export default AtrcControlMapGoogle;
