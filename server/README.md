## Test graphql server
Open a browser and go to [http://localhost:4000](http://localhost:4000) <br>
this opens the graphql UI, here you can run queries to graphql server

### Get message
past following snippet to get all messages from server
```graphql
{
  messages  {
    id
    text
    created
  }
}
```
