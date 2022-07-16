import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import {
	ChakraProvider,
	Box,
	VStack,
	Grid,
	theme,
} from "@chakra-ui/react";
import Clients from "./components/Clients";

const client = new ApolloClient({
	uri: "http://localhost:4000/graphql",
	cache: new InMemoryCache(),
});

const App: React.FC = (): JSX.Element => (
	<ApolloProvider client={client}>
		<ChakraProvider theme={theme}>
			<Box textAlign="center" fontSize="xl">
				<Grid minH="100vh" p={3}>
					<VStack spacing={8}>
						<Clients />
					</VStack>
				</Grid>
			</Box>
		</ChakraProvider>
	</ApolloProvider>
);

export default App;
