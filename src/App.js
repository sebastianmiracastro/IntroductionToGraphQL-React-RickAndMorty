import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import CharactersList from "../src/Characters";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql"
});

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My GraphQl App</h2>
      <CharactersList />
    </div>
  </ApolloProvider>
);

export default App;