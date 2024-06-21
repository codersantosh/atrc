import React from 'react';

/* Local */
const ColInputs = ({ value }) => {
	return (
		<div className='at-cpd-slider-col-input at-flx at-m at-gap'>
			{value &&
				value.map((col, i) => {
					return (
						<input
							key={i}
							className='at-cpd-slider-col-input-field'
							type='number'
							min={1}
							max={100}
							value={col ? col : ''}
							readOnly
						/>
					);
				})}
		</div>
	);
};

export default ColInputs;
