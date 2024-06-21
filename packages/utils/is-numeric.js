import React from 'react';

/* Local */
export default function AtrcIsNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}
