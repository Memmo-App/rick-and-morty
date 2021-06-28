import styled from "styled-components";

export const styledDropdown = (dropdown) => styled(dropdown)`
		background: transparent;
  	backdrop-filter: brightness(0.2);
		margin-right: 10px;
		border: 1px solid white;
		width: ${p => p.width ? `${p.width}px` : 'auto'};

		.p-dropdown-label {
			color: #fff !important;
		}
`;
