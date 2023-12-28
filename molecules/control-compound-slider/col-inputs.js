const ColInputs = ({ values }) => {
	return (
		<div className='g-r-col-inputs'>
			{values.map((col, i) => {
				return (
					<input
						key={i}
						className='g-r-col-input-field'
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
