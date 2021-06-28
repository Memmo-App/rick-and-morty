import { createGlobalStyle } from "styled-components";
import Bg from '../public/static/images/background.png';

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		background-image: url(${Bg});
		font-family: monospace;
		display: block;
		height: 100%;
		margin: 0 auto;
		padding: 0;
		color: #fff;

		body {
			margin: 0;
			width: 100%;
			background-color: #00000087;
			min-height:100vh;
			padding: 2rem;
			font-family:Verdana;
			display: flex;
			flex-direction: row;
			height: 100%;
		
			& > div {
				width: 100%;
			}

			h3 {
				margin-top: 5px;
				margin-left: 15px;
			}

			p {
				padding: 15px;
			}

			ul {
				margin: 0;
				list-style: none;
				padding: 0 20px;
				li {
					cursor: pointer;
					padding: 15px;
				}
			}

			.p-dropdown-panel {
				background: transparent;
  			backdrop-filter: brightness(0.2);
				left: unset;
				width: auto;

				li {
					color: #fff !important;
					&:hover {
						background-color: #6f2395 !important;
					}
				}
			}
		}
	}

	@media only screen and (min-width: 500px) and (max-width: 1100px) {
		div.container-left {
			margin-right: 25px;
		}

		div.container-right {
			flex-direction: column !important;
		}
	}

	@media only screen and (max-width: 499px) {
		html {
			overflow: scroll;
		}

		div.container-left {
			overflow: unset;
		}

		div.container-right {
			flex-direction: column !important;
			border-left: unset !important;
		}	
	}
`;