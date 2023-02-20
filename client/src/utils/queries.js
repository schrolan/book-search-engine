import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      books {
        _id
        book
        Author
        description
      }
    }
  }
`;