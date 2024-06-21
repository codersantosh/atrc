import React from 'react';

/*Library*/
import classnames from 'classnames';

/* Atoms */
import AtrcImgTag from './../../atoms/img';
import AtrcWrap from './../../atoms/wrap';

/* Controls */
import {
	AtrcControlBlockShapeBottomSelected,
	AtrcControlBlockShapeTopSelected,
} from '../../controls/control-block-shape';

/*Local*/
const AtrcBlockShape = (props) => {
	const {
		type = 'svg',
		svgFrm = 'def',
		svgDefd = '',
		svgCust = '',
		svgCl = '',
		flipV = false,
		flipH = false,
		imgUrl = '',
		xsH = '',
		smH = '',
		mdH = '',
		lgH = '',
		xlH = '',
		xxlH = '',
		zIdx = false,
		className = '',
	} = props;

	if ('img' === type) {
		if (imgUrl) {
			return (
				<AtrcImgTag
					src={imgUrl}
					className={classnames(
						'at-shp',
						'at-pos',
						'at-w',
						xsH || smH || mdH || lgH || xlH || xxlH ? 'at-h' : '',
						flipV || flipH ? 'at-tf' : '',
						zIdx ? 'at-z-idx' : '',
						className
					)}
				/>
			);
		}
		return null;
	}

	if ('def' === svgFrm) {
		if (svgDefd) {
			let selectedShape = '';
			if ('at-shp-t' === className) {
				selectedShape = AtrcControlBlockShapeTopSelected(svgDefd);
			} else {
				selectedShape = AtrcControlBlockShapeBottomSelected(svgDefd);
			}
			if (selectedShape && selectedShape.svg) {
				const icon = selectedShape.svg;
				return icon({
					className: classnames(
						'at-shp',
						'at-pos',
						'at-w',
						xsH || smH || mdH || lgH || xlH || xxlH ? 'at-h' : '',
						svgCl ? 'at-cl' : '',
						flipV || flipH ? 'at-tf' : '',
						zIdx ? 'at-z-idx' : '',
						className
					),
				});
			}
		}

		return null;
	}

	if (svgCust) {
		const div = document.createElement('div');
		div.innerHTML = svgCust;
		const hasHtmlTags = div.querySelector('*') !== null;
		return hasHtmlTags ? (
			<AtrcWrap
				className={classnames(
					'at-shp',
					'at-pos',
					'at-w',
					'at-svg-wrp',
					xsH || smH || mdH || lgH || xlH || xxlH ? 'at-h' : '',
					svgCl ? 'at-cl' : '',
					flipV || flipH ? 'at-tf' : '',
					zIdx ? 'at-z-idx' : '',
					className
				)}
				dangerouslySetInnerHTML={{ __html: svgCust }}
			/>
		) : (
			<AtrcWrap
				className={classnames(
					'at-shp',
					'at-pos',
					'at-w',
					'at-svg-wrp',
					xsH || smH || mdH || lgH || xlH || xxlH ? 'at-h' : '',
					svgCl ? 'at-cl' : '',
					flipV || flipH ? 'at-tf' : '',
					zIdx ? 'at-z-idx' : '',
					className
				)}>
				{svgCust}
			</AtrcWrap>
		);
	}
	return null;
};

export default AtrcBlockShape;
