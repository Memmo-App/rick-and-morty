import Image from "next/image";
import { motion } from "framer-motion"
import { StyledListItem, StyledListSubContainer } from "./styledListItem";
import { useAppContext } from '../provider';
import { onSelectedLocation, onSelectedResident } from '../../actions';

const ListItems = ({ items }) => {
	const { dispatch, state: { selectedLocation, selectedResident } } = useAppContext();
	const hasItems = items.length > 0;

	const renderResidentList = (hasItem) => {
		if (!hasItem || !selectedResident) return null;
		const { name, status, species, gender, image } = selectedResident;

		return (
			<StyledListSubContainer>
				<h3>Name:</h3>
				<p>{name}</p>
				<h3>Status:</h3>
				<p>{status}</p>
				<h3>Species:</h3>
				<p>{species}</p>
				<h3>Gender:</h3>
				<p>{gender}</p>
				<motion.div
					className="animated__container"
					whileHover={{
						scale: 1.2,
					}}
					whileTap={{ scale: 0.8 }}>
					<Image alt={name} src={image} width={300} height={200} />
				</motion.div>
			</StyledListSubContainer>
		);
	}

	const renderLocationList = (hasItems) => {
		if (!hasItems || !selectedLocation) return null;
		const { dimension, type, residents = [] } = selectedLocation;

		return (
			<StyledListSubContainer>
				<h3>Dimension:</h3>
				<p>{dimension}</p>
				<h3>Type:</h3>
				<p>{type}</p>
				<h3>Residents:</h3>
				<ul>
					{residents.length > 0 ?
						residents.map((resident, i) => (
							<li
								key={`resident${i}`}
								className={selectedResident === resident ? 'item--selected' : ''}
								onMouseEnter={() => dispatch(onSelectedResident(resident))}
							>
								{resident.name}
							</li>
						))
						: (
						<li
							className="none"
							onMouseEnter={() => dispatch(onSelectedResident(null))}
						>
							None
						</li>
						)
					}
				</ul>
			</StyledListSubContainer>
		);
	}

	return (
		<>
			<StyledListItem>
				<h3>Locations:</h3>
				{
					hasItems
						? (
							<ul>
								{items.map((location, i) => {
								return (
									<li
										key={`item-${i}`}
										className={selectedLocation === location ? 'item--selected' : ''}
										onMouseEnter={() => dispatch(onSelectedLocation(location))}
									>
										{location.name}
									</li>);
								})}
							</ul>)
						: (<p>No results were found.</p>)
				}
			</StyledListItem>
			{renderLocationList(hasItems)}
			{renderResidentList(hasItems)}
		</>
	)
}

export default ListItems;