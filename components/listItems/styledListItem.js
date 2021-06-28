import styled from "styled-components";

export const StyledListItem = styled.div`
	padding: 20px 30px;
	display: flex;
	flex-direction: column;
	flex-basis: 33.33%;
	overflow: auto;

	ul {
		padding: 0;
		list-style: none;

		li {
			&.item--selected {
				background-color: #000;
			}
		}
	}
`;

export const StyledListSubContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 33.33%;
	overflow: auto;
	padding: 20px 30px;
	border-left: 1px solid white;

	ul {
		padding: 0;

		li {
			&.item--selected {
				background-color: #000;
			}

			&.none:hover {
				background-color: #000;
			}
		}
	}

	div {
		margin: 20px 0px !important;
		
	}

	p {
		margin: 0 15px 15px 0;
	}

	@media only screen and (max-width: 1100px) {
		border-left: unset;
	}
`