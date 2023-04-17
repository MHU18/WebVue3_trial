import { ApolloClient, from, HttpLink, InMemoryCache } from "@apollo/client/core";

const cache = new InMemoryCache();
// setting up default http link
const httpLink = new HttpLink({ uri: "/api/AemoGraphQL" });

export const apolloClient = new ApolloClient({
  cache: cache,
  //make sure to configure vite.config.ts to point your local dev proxy to your resource
  link: from([
    httpLink,
  ]),
});
