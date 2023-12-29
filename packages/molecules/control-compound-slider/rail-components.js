/* Slider rail */
const railOuterStyle = {
	position: 'absolute',
	width: '100%',
	height: 42,
	transform: 'translate(0%, -50%)',
	borderRadius: 7,
	cursor: 'pointer',
};

const railInnerStyle = {
	position: 'absolute',
	width: '100%',
	height: 3,
	backgroundColor: '#e2e4e7',
	transform: 'translate(0%, -50%)',
	borderRadius: 7,
	pointerEvents: 'none',
};

export const SliderRail = ({ getRailProps }) => {
	return (
		<>
			<div
				style={railOuterStyle}
				{...getRailProps()}
			/>
			<div style={railInnerStyle} />
		</>
	);
};

/* Slider handle */
export const Handle = (props) => {
	const {
		domain: [min, max],
		handle: { id, value, percent },
		disabled = false,
		getHandleProps,
	} = props;
	return (
		<button
			role='slider'
			aria-valuemin={min}
			aria-valuemax={max}
			aria-valuenow={value}
			disabled={disabled}
			style={{
				left: `${percent}%`,
			}}
			{...getHandleProps(id)}
		/>
	);
};

export const Tick = ({ tick, count }) => {
	return (
		<div>
			<div
				style={{
					position: 'absolute',
					marginTop: 1,
					marginLeft: -0.5,
					width: 1,
					height: 8,
					backgroundColor: 'silver',
					left: `${tick.percent}%`,
				}}
			/>
			<div
				style={{
					position: 'absolute',
					marginTop: 5,
					fontSize: 10,
					textAlign: 'center',
					marginLeft: `${-(100 / count) / 2}%`,
					width: `${100 / count}%`,
					left: `${tick.percent}%`,
				}}>
				{tick.value}
			</div>
		</div>
	);
};
