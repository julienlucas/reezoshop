import configs from '../configs';

import { __TEST__ } from '../constants/env';

const { graphQLEndpoint } = configs;

const graphQLQuery = (query, variables = {}, { headers: additionalHeaders, ...options } = {}) => {
   const endpoint = graphQLEndpoint;
   const body = JSON.stringify({ query, variables });
   const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...additionalHeaders,
   };

   return fetch(endpoint, {
      method: 'POST',
      headers,
      ...options,
      body,
   })
      .then((response) => fetchError(response, { query, variables }))
      .then((data) => graphqlError(data, { query, variables }));
};

export default graphQLQuery;

const fetchError = (response, queryInfos) => {
   if (response.ok) {
      return response.json();
   }

   const error = new Error(response.statusText);
   error.response = response;
   error.queryInfos = queryInfos;

   if (!__TEST__) console.error(error);
   throw error;
};

const graphqlError = ({ data, errors }, queryInfos) => {
   if (errors) {
      const error = new Error('GraphQL Error');
      error.data = data;
      error.graphQLErrors = errors;
      error.queryInfos = queryInfos;

      if (!__TEST__) console.error(error);
      throw error;
   }
   return data;
};