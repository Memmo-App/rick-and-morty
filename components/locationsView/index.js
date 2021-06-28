import { useAppContext } from '../provider';
import Carousel from "../carousel";
import ListItems from "../listItems";

const LocationsView = ({ locations, layerViewActive }) => {
	const { dispatch, state: { selectedLocation } } = useAppContext();

	return layerViewActive ? (
		<Carousel
			selectedLocation={selectedLocation}
			locations={locations}
			dispatch={dispatch}
		/>
	) : (
		<ListItems items={locations} />
	)
};

export default LocationsView;
