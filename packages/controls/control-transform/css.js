/* Utils */
import { AtrcIsKeyWithValueNotEmpty } from '../../utils/object-values-with-allowed-keys-and-tabs';

/* Local */
export default function AtrcControlTransformCss(value) {
	if (!value) {
		return '';
	}
	let transform = '';

	if (
		AtrcIsKeyWithValueNotEmpty(value, 'translX') ||
		AtrcIsKeyWithValueNotEmpty(value, 'translY') ||
		AtrcIsKeyWithValueNotEmpty(value, 'translZ')
	) {
		if (value.on3D) {
			transform += `translate3d(${value.translX || 0}, ${value.translY || 0}, ${
				value.translZ || 0
			})`;
		} else {
			transform += `translate(${value.translX || 0}, ${value.translY || 0})`;
		}
	}
	if (
		AtrcIsKeyWithValueNotEmpty(value, 'sclX') ||
		AtrcIsKeyWithValueNotEmpty(value, 'sclY ') ||
		AtrcIsKeyWithValueNotEmpty(value, 'sclZ')
	) {
		if (value.on3D) {
			transform += ` scale3d(${value.sclX || 0}, ${value.sclY || 0}, ${
				value.sclZ || 0
			})`;
		} else {
			transform += ` scale(${value.sclX || 0}, ${value.sclY || 0})`;
		}
	}

	if (
		AtrcIsKeyWithValueNotEmpty(value, 'rotX') ||
		AtrcIsKeyWithValueNotEmpty(value, 'rotY') ||
		AtrcIsKeyWithValueNotEmpty(value, 'rotZ') ||
		AtrcIsKeyWithValueNotEmpty(value, 'rotA')
	) {
		if (value.on3D) {
			transform += ` rotate3d(${value.rotX || 0}, ${value.rotY || 0}, ${
				value.rotZ || 0
			}, ${value.rotA || 0}deg)`;
		} else {
			transform += ` rotate(${value.rotA || 0}deg)`;
		}
	}

	if (
		AtrcIsKeyWithValueNotEmpty(value, 'skewX') ||
		AtrcIsKeyWithValueNotEmpty(value, 'skewY')
	) {
		transform += ` skew(${value.skewX || 0}deg, ${value.skewY || 0}deg)`;
	}
	return transform;
}
