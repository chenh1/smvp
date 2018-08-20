import gql from 'graphql-tag';

export const user = gql`
    query ($EMAIL: String, $PASSWORD: String) {
        user (EMAIL: $EMAIL, PASSWORD: $PASSWORD) {
            EMAIL
            PASSWORD
            SESSION_IDS
        }
    }
`;

export const createUser = gql`
    mutation ($EMAIL: String, $PASSWORD: String) {
        createUser (EMAIL: $EMAIL, PASSWORD: $PASSWORD) {
            EMAIL
            PASSWORD
            SESSION_IDS
        }
    }
`;