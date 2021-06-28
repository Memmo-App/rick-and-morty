import styled from "styled-components";

export const styledAnimatedCarousel = (animatedCarousel) => styled(animatedCarousel)`
	.p-carousel-item {
		padding: 0 5px;
	}

	.resident__container {
		position: relative;
	}

	.resident__details {
		color: #fff;
		font-weight: 600;
		font-size: 22px;
		background: #000000a8;
		position: absolute;
		bottom: 0px;
		z-index: 1;
		padding: 10px;
		font-size: 18px;
		width: 100%;

		p {
			line-height: 1.3;
			padding: 0;
			margin: 0;
		}
	}

	.animated__container {
		display: inline-block;
	}

	img {
		cursor: pointer;
		border-radius: 10px;
	}
`;