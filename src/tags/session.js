import gql from 'graphql-tag';

export const getSession = gql`
    query ($ID: String, $IDS: String) {
        user (ID: $ID, IDS: $IDS) {
            ID
            IDS
        }
    }
`;

export const createSession = gql`
    mutation ($userEmail: String) {
        createSession(userEmail: $userEmail) {
            ID
        }
    }
`;