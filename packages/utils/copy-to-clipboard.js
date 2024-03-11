/* WordPress */
import { __ } from '@wordpress/i18n';

/* Local */
/**
 * Copies a string to the clipboard using either the navigator.clipboard API or a temporary textarea.
 *
 * @param {string} stringToCopy A string that will be copied to the clipboard.
 * @return {Promise<boolean>} A Promise that resolves to true if the copy operation succeeded, and false otherwise.
 */
const AtrcCopyToClipboard = async (stringToCopy) => {
	try {
		if (navigator.clipboard) {
			await navigator.clipboard.writeText(stringToCopy);
			return true;
		} else {
			const element = document.createElement('textarea');
			element.setAttribute('readonly', '');
			element.style.position = 'absolute';
			element.style.left = '-9999px';
			element.value = stringToCopy;
			document.body.appendChild(element);
			element.select();
			const success = document.execCommand('copy');
			document.body.removeChild(element);
			return success;
		}
	} catch (error) {
		console.error(__('Error copying to clipboard:', 'atrc-prefix-atrc'), error);
		return false;
	}
};

export default AtrcCopyToClipboard;
