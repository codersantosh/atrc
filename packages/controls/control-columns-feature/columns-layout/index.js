/* Internal */
import OneColumnLayout from './one-column';
import TwoColumnsLayout from './two-columns';
import ThreeColumnsLayout from './three-columns';
import FourColumnsLayout from './four-columns';
import FiveColumnsLayout from './five-columns';
import SixColumnsLayout from './six-columns';

/* Local */
const ColumnLayout = (props) => {
	let { columns, value, onChange = () => {} } = props;
	columns = parseInt(columns);

	if (1 === columns) {
		return (
			<OneColumnLayout
				value={value}
				onChange={onChange}
			/>
		);
	} else if (2 === columns) {
		return (
			<TwoColumnsLayout
				value={value}
				onChange={onChange}
			/>
		);
	} else if (3 === columns) {
		return (
			<ThreeColumnsLayout
				value={value}
				onChange={onChange}
			/>
		);
	} else if (4 === columns) {
		return (
			<FourColumnsLayout
				value={value}
				onChange={onChange}
			/>
		);
	} else if (5 === columns) {
		return (
			<FiveColumnsLayout
				value={value}
				onChange={onChange}
			/>
		);
	} else if (6 === columns) {
		return (
			<SixColumnsLayout
				value={value}
				onChange={onChange}
			/>
		);
	}

	return null;
};

export default ColumnLayout;
