import styled from 'styled-components';

export const StyledFilters = styled.div`
	border-bottom: 1px solid white;
	padding-bottom: 45px;
	button {
		border-radius: 3px;
	}

	.filters__container {
		display: flex;
		flex-direction: row;
		margin-bottom: 15px;
	}

	.button__container {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	@media only screen and (max-width: 1100px) {
		.filters__container {
			height: 60px;
			position: relative;
			flex-flow: wrap;

			.p-dropdown {
				width: 100%;
				margin-right: 0;
			}

			button {
				bottom: 0;
				right: 0;
				position: absolute;
				top: 75px;
			}

			.button__container {
				position: absolute;
				justify-content: flex-start;
			}
		}
	}
`