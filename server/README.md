## Test graphql server
Open a browser and go to [http://localhost:4000](http://localhost:4000) <br>
this opens the graphql UI, here you can run queries to graphql server

### Get message
copy following snippet to get all messages from server
```graphql
query {
  messages  {
    id
    text
    created
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
  }
}
```

Add following query variables (in the bottom panel of the graphql UI)

```JSON
{ "text": "This is a fourth message" }
```
