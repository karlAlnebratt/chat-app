## Test graphql server
Open a browser and go to [http://localhost:4000](http://localhost:4000) <br>
this opens the graphql UI, here you can run queries to graphql server

## Create User
```graphql
mutation CreateUser($username: String) {
  createUser(username: $username) {
    id
    username
    created
  }
}
```

Add following query variables (in the bottom panel of the graphql UI)

```JSON
{ "username": "foo bar" }
```


## Get users
copy following snippet to get all users

```graphql
query GetUser($id: ID) {
  user(id: $id) {
    id
    username
    created
  }
}
```

Add following query variables (in the bottom panel of the graphql UI)

```JSON
{ "id": [ADD USER UUID] }
```


## Get users
copy following snippet to get all users
```graphql
query {
  users {
    id
    username
    created
  }
}
```

### Get message
copy following snippet to get all messages from server
```graphql
query {
  messages  {
    id
    text
    created
    user {
      id
      username
      created
    }
  }
}
```

### Create message
copy following snippet to create a message

```graphql
mutation CreateMessage($text:  String) {
  createMessage (text: $text ) {
    id,
    text
    created
    user {
      id
      username
      created
    }
  }
}
```

Add following query variables (in the bottom panel of the graphql UI)

```JSON
{ "text": "This is a message", "userId": [ADD USER UUID]  }
```
