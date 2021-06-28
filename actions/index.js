export const ON_VIEW_SELECTION = 'ON_VIEW_SELECTION';
export const ON_FILTER_SELECTION = 'ON_FILTER_SELECTION';
export const ON_FETCH_LOCATIONS = 'ON_FETCH_LOCATIONS';
export const ON_SELECTED_LOCATION = 'ON_SELECTED_LOCATION';
export const ON_SELECTED_RESIDENT = 'ON_SELECTED_RESIDENT';

export const onViewSelection = (payload) => ({
	type: ON_VIEW_SELECTION,
	payload,
});

export const onFilterSelection = (payload) => ({
	type: ON_FILTER_SELECTION,
	payload,
});

export const onFetchLocations = (payload) => ({
	type: ON_FETCH_LOCATIONS,
	payload,
});

export const onSelectedLocation = (payload) => ({
	type: ON_SELECTED_LOCATION,
	payload,
});

export const onSelectedResident = (payload) => ({
	type: ON_SELECTED_RESIDENT,
	payload,
});
