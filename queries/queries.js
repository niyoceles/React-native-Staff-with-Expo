import { gql } from 'apollo-boost';

const getAllUsers = gql`
  {
    allUsers {
      id
      sex
      names
      email
      createdAt
      updatedAt
    }
  }
`;

export { getAllUsers };
