import Image from "next/image";
import { useAppContext } from '../provider';
import CustomDropdown from "../dropdown";
import Button from "../button";
import { StyledFilters } from "./styledFilters";
import { onViewSelection } from '../../actions';

const Filters = ({ locations, selectedFilters, handleFilterSelection }) => {
	const { dispatch } = useAppContext();
	const types = [...new Set(locations.map(e => e.type))];
	const dimensions = [...new Set(locations.map(e => e.dimension))];

	return (
		<StyledFilters>
			<h1>Filter your location</h1>

			<div className="filters__container">
				<CustomDropdown
					width={155}
					value={selectedFilters.type}
					options={types}
					onChangeHandle={(e) => handleFilterSelection({ type: e.value })}
					placeholder="Select a type"
				/>

				<CustomDropdown
					width={260}
					value={selectedFilters.dimension}
					options={dimensions}
					onChangeHandle={(e) => handleFilterSelection({ dimension: e.value })}
					placeholder="Select a dimension"
				/>

				<Button
					onHandleClick={() => handleFilterSelection({ type: '', dimension: '' })}
				>
					<Image alt="refresh button" src="/static/svg/reset.svg" height={25} width={25} />
				</Button>
			</div>

			<div className="button__container">
				<Button
					onHandleClick={() => dispatch(onViewSelection('list'))}
				>
					<Image alt="list view button" src="/static/svg/list.svg" height={25} width={25} />
				</Button>
				<Button
					onHandleClick={() => dispatch(onViewSelection('layer'))}
				>
					<Image alt="layer view button" src="/static/svg/layers.svg" height={25} width={25} />
				</Button>
			</div>
		</StyledFilters>
	)
}

export default Filters;