import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
query GET_REPOSITORIES {
  repositories {
    edges {
      node {
        createdAt
        description
        forksCount
        fullName
        id
        language
        name
        ownerAvatarUrl
        ownerName
        ratingAverage
        reviewCount
        stargazersCount
      }
    }
  }
}

`

export const USER_EXIST = gql`
  query {
    me {
      id
      username
    }
  }
`;