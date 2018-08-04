import gql from 'graphql-tag';

export const getTrack = gql`
    query ($ID: String, $SESSION_ID: String) {
        user (ID: $ID, SESSION_ID: $SESSION_ID) {
            ID
            SESSION_ID
            URL
        }
    }
`;