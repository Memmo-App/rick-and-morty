import Image from "next/image";
import { styledAnimatedCarousel } from "./styledAnimatedCarousel";
import { useAppContext } from '../provider';
import { Carousel } from 'primereact/carousel';
import { motion } from "framer-motion"

const StyledAnimatedCarousel = styledAnimatedCarousel(Carousel)

const itemTemplate = (resident) => {
	if (!resident) return null;
	return (
		<div className="resident__container">
			<motion.div
				className="animated__container"
				whileHover={{
					rotateY: '180deg',
					scale: 0.7,
				}}
				whileTap={{ scale: 0.8 }}>
				<Image src={resident.image} alt={resident.name} width={300} height={300} />
				<div className="resident__details">
					<p>Name: {resident.name}</p>
					<p>Status: {resident.status}</p>
					<p>Species: {resident.species}</p>
					<p>Gender: {resident.gender}</p>
				</div>
			</motion.div>
		</div>
	);
}

const AnimatedCarousel = () => {
	const { dispatch, state: { selectedLocation: { dimension, type, residents } = {} } } = useAppContext();
	if (!residents || !residents.length) return (<p>No results were found.</p>);

	return (
		<>
			<div className="location__details">
				<h1>Dimension:</h1>
				<p>{dimension}</p>
				<h1>Type:</h1>
				<p>{type}</p>
			</div>
			<StyledAnimatedCarousel
				circular
				value={residents}
				itemTemplate={(resident) => itemTemplate(resident, dispatch)}
				numVisible={4}
				numScroll={4}
			/>
		</>
	)
}

export default AnimatedCarousel;