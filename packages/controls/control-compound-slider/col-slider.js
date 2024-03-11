/* Library */
/**
 * react-compound-slider
 * https://github.com/sghall/react-compound-slider
 */
import { Slider, Handles, Rail, Ticks } from 'react-compound-slider';

/**
 * Rail Slider Components
 * https://github.com/sghall/react-compound-slider
 */
import { SliderRail, Handle, Tick } from './rail-components';
import { isEqual } from 'lodash';

/* Local */
const sliderStyle = {
	position: 'relative',
	width: '100%',
};

const domain = [0, 100];

const ColSlider = ({ value, onChange }) => {
	return (
		<Slider
			className='at-cpd-slider'
			rootStyle={sliderStyle}
			mode={3}
			step={1}
			onChange={(newVal) => {
				if (!isEqual(newVal, value)) {
					onChange(newVal);
				}
			}}
			domain={domain} // [min, max]
			values={value} // slider value
		>
			<Rail>
				{({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
			</Rail>
			<Handles>
				{({ handles, getHandleProps }) => (
					<div className='slider-handles'>
						{handles.map((handle) => (
							<Handle
								key={handle.id}
								handle={handle}
								domain={domain}
								getHandleProps={getHandleProps}
							/>
						))}
					</div>
				)}
			</Handles>
			<Ticks value={[0, 25, 50, 75, 100]}>
				{({ ticks }) => (
					<div className='slider-ticks'>
						{ticks.map((tick) => (
							<Tick
								key={tick.id}
								tick={tick}
								count={ticks.length}
							/>
						))}
					</div>
				)}
			</Ticks>
		</Slider>
	);
};

export default ColSlider;
