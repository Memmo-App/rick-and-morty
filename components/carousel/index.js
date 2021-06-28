
import { Carousel as PrimeCarousel } from 'primereact/carousel';
import { styledCarousel } from "./styledCarousel";
import { onSelectedLocation } from '../../actions';

const StyledCarousel = styledCarousel(PrimeCarousel)

const itemTemplate = (location, dispatch, selectedLocation) => {
	const isLocationSelected = location === selectedLocation;
	return (
		<div
			onClick={() => dispatch(onSelectedLocation(location))}
		>
			<p className={isLocationSelected ? 'selected' : ''}>
				{location.name}
			</p>
		</div>
	);
}

const Carousel = ({ selectedLocation, locations, dispatch }) => {
	if (locations && !locations.length) return null;
	return (
		<StyledCarousel
			circular
			value={locations}
			itemTemplate={(location) => itemTemplate(location, dispatch, selectedLocation)}
			numVisible={5}
			numScroll={5}
		/>
	)
}

export default Carousel;