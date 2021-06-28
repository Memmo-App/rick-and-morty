import { useCallback } from 'react';
import Head from 'next/head'
import { useAppContext } from '../../components/provider';
import LocationsView from '../../components/locationsView';
import AnimatedCarousel from '../../components/animatedCarousel';
import Filter from "../../components/filters";
import Statistics from '../../components/statistics'
import StyledHome from "./styledHome";
import StyledContainer from "./styledContainer";
import { FILTERED_LOCATIONS } from "../../queries";
import { onFilterSelection, onFetchLocations } from "../../actions";
import client from "../../utils/client";

const Home = ({ initialLocations }) => {
	const {
		dispatch,
		state: {
			view,
			filters,
			locations = initialLocations,
			selectedLocation,
		},
	} = useAppContext();
	const layerViewActive = view === 'layer';

	const fetchLocations = useCallback(async ({ type, dimension }) => {
		try {
			const filter = (type || dimension)
				? `(filter: {
					${type ? `type: "${type}"` : ''}
					${dimension ? `dimension: "${dimension}"` : ''}
				})`
				: '';

			const { data } = await client.query({
				query: FILTERED_LOCATIONS(filter),
			});
			dispatch(onFetchLocations(data.locations.results));
		} catch (e) {
			dispatch(onFetchLocations([]));
		}
	}, [dispatch]);

	const handleFilterSelection = selectedFilter => {
		const selectedFilters = { ...filters, ...selectedFilter };

		dispatch(onFilterSelection(selectedFilters));
		fetchLocations(selectedFilters);
	};

	return (
		<StyledHome>
			<Head>
				<title>Rick and Morty Universe</title>
				<meta name="description" content="Rick and Morty Universe using next and apollo client" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
				<meta name="keywords" content="Rick and Morty, react, nextjs, graphql, apollo" />
				<meta name="canonical" content="https://thislink.com" />
				<link rel="icon" href="/favicon.png"/>
			</Head>
			<div className={`division ${layerViewActive ? 'layout-view' : ''}`}>
				<StyledContainer className="container-left">
					<Filter
						locations={locations}
						selectedFilters={filters}
						handleFilterSelection={handleFilterSelection}
					/>

					<Statistics
						locations={locations}
						selectedLocation={selectedLocation}
					/>

				</StyledContainer>

				<StyledContainer className="container-right">
					<LocationsView
						layerViewActive={layerViewActive}
						locations={locations}
					/>
				</StyledContainer>
			</div>
			{
				layerViewActive && (
					<div className="division">
						<StyledContainer className="container-bottom">
							<AnimatedCarousel
								locations={locations}
							/>
						</StyledContainer>
				
					</div>
				)
			}
		</StyledHome>
	);
};

export default Home;