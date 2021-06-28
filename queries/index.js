import { gql } from "@apollo/client";

export const DEFAULT_LOCATIONS = gql`
	query {
		locations {
			results {
				id
				name
				residents {
					id
					name
					status
					species
					gender
					image
					origin {
						name
					}
					location {
						name
					}
				}
				dimension
				type
			}
		}
	}
`;

export const FILTERED_LOCATIONS = (filter) => gql`
	query {
		locations${filter} {
			results {
				id
				name
				residents {
					id
					name
					status
					species
					gender
					image
					origin {
						name
					}
					location {
						name
					}
				}
				dimension
				type
			}
		}
	}
`