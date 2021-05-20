const { CONF_API_BASE } = process.env;

export const apiBase = CONF_API_BASE || 'https://gql-rc.front-uat.reezocar.com';
export const graphqlEndpoint = `${apiBase}/graphql`;

