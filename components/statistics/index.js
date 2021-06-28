import { StyledStatistics } from './styledStatistics';

const Statistics = ({ selectedLocation }) => {
	if (!selectedLocation) return null;
	const { residents } = selectedLocation;
	const aliveResidents = residents.filter(resident => 
		resident.status === 'Alive' &&
		resident.origin.name === selectedLocation.name).length;
	const deadResidents = residents.filter(resident => resident.status === 'Dead' && resident.origin.name === selectedLocation.name).length;
	const currentGuests = residents.filter(resident => resident.origin.name !== selectedLocation.name).length;
	const robots = residents.filter(resident => resident.species === 'Robot').length;
	const aliens = residents.filter(resident => resident.species === 'Alien').length;
	const humans = residents.filter(resident => resident.species === 'Human').length;

	return (
		<StyledStatistics>
			<h3>Statistics</h3>
			<p>Alive Residents: <span className="statistics--numbers">{aliveResidents}</span></p>
			<p>Dead Residents: <span className="statistics--numbers">{deadResidents}</span></p>
			<p>Current Guests: <span className="statistics--numbers">{currentGuests}</span></p>
			<p>Robots vs Aliens vs Humans: <span className="statistics--numbers">{robots} vs {aliens} vs {humans}</span></p>
		</StyledStatistics>
	)
};

export default Statistics;