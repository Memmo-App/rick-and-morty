import styled from "styled-components";

export const styledCarousel = (carousel) => styled(carousel)`
	margin-top: 30px;
	width: 100%;

	div {
		cursor: pointer;
	}

	.selected {
		font-weight: 600;
		text-decoration: underline;
	}
`;