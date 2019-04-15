# Kura 

## Description
This is a simple platform where users can signup, login, nominate a user, vote for them, and see the results for a specific position. 

## TODOs

## 1. Authentication 
- [X] SignUp 
    - [X] Add User type
    - [X] Add AuthPayload type
    - [X] Add resolver for the User type
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
