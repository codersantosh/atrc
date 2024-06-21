import React from 'react';

/* WordPress */
import { __, sprintf } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';

/* Library */
import classnames from 'classnames';
import { isEmpty } from 'lodash';

/* Atoms */
import AtrcIframe from '../iframe';
import AtrcWrap from '../wrap';

/* Utils */
import AtrcUniqueID from '../../utils/unique-id';
import AtrcPrefix from '../../prefix-vars';

/* Local */
/* Not work for save function of Gutenberg block, to make it work we cannot use  hooks like useEffect.
We are using gMapData that store map information on wrap props dataMap, later frontend JS should access this info.
*/

/* use this function on js by removing onChange and adjust minor*/
const AtrcMapGoogleGetLatLong = (lat = '', lng = '') => {
	lat = Number(lat);
	lng = Number(lng);
	if (!lat) {
		lat = 23.475109;
	}
	if (!lng) {
		lng = 78.451439;
	}
	return {
		lat,
		lng,
	};
};

function AtrcMapGoogleAddInfoWindow(
	gMap,
	marker,
	markerId,
	title,
	description
) {
	const contentString = `<div class="at-map-overview"><h6 class="at-map-overview-title">${title}</h6><div class="at-map-overview-content">${
		description ? `<p>${description}</p>` : ''
	}</div></div>`;

	// eslint-disable-next-line no-undef
	const infowindow = new google.maps.InfoWindow({
		content: contentString,
	});

	marker.addListener('click', () => {
		infowindow.open(gMap, marker);
	});
}

function AtrcMapGoogleAddMarkers(gMap, newMarkers) {
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
			});

			AtrcMapGoogleAddInfoWindow(
				gMap,
				mark,
				marker.id,
				marker.title,
				marker.desc
			);
		});
	}
}

const AtrcMapGoogle = ({
	id = AtrcUniqueID(),
	className = '',
	variant = '',
	value = {},
	componentType = 'client',
	...defaultProps
}) => {
	/* gogole map object */

	/* Map id */
	const mapID = id;

	/* Server data, for gutenberg frontend */
	let gMapData = null;

	const {
		apiKey = '',
		loc = 'Gorkha Palace',
		lat = '23.475109',
		lng = '78.451439',
		markers = [],
		mapTypeId = 'roadmap',
		gestureHandling = 'auto',
		zoom = 10,
		mapTypeControl = false,
		zoomControl = false,
		fullscreenControl = false,
		streetViewControl = false,
		newGoogleMapProps = {},
	} = value;

	if ('client' === componentType && apiKey) {
		/* Google map object to handle dynamic change */
		const [googleMap, setGoogleMap] = useState();

		/* Initilize google map */
		useEffect(() => {
			/* Init Map */
			const initMap = async () => {
				let mapProps = {};
				mapProps.center = AtrcMapGoogleGetLatLong(lat, lng);
				mapProps.zoom = zoom;
				mapProps.mapTypeId = mapTypeId;
				mapProps.gestureHandling = gestureHandling;
				mapProps.mapTypeControl = mapTypeControl;
				mapProps.zoomControl = zoomControl;
				mapProps.fullscreenControl = fullscreenControl;
				mapProps.streetViewControl = streetViewControl;
				if (!isEmpty(newGoogleMapProps)) {
					mapProps = {
						...mapProps,
						...newGoogleMapProps,
					};
				}
				let gMap = await new google.maps.Map(
					document.getElementById(mapID),
					mapProps
				);

				/* Markers */
				AtrcMapGoogleAddMarkers(gMap, markers);

				/* Set google map object */
				setGoogleMap(gMap);
			};

			/* Load script */
			const loadMapScript = () => {
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
					// Append script element to the document.
					document.head.appendChild(script);

					// Add onload function to script
					script.onload = function () {
						initMap();
					};

					// Clean up the script on component unmount
					return () => {
						document.head.removeChild(script);
					};
				} else {
					initMap();
				}
			};
			loadMapScript();
		}, [apiKey]);

		/* Update Markers */
		useEffect(() => {
			if (googleMap) {
				AtrcMapGoogleAddMarkers(googleMap, markers);
			}
		}, [markers]);

		/* Update center Lat and ling */
		useEffect(() => {
			if (googleMap && lat && lng) {
				googleMap.setCenter(AtrcMapGoogleGetLatLong(lat, lng));
			}
		}, [lat, lng]);

		/* Update map type id */
		useEffect(() => {
			if (googleMap && mapTypeId) {
				googleMap.setMapTypeId(mapTypeId);
			}
		}, [mapTypeId]);

		/* Update zoom */
		useEffect(() => {
			if (googleMap && zoom) {
				googleMap.setZoom(zoom);
			}
		}, [zoom]);

		/* Update map options */
		useEffect(() => {
			if (googleMap) {
				googleMap.setOptions({
					gestureHandling,
					mapTypeControl,
					zoomControl,
					fullscreenControl,
					streetViewControl,
				});
			}
		}, [
			gestureHandling,
			mapTypeControl,
			zoomControl,
			fullscreenControl,
			streetViewControl,
		]);
	} else {
		const googleMapInfo = {};

		let mapProps = {};
		mapProps.center = AtrcMapGoogleGetLatLong(lat, lng);
		mapProps.zoom = zoom;
		mapProps.mapTypeId = mapTypeId;
		mapProps.gestureHandling = gestureHandling;
		mapProps.mapTypeControl = mapTypeControl;
		mapProps.zoomControl = zoomControl;
		mapProps.fullscreenControl = fullscreenControl;
		mapProps.streetViewControl = streetViewControl;
		if (!isEmpty(newGoogleMapProps)) {
			mapProps = {
				...mapProps,
				...newGoogleMapProps,
			};
		}
		googleMapInfo.mapProps = mapProps;
		if (markers) {
			googleMapInfo.markers = markers;
		}
		if (mapID) {
			googleMapInfo.mapID = mapID;
		}

		gMapData = JSON.stringify(googleMapInfo);
	}

	return apiKey ? (
		<AtrcWrap
			className={classnames(
				AtrcPrefix('map'),
				className,
				variant ? AtrcPrefix('map') + '-' + variant : ''
			)}
			id={mapID}
			dataMap={gMapData}
			{...defaultProps}></AtrcWrap>
	) : (
		<AtrcIframe
			title={sprintf(
				// translators: %s: location
				__(
					'Embedded content from Google Maps. Location: %s.',
					'atrc-prefix-atrc'
				),
				loc
			)}
			src={`https://maps.google.com/maps?q=${encodeURIComponent(
				loc
			)}&ie=UTF8&output=embed`}
			frameBorder='0'
			className={classnames(
				AtrcPrefix('map'),
				className,
				variant ? AtrcPrefix('map') + '-' + variant : ''
			)}
			id={mapID}
			{...defaultProps}
		/>
	);
};

export default AtrcMapGoogle;
