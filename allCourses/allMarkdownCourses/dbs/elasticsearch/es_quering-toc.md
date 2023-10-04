

<!-- toc -->

- [Introduction](#introduction)
  * [URI Quick and Dirty Search](#uri-quick-and-dirty-search)
  * [Query DSL](#query-dsl)
    + [Match Query](#match-query)
    + [Multi-Match Query](#multi-match-query)
      - [Multi Match Query Examples](#multi-match-query-examples)
    + [Range Query](#range-query)
    + [Term & Terms Query](#term--terms-query)
    + [Exists Query](#exists-query)
      - [Non-Existing Fields](#non-existing-fields)
    + [Bool Query](#bool-query)
      - [Bool query should with minimum_should_match](#bool-query-should-with-minimum_should_match)
    + [Aggregations](#aggregations)
      - [Aggregations filters](#aggregations-filters)

<!-- tocstop -->

# Introduction 
Elasticsearch provides a very flexible query API. You can perform searches by simply sending a GET request with a query in the request body. The query can be written in different ways, depending on your needs.

1. **URI Search**: This is a simple way to perform a search by including the query parameters directly in the URI. For example:

```
GET /_search?q=user:john
```

This will return all documents where the user field is "john".

2. **Request Body Search**: This is a more flexible way to perform searches, allowing you to use the Elasticsearch Query DSL (Domain Specific Language). For example:

```
GET /_search
{
    "query": {
        "match": {
            "user": "john"
        }
    }
}
```

This will also return all documents where the user field is "john". However, using the request body allows you to use more complex queries, like boolean queries, range queries, etc.

3. **Using Query DSL**: The Elasticsearch Query DSL is a powerful and flexible language that allows you to specify the exact queries you want to run. It includes a wide range of types of queries, including:

   - **Match Query**: This is a standard query that matches the exact term specified.
   - **Multi-Match Query**: This allows you to run the match query on multiple fields.
   - **Bool Query**: This allows you to combine multiple match queries in a logical manner.
   - **Range Query**: This allows you to find numbers or dates within a certain range.
   - **Term & Terms Query**: These are used to find documents which contain the exact term specified in the field specified.
   - **Exists Query**: This returns documents where the field specified contains any non-null value.

4. **Aggregations**: Elasticsearch also provides a powerful aggregations framework that not only can do one level data analysis like most of the Solr legacy facets but can also do multi-level data analysis. For example, you could use aggregations to group the results by a certain field or fields.

5. **Sorting**: By default, Elasticsearch sorts matching search hits by relevance score, but you can specify your own sort order in the search request.

## URI Quick and Dirty Search

URI Search is a quick and easy way to perform simple searches, but it's not as flexible or powerful as using the Query DSL in the request body. Here are some examples:

1. **Basic Search**: The most basic search is to search for all documents in all indices. This can be done with the following command:

```
GET /_search
```

2. **Search in Specific Index**: You can specify the index in which to search. For example, to search in the "users" index, you would use:

```
GET /users/_search
```

3. **Search for Specific Field**: You can search for documents where a specific field matches a value. For example, to search for users where the "name" field is "john", you would use:

```
GET /users/_search?q=name:john
```

4. **Combine Multiple Fields**: You can search for documents where multiple fields match certain values. For example, to search for users where the "name" field is "john" and the "age" field is "30", you would use:

```
GET /users/_search?q=name:john AND age:30
```

5. **Wildcard Searches**: You can use wildcard characters in your searches. For example, to search for users where the "name" field starts with "jo", you would use:

```
GET /users/_search?q=name:jo*
```

6. **Fuzzy Searches**: You can perform fuzzy searches, which allow for typos and misspellings. For example, to search for users where the "name" field is approximately "john", you would use:

```
GET /users/_search?q=name:john~1
```

 URI Search:

7. **Exists**: This keyword is used to find documents in which a specified field is present. The syntax is `_exists_:FIELDNAME`. For example, to find all documents in the "users" index where the "email" field exists, you would use:

```
GET /users/_search?q=_exists_:email
```

8. **Missing**: This keyword is used to find documents in which a specified field is missing. The syntax is `_missing_:FIELDNAME`. For example, to find all documents in the "users" index where the "email" field is missing, you would use:

```
GET /users/_search?q=_missing_:email
```

9. **Wildcard**: This keyword is used to match documents where the field value matches a wildcard pattern. The syntax is `FIELDNAME:VALUE*`. For example, to find all documents in the "users" index where the "name" field starts with "jo", you would use:

```
GET /users/_search?q=name:jo*
```

10. **Range**: This keyword is used to match documents where the field value is within a certain range. The syntax is `FIELDNAME:[START TO END]`. For example, to find all documents in the "users" index where the "age" field is between 20 and 30, you would use:

```
GET /users/_search?q=age:[20 TO 30]
```

11. **Boolean Operators**: You can use boolean operators (`AND`, `OR`, `NOT`) to combine multiple conditions. For example, to find all documents in the "users" index where the "name" field is "john" and the "age" field is over 20, you would use:

```
GET /users/_search?q=name:john AND age:>20
```

## Query DSL

The Elasticsearch Query DSL is a powerful and flexible language that allows you to specify the exact queries you want to run.

### Match Query

Sure, let's dive deeper into the Match Query in Elasticsearch's Query DSL.

The Match Query is one of the most basic and commonly used queries in Elasticsearch and it's used to search for data. It works by matching the exact terms specified in the query.

Here's a basic example:

```json
GET /_search
{
    "query": {
        "match" : {
            "message" : "this is a test"
        }
    }
}
```

In this example, Elasticsearch will return all documents in the index where the message field contains the words "this", "is", "a", "test".

Now, let's look at some of the parameters you can use with the Match Query:

1. **operator**: The operator can be `and` or `or`. It defines the boolean logic for the query. The default is `or`. For example:

```json
GET /_search
{
    "query": {
        "match" : {
            "message" : {
                "query" : "this is a test",
                "operator" : "and"
            }
        }
    }
}
```

In this example, Elasticsearch will return all documents where the message field contains all the words "this", "is", "a", "test".

2. **minimum_should_match**: This parameter specifies the minimum number of terms that must match. For example:

```json
GET /_search
{
    "query": {
        "match" : {
            "message" : {
                "query" : "this is a test",
                "minimum_should_match" : "75%"
            }
        }
    }
}
```

In this example, Elasticsearch will return all documents where at least three out of the four words ("this", "is", "a", "test") are present in the message field.

3. **fuzziness**: This parameter is used for fuzzy matching. It allows you to specify how many letters in your search terms can be wrong and still be considered a match. For example:

```json
GET /_search
{
    "query": {
        "match" : {
            "message" : {
                "query" : "this is a test",
                "fuzziness" : "AUTO"
            }
        }
    }
}
```

In this example, Elasticsearch will return all documents where the message field contains words that are similar to "this", "is", "a", "test".

4. **zero_terms_query**: This parameter can be `none` or `all`. It defines what should happen if the query string is empty. The default is `none`. For example:

```json
GET /_search
{
    "query": {
        "match" : {
            "message" : {
                "query" : "",
                "zero_terms_query" : "all"
            }
        }
    }
}
```

In this example, Elasticsearch will return all documents if the query string is empty.

### Multi-Match Query

Sure, let's dive deeper into the Multi-Match Query in Elasticsearch.

The Multi-Match Query is a convenient way to execute a Match Query over multiple fields. It's a great tool when you want to search for a term in multiple fields, which is a common requirement in many applications.

Here is a basic example of a Multi-Match Query:

```json
GET /_search
{
  "query": {
    "multi_match" : {
      "query":    "quick brown fox", 
      "fields": [ "field1", "field2" ] 
    }
  }
}
```

In this example, Elasticsearch will search for the phrase "quick brown fox" in both "field1" and "field2".

Now, let's explore the parameters you can use in a Multi-Match Query:

1. **query**: This is the query string — what you're searching for.

2. **fields**: These are the fields that Elasticsearch will search. You can specify multiple fields as an array.

3. **type**: This is the type of Multi-Match Query. The options are: "best_fields", "most_fields", "cross_fields", "phrase", and "phrase_prefix". The default is "best_fields".

   - **best_fields**: Finds the best match in any of the fields. This is useful when you're searching for something that should be in one field or another.
   - **most_fields**: Finds documents which match any field, but uses the _score from the best field. This is useful when you're searching for something that might be in several fields.
   - **cross_fields**: Treats fields with the same analyzer as though they were one big field. This is useful when you're searching for something that might be spread across different fields.
   - **phrase** and **phrase_prefix**: Like a match_phrase or match_phrase_prefix query, but works across multiple fields.

4. **tie_breaker**: This is used when the "best_fields" type is used. If there are multiple fields with the same highest score, the scores from the other fields will be used as a tie breaker.

5. **operator**: The operator to be used in the query. Can be "and" or "or". Defaults to "or".

6. **minimum_should_match**: The minimum number of optional clauses that must match for a document to be considered relevant.

7. **analyzer**: The analyzer to be used for the query string.

8. **boost**: Sets the boost value of the query. Documents matching this query will (in addition to the normal weightings) have their score multiplied by the boost value.

#### Multi Match Query Examples

Sure, let's create some examples using the most common parameters in a Multi-Match Query.

1. **Basic Multi-Match Query**:

```json
GET /_search
{
  "query": {
    "multi_match" : {
      "query":    "quick brown fox", 
      "fields": [ "title", "body" ] 
    }
  }
}
```
In this example, Elasticsearch will search for the phrase "quick brown fox" in both the "title" and "body" fields.

2. **Multi-Match Query with Type**:

```json
GET /_search
{
  "query": {
    "multi_match" : {
      "query":    "quick brown fox", 
      "fields": [ "title", "body" ],
      "type": "most_fields"
    }
  }
}
```
In this example, Elasticsearch will search for the phrase "quick brown fox" in both the "title" and "body" fields. It will find documents which match any field, but use the _score from the best field.

3. **Multi-Match Query with Operator**:

```json
GET /_search
{
  "query": {
    "multi_match" : {
      "query":    "quick brown fox", 
      "fields": [ "title", "body" ],
      "operator": "and"
    }
  }
}
```
In this example, Elasticsearch will search for the phrase "quick brown fox" in both the "title" and "body" fields. It will only return documents where both "quick", "brown" and "fox" are present in either of the fields.

4. **Multi-Match Query with Minimum Should Match**:

```json
GET /_search
{
  "query": {
    "multi_match" : {
      "query":    "quick brown fox", 
      "fields": [ "title", "body" ],
      "minimum_should_match": "50%"
    }
  }
}
```
In this example, Elasticsearch will search for the phrase "quick brown fox" in both the "title" and "body" fields. It will only return documents where at least 50% of the terms ("quick", "brown", "fox") are present in either of the fields.

### Range Query
Sure, let's dive into the Range Query in Elasticsearch's Query DSL.

The Range Query can be used to search for documents where a field's value falls within a specified range. It can be used with both numeric and date fields, but also with certain keyword fields.

Here's a basic example of a Range Query:

```json
GET /_search
{
    "query": {
        "range" : {
            "age" : {
                "gte" : 10,
                "lte" : 20,
                "boost" : 2.0
            }
        }
    }
}
```

In this example, the query will match all documents where the "age" field's value is between 10 and 20 (inclusive). The "boost" parameter (optional) tells Elasticsearch to weight matches in this range more heavily in the results.

Here are the parameters you can use in a Range Query:

- `gte`: Greater-than or equal to
- `gt`: Greater than
- `lte`: Less-than or equal to
- `lt`: Less than
- `boost`: Boost value for matches within the range
- `format`: Date format to be used to parse date values in the query
- `relation`: Whether the query should work on the indexed shape (`WITHIN`, `CONTAINS`, `DISJOINT`)
- `time_zone`: Used to convert date values in the query to UTC

You can also use the `range` query with date fields. For example:

```json
GET /_search
{
    "query": {
        "range" : {
            "timestamp" : {
                "gte" : "now-1d/d",
                "lt" :  "now/d"
            }
        }
    }
}
```

In this example, the query will match all documents where the "timestamp" field's value is within the last day.

The `range` query can also be combined with other queries in a `bool` query for more complex search scenarios.

If you need multiple ranges, you can use the the `bool` query with multiple `range` queries. For example:

```json
GET /_search
{
    "query": {
        "bool": {
            "must": [
                {
                    "range": {
                        "age": {
                            "gte": 10,
                            "lte": 20
                        }
                    }
                },
                {
                    "range": {
                        "timestamp": {
                            "gte": "now-1d/d",
                            "lt": "now/d"
                        }
                    }
                }
            ]
        }
    }
}
```

### Term & Terms Query

The term query is used to search for exact values, whether they be numbers, dates, or strings. It's often used for filtering (finding all people aged 20 in a database, for example). Here's a basic example:

```json
GET /_search
{
    "query": {
        "term" : { "user" : "Kimchy" } 
    }
}
```

In this example, Elasticsearch will return all documents in which the exact term "Kimchy" appears in the user field.

**Terms Query**

The terms query is similar to the term query but allows you to specify multiple values to match. If the field contains any of the specified values, the document matches. Here's an example:

```json
GET /_search
{
    "query": {
        "terms" : { "user" : ["Kimchy", "Elasticsearch"]}
    }
}
```

In this example, Elasticsearch will return all documents in which the exact term "Kimchy" or "Elasticsearch" appears in the user field.

**Terms Set Query**

The terms set query is a more advanced form of the terms query that allows you to specify a minimum matching set. If the field contains a certain minimum number of specified values, the document matches. Here's an example:

```json
GET /_search
{
    "query": {
        "terms_set" : {
            "user" : {
                "terms" : ["Kimchy", "Elasticsearch"],
                "minimum_should_match_field" : "minimum_matches"
            }
        }
    }
}
```

In this example, the field "minimum_matches" in each document is used to determine how many terms must match.

**Boosting**

You can also boost Term & Terms queries to make them more or less important when calculating the relevance score. For example:

```json
GET /_search
{
    "query": {
        "term" : { "user" : { "value" : "Kimchy", "boost" : 1.5 } }
    }
}
```

In this example, the term "Kimchy" is given 1.5 times the normal weight in the relevance score calculation.

**Case Sensitivity**

By default, the term and terms queries are case sensitive. This is because Elasticsearch is designed to be schema-less, meaning that string fields can be either text (full-text search) or keyword (exact value search) types. If you want to perform a case-insensitive search, you should use a text field and a match query instead.


### Exists Query
Sure, let's dive deeper into the Exists Query in Elasticsearch's Query DSL.

The `exists` query in Elasticsearch is used to check if a field in a document exists or not. It returns documents that contain the specified field, where the field has any non-null value.

Here is a basic example of an `exists` query:

```json
GET /_search
{
  "query": {
    "exists": {
      "field": "user"
    }
  }
}
```

In this example, the `exists` query will return all documents where the `user` field exists.

The `exists` query can be very useful when you want to find documents where a field is present, regardless of its value. It can be used in combination with other queries as part of a `bool` query.

Here is an example of using the `exists` query as part of a `bool` query:

```json
GET /_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "title": "elasticsearch" }},
        { "exists": { "field": "user" }}
      ]
    }
  }
}
```

In this example, the `bool` query will return all documents where the `title` field matches "elasticsearch" and the `user` field exists.

The `exists` query only has one argument, which is the `field` argument. The `field` argument specifies the field that you want to check for existence.

It's important to note that the `exists` query works with fields that are either `null` or `[]` (an empty array). These fields will be ignored because they are considered as non-existing fields. If you want to consider these fields as existing, you need to store a value in them, even if it's an empty string.

#### Non-Existing Fields
In Elasticsearch, a field is considered as "existing" if it contains any non-null value. This includes:

1. **Non-empty fields**: Any field that contains a value, whether it's a string, number, date, boolean, or another data type, is considered as existing.

2. **Fields with empty strings or zeros**: Even if a field contains an empty string ("") or zero (0), it's still considered as existing because these are valid non-null values.

3. **Fields with non-empty arrays**: If a field contains an array with at least one element, even if the element is an empty string or zero, the field is considered as existing.

On the other hand, the following are not considered as existing:

1. **Fields with null values**: If a field has a null value, it's not considered as existing.

2. **Fields with empty arrays**: If a field contains an empty array ([]), it's not considered as existing.

3. **Missing fields**: If a field is not present in the document at all, it's not considered as existing.

When you use the `exists` query, Elasticsearch will return all documents where the specified field is considered as existing according to these rules.

### Bool Query

The Bool Query is used to combine multiple query clauses in a logical manner. It can be used to build complex queries by combining multiple simple queries. 

The Bool Query accepts the following parameters:

1. **must**: The query clauses in the must parameter must match for the document to be included in the results. The score of the query will be affected by how well these clauses match.

2. **filter**: The query clauses in the filter parameter must match for the document to be included in the results. However, unlike must, they do not affect the score. This is useful for filtering results without affecting how they are scored and sorted.

3. **should**: The query clauses in the should parameter are optional, but at least one of them must match for the document to be included in the results. If more than one matches, the score will be higher.

4. **must_not**: The query clauses in the must_not parameter must not match for the document to be included in the results. They do not affect the score.

Here is an example of a Bool Query:

```json
GET /_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "title":   "Search"        }},
        { "match": { "content": "Elasticsearch" }}
      ],
      "filter": [
        { "term":  { "status": "published" }},
        { "range": { "publish_date": { "gte": "2015-01-01" }}},
        { "exists": { "field": "author" }}
      ],
      "must_not": [
        { "range": { "likes": { "gte": 1000 }}},
        { "exists": { "field": "dislikes" }}
      ],
      "should": [
        { "term": { "tags": "tech" }},
        { 
          "bool": {
            "must": [
              { "term": { "category": "tutorial" }},
              { "term": { "language": "english" }}
            ]
          }
        }
      ]
    }
  }
}
```

In this expanded example:

- The `must` parameter is used to include only documents that have "Search" in the title and "Elasticsearch" in the content.
- The `filter` parameter is used to further filter these results to include only those that have a status of "published", a publish_date later than "2015-01-01", and an author field that is not null (Exists Query).
- The `must_not` parameter excludes any documents that have more than 1000 likes and a dislikes field that is not null.
- The `should` parameter increases the score of documents that have "tech" in the tags, but it does not exclude documents that do not have "tech" in the tags. Additionally, it includes a nested Bool Query that increases the score of documents that are in the "tutorial" category and are in "english" language.

This example demonstrates the flexibility of the Bool Query in Elasticsearch's Query DSL. You can combine multiple types of queries and even nest Bool Queries within each other to build complex queries that match your exact needs.

#### Bool query should with minimum_should_match

If you want to ensure that at least one condition is true, you can use the `should` clause in the `bool` query. By default, the `should` clause is optional, but if you want to make it mandatory that at least one `should` clause is met, you can use the `minimum_should_match` parameter.

Here's an example:

```json
GET /_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "title":   "Search"        }},
        { "match": { "content": "Elasticsearch" }}
      ],
      "filter": [
        { "term":  { "status": "published" }},
        { "range": { "publish_date": { "gte": "2015-01-01" }}},
        { "exists": { "field": "author" }}
      ],
      "must_not": [
        { "range": { "likes": { "gte": 1000 }}},
        { "exists": { "field": "dislikes" }}
      ],
      "should": [
        { "term": { "tags": "tech" }},
        { "term": { "tags": "science" }},
        { "term": { "tags": "art" }}
      ],
      "minimum_should_match": 1
    }
  }
}
```

In this example, the `should` clause contains three conditions. The `minimum_should_match` parameter is set to 1, which means at least one of these conditions must be true for a document to match.

If all conditions are false, the document will not match and will be skipped. This is because the `minimum_should_match` parameter ensures that at least one `should` clause is true. If none of them are true, the document does not match the query.

### Aggregations
Aggregations in Elasticsearch allow you to dive into your data and return summarized, analytics information. They are incredibly flexible and provide a wide range of possibilities.

Aggregations can be categorized into two types: 

1. **Bucketing**: These aggregations create buckets of documents. Each bucket corresponds to a criterion (depending on the aggregation type) which determines whether or not a document in the current context "falls" into it. Examples include `terms`, `range`, `date_histogram`, `histogram`, etc.

2. **Metric**: These aggregations perform metrics computations on the documents that are part of the context. Examples include `avg`, `sum`, `min`, `max`, `stats`, etc.

Here are some examples of what you can do with aggregations:

**Terms Aggregation**

This is a multi-bucket value source based aggregation where buckets are created based on unique values.

```json
GET /_search
{
  "aggs": {
    "users": {
      "terms": { "field": "user.keyword" }
    }
  }
}
```

This will return the count of unique users.

**Range Aggregation**

This is a multi-bucket value source based aggregation that enables the user to define a set of ranges - each representing a bucket.

```json
GET /_search
{
  "aggs": {
    "age_ranges": {
      "range": {
        "field": "age",
        "ranges": [
          { "to": 20 },
          { "from": 20, "to": 30 },
          { "from": 30 }
        ]
      }
    }
  }
}
```

This will return the count of users in different age ranges.

**Date Histogram Aggregation**

A multi-bucket aggregation similar to the histogram except it can only be applied on date values.

```json
GET /_search
{
  "aggs": {
    "posts_over_time": {
      "date_histogram": {
        "field": "post_date",
        "calendar_interval": "month"
      }
    }
  }
}
```

This will return the count of posts over time, bucketed by month.

**Average Aggregation**

A single-value metrics aggregation that computes the average of numeric values that are extracted from the aggregated documents.

```json
GET /_search
{
  "aggs": {
    "average_age": {
      "avg": {
        "field": "age"
      }
    }
  }
}
```

This will return the average age of all users.

You can also nest aggregations to provide more complex insights. For example, you could first use a terms aggregation to group by user, and then within each user bucket, use a date histogram to see how many posts each user made each month.

Remember, the field you want to aggregate on should be of the correct data type and it should be not analyzed (for text fields, it should be keyword type).

#### Aggregations filters

In Elasticsearch, you can use the `filter` and `filters` aggregations to define conditions within your aggregations. 

1. **Filter Aggregation**: The `filter` aggregation is a single bucket aggregation that creates a bucket of all documents that match a specified filter. The `filter` aggregation effectively narrows down the set of documents that we focus on in the aggregation.

Here's an example where we're aggregating on a specific condition, where the `age` is greater than 30:

```json
GET /_search
{
  "aggs": {
    "older_than_30": {
      "filter": { "range": { "age": { "gt": 30 } } },
      "aggs": {
        "average_balance": {
          "avg": {
            "field": "balance"
          }
        }
      }
    }
  }
}
```

In this example, we first filter the documents where the `age` is greater than 30, and then within that subset of documents, we calculate the average `balance`.

2. **Filters Aggregation**: The `filters` aggregation provides the same functionality as the `filter` aggregation but allows you to specify multiple filters. Each filter gets its own bucket, so the `filters` aggregation is a multi-bucket aggregation.

Here's an example where we're creating different buckets for different age ranges:

```json
GET /_search
{
  "aggs": {
    "age_ranges": {
      "filters": {
        "filters": {
          "young":   { "range": { "age": { "lt": 30 } } },
          "middle": { "range": { "age": { "gte": 30, "lt": 50 } } },
          "old":     { "range": { "age": { "gte": 50 } } }
        }
      },
      "aggs": {
        "average_balance": {
          "avg": {
            "field": "balance"
          }
        }
      }
    }
  }
}
```

In this example, we first create three buckets: "young" for ages less than 30, "middle" for ages between 30 and 50, and "old" for ages greater than or equal to 50. Then, within each of these buckets, we calculate the average `balance`.

These are just a few examples of how you can use conditions within your aggregations in Elasticsearch. The possibilities are vast and can be tailored to your specific needs.

