# Firebase Setup For House Marketplace

1. Create Firebase Project
2. Create "web" app within firebase to get config values"
3. Install firebase in your project "npm i firebase
4. Create a config file in your project
5. Add authentication for email/password and Google
6. Create a user from Firebase
7. Enable Firestore
8. Add [rules](https://gist.github.com/bradtraversy/6d7de7e877d169a6aa4e61140d25767f) for firestore
9. Enable storage
10. Add [rules](https://gist.github.com/bradtraversy/6d7de7e877d169a6aa4e61140d25767f) for storage
11. Create 3 composite indexes for advanced querying

#### First

- Collection: Listing
- Query Scope: Collection

| Field     |            |
| --------- | ---------- |
| type      | Ascending  |
| timestamp | Descending |

#### Second

- Collection: Listing
- Query Scope: Collection

| Field     |            |
| --------- | ---------- |
| userRef   | Ascending  |
| timestamp | Descending |

#### Third

- Collection: Listing
- Query Scope: Collection

| Field     |            |
| --------- | ---------- |
| offer     | Ascending  |
| timestamp | Descending |

12. Create dummy listing with sample data

| Field           | Value                                                                                                                                                                                                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name            | Beautiful Stratford Condo                                                                                                                                                                                                                                                                                                         |
| type            | rent                                                                                                                                                                                                                                                                                                                              |
| userRef         | ID OF A USER                                                                                                                                                                                                                                                                                                                      |
| bedrooms        | 2                                                                                                                                                                                                                                                                                                                                 |
| bathrooms       | 2                                                                                                                                                                                                                                                                                                                                 |
| parking         | true                                                                                                                                                                                                                                                                                                                              |
| furnished       | false                                                                                                                                                                                                                                                                                                                             |
| offer           | true                                                                                                                                                                                                                                                                                                                              |
| regularPrice    | 2500                                                                                                                                                                                                                                                                                                                              |
| discountedPrice | 2000                                                                                                                                                                                                                                                                                                                              |
| location        | 8601 West Peachtree St Stratford, CT 06614                                                                                                                                                                                                                                                                                        |
| geolocation     | **lat**: 41.205590 **lng**: -73.150530                                                                                                                                                                                                                                                                                            |
| imageUrls       | ['https://images.unsplash.com/photo-1586105251261-72a756497a11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1258&q=80', 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80'] |
