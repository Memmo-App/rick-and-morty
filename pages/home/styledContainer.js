import styled from "styled-components";

const StyledContainer = styled.div`
	flex-direction: row;
	overflow: auto;

	&.container-left {
		flex-basis: 35%;
		margin-right: 45px;
	}

	&.container-right {
		flex-basis: 65%;
		flex-direction: row;
		display: flex;
		border-left: 1px solid #fff;
	}

	&.container-bottom {
		flex-basis: 100%;
		flex-direction: column;
		display: flex;

		.location__details {
			display: flex;
			width: 100%;
		}

		image {
			cursor: pointer;
		}
	}
`
export default StyledContainer;