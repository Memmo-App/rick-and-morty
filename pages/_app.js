import App from 'next/app';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styledApp";
import { AppProvider } from '../components/provider/index';
import client from "../utils/client";
import { DEFAULT_LOCATIONS } from "../queries";

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
const theme = {
	colors: {
	  primary: "#fff",
	},
};

class MyApp extends App {
	static async getInitialProps() {
		const { data } = await client.query({
			query: DEFAULT_LOCATIONS,
		});
	
		return {
			initialLocations: data.locations.results,
		};
	}

	render() {
		const { Component, pageProps, initialLocations } = this.props;
		const defaultProps = { ...pageProps, initialLocations };

		return (
			<>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<AppProvider>
						<Component {...defaultProps} />
					</AppProvider>
				</ThemeProvider>
			</>
		);
	}
}

export default MyApp
