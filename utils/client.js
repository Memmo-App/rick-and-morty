import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache({
		addTypename: false,
	}),
	onError: (e) => { console.log(e) },
});

export default client;