import gql from 'graphql-tag';

export const login = gql`
    query ($EMAIL: String, $PASSWORD: String) {
        user (EMAIL: $EMAIL, PASSWORD: $PASSWORD) {
            EMAIL
            PASSWORD
            SESSION_IDS
        }
    }
`;