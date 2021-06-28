import styled from 'styled-components';

const StyledHome = styled.section`
	display: flex;
	flex-direction: column;
	height: 100%;

	header {
		display: flex;
		flex-direction: row;
	}

	h1 {
		align-self: stretch;
	}

	.filter__container {
		display: flex;
		flex-direction: row;
		padding: 0;
	}

	.division {
		display: flex;
		flex-direction: row;
		width: 100%;
		overflow: hidden;
	}

	.layout-view {
		height: 190px;
	}

	@media only screen and (max-width: 499px) {
		.division {
			flex-direction: column;
			overflow: unset;
		}	
	}
`;

export default StyledHome;