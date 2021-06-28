import { Dropdown } from 'primereact/dropdown';
import { styledDropdown } from './styledDropdown';


const StyledDropdown = styledDropdown(Dropdown);

const CustomDropdown = ({ className, width, value, options, onChangeHandle, placeholder }) => (
	<StyledDropdown
		width={width}
		className={className}
		value={value}
		options={options}
		onChange={onChangeHandle}
		placeholder={placeholder}
	/>
)

export default CustomDropdown;