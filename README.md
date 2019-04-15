# Kura 

## Description
This is a simple platform where users can signup, login, nominate a user, vote for them, and see the results for a specific position.

## Dependencies
- [X] Install [GraphQL-Yoga](https://www.npmjs.com/package/graphql-yoga) (Server)
- [X] Install [Body-Parser](https://www.npmjs.com/package/body-parser)(Request Parser)
- [X] Install [JSON Web Token](https://www.npmjs.com/package/jsonwebtoken) (JWT)
- [X] Install [Bcrypt](https://www.npmjs.com/package/bcrypt) (Hashing)
- [X] Install [Prisma-Client]()(Web Client)
- [X] Install [UUID](https://www.npmjs.com/package/uuid)(Random String Generator)
- [X] Install [YUP](https://www.npmjs.com/package/yup)(Validations)
- [X] Install [Nodemon](https://www.npmjs.com/package/nodemon)(Hot Reaload)

## TODOs

## 1. Authentication 
- [X] SignUp 
    - [X] Add User type
    - [X] Add AuthPayload type
    - [X] Add mutation for the User type
    - [X] Add query for the User type
    - [X] Basic Authentication with email and password
    - [X] Validations for user registration input
    - [X] Ensure email is unique
    - [X] Ensure password is hashed
    - [X] JWT-based authentication

 - [X] Login
    - [X] Ensure provided credentials exist
    - [X] Ensure validity of provided credentials
    - [X] Get currently logged in user
    - [ ] Set logged in status

- [ ] Logout
    - [ ] Ensure token is destoryed after log out
    - [ ] Update logged in status

### Stretch Features
- [ ] Verify Email
- [ ] Password Reset


## 2. Clusters
- [ ] Create Cluster
    - [X] Add Cluster type
    - [X] Add resolver for the Cluster type
    - [ ] Add query for the Cluster type
    - [X] Provided the clusterName create a cluster
    - [X] Assign the user creating the cluster as clusterHead
    - [X] Add provisions for cluster positions
    
- [ ] Add Cluster Positions
    - [ ] Add positions to the cluster


## 3. Positions
- [ ]
4. Nominations
5. Votes
