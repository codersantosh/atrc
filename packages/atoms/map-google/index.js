import { __, sprintf } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

import classNames from 'classnames';
import { AtrcUniqueID } from '../../utils';

const AtrcGoogleMap = ({
	id,
	apiKey,
	loc = 'Gorkh Durbar',
	lat,
	lng,
	zoom = 15,
	mapTypeId = 'roadmap',
	draggable,
	typeCtrl,
	zoomCtrl,
	fullScreenCtrl,
	streetViewCtrl,
	markers,
	mapStyle,
	mapStyleCust,
	className = '',
	onChange = () => {},
	...defaultProps
}) => {
	const mapID = id || AtrcUniqueID();
	const [scriptLoaded, setScriptLoaded] = useState(false);
	const [msg, setMessage] = useState(
		apiKey ? __('Script is not loaded', 'atrc-prefix-atrc') : ''
	);

	let gMap;

	/* Load script */
	useEffect(() => {
		if (!apiKey) {
			return;
		}

		const scriptId = 'atrc-prefix-atrc-google-map-api';

		if (
			!document.getElementById(scriptId) &&
			typeof window.google === 'undefined'
		) {
			const script = document.createElement('script');
			script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
			script.defer = true;
			script.async = true;
			script.id = scriptId;
			// Add onload function to script
			script.onload = function () {
				setScriptLoaded(true);
			};
			// Append script element to the document.
			document.head.appendChild(script);
		}
	}, []);

	function addInfoWindow(marker, markerId, title, description) {
		const contentString = `<div class="at-map-overview"><h6 class="at-map-overview-title">${title}</h6><div class="at-map-overview-content">${
			description ? `<p>${description}</p>` : ''
		}<a class="at-map-overview-delete" onclick="removeMarker( '${markerId}' )">${__(
			'Delete Marker',
			'atrc-prefix-atrc'
		)}</a></div></div>`;

		// eslint-disable-next-line no-undef
		const infowindow = new google.maps.InfoWindow({
			content: contentString,
		});

		marker.addListener('click', () => {
			infowindow.open(gMap, marker);
		});
	}

	function cycleMarkers(newMarkers) {
		if (newMarkers && 0 < newMarkers.length) {
			newMarkers.forEach((marker) => {
				const latitude = marker.lat;
				const longitude = marker.lng;
				// eslint-disable-next-line no-undef
				const position = new google.maps.LatLng(latitude, longitude);

				// eslint-disable-next-line no-undef
				const mark = new google.maps.Marker({
					position,
					map: gMap,
					title: marker.title,
					e4Draggable: true,
				});

				// eslint-disable-next-line no-undef
				google.maps.event.addListener(mark, 'dragend', (event) => {
					const newLat = event.latLng.lat();
					const newLng = event.latLng.lng();
					const markersCloned = newMarkers.map((newMaker) => {
						if (marker.id === Number(newMaker.id)) {
							return { ...marker, lat: newLat, lng: newLng };
						}
						return marker;
					});

					onChange({ markers: markersCloned });
				});

				addInfoWindow(mark, marker.id, marker.title, marker.desc);
			});
		}
	}

	useEffect(() => {
		if (!apiKey) {
			return;
		}
		if (!scriptLoaded) {
			setMessage(__('Script is not loaded', 'atrc-prefix-atrc'));
			return;
		}
		// eslint-disable-next-line no-undef
		if (typeof google === 'undefined' || google === null) {
			setMessage(__('google is undefined or null', 'atrc-prefix-atrc'));
			return;
		}
		setMessage('');

		/* Init Map */
		// eslint-disable-next-line no-undef
		gMap = new google.maps.Map(document.getElementById(mapID), {
			center: {
				lat: Number(lat) || 28.0045,
				lng: Number(lng) || 84.6284,
			},
			gestureHandling: 'cooperative',
			zoom,
			mapTypeId,
		});

		if (loc && !lat && !lng) {
			const request = {
				query: loc,
				fields: ['name', 'geometry'],
			};

			// eslint-disable-next-line no-undef
			const service = new google.maps.places.PlacesService(gMap);

			service.findPlaceFromQuery(request, (results, status) => {
				// eslint-disable-next-line no-undef
				if (status === google.maps.places.PlacesServiceStatus.OK) {
					if (0 < results.length) {
						gMap.setCenter(results[0].geometry.loc);
					}
				}
			});
		}

		gMap.addListener('zoom_changed', () => {
			const newZoom = gMap.getZoom();
			onChange({ zoom: newZoom });
		});

		gMap.addListener('maptypeid_changed', () => {
			const newMapTypeId = gMap.getMapTypeId();
			onChange({ mapTypeId: newMapTypeId });
		});

		gMap.addListener('bounds_changed', () => {
			const location = gMap.getCenter();
			if (location) {
				const latitude = location.lat();
				const longitude = location.lng();
				onChange({
					lat: latitude.toString(),
					lng: longitude.toString(),
				});
			}
		});

		/* Markers */
		cycleMarkers(markers);
	}, [scriptLoaded]);

	return apiKey || msg ? (
		<div
			className={classNames(className, 'at-map')}
			id={mapID}
			{...defaultProps}>
			{msg}
		</div>
	) : (
		<iframe
			title={sprintf(
				// translators: %d: Index
				__(
					'Embedded content from Google Maps. Location: %s.',
					'atrc-prefix-atrc'
				),
				loc
			)}
			src={`https://maps.google.com/maps?q=${encodeURIComponent(
				loc
			)}&t=&z=${zoom}&ie=UTF8&output=embed`}
			frameBorder='0'
			className={classNames(className, 'at-map')}
			id={mapID}
			{...defaultProps}
		/>
	);
};

export default AtrcGoogleMap;
