import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_CLIENTS = gql`
	query GetClients {
		clients {
			email
			name
		}
	}
`;

const Clients: React.FC = (): JSX.Element => {
	const { loading, error, data } = useQuery(GET_CLIENTS);
	console.log(data);
	console.log(error);
	console.log(loading);
	return <div>This is the clients components</div>;
};

export default Clients;
