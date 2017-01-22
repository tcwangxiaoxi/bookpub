$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("repositories.feature");
formatter.feature({
  "line": 2,
  "name": "Finding a book by ISBN",
  "description": "",
  "id": "finding-a-book-by-isbn",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@txn"
    }
  ]
});
formatter.before({
  "duration": 4102318,
  "status": "passed"
});
formatter.before({
  "duration": 34901678,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Preload DB Mock Data",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "cucumber/packt-books fixture is loaded",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber/packt-books",
      "offset": 0
    }
  ],
  "location": "RepositoryStepdefs.data_fixture_is_loaded(String)"
});
formatter.result({
  "duration": 210114314,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Load one book",
  "description": "",
  "id": "finding-a-book-by-isbn;load-one-book",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "2 books available in the catalogue",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "searching for book by isbn 978-1-78398-478-7",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "book title will be Orchestrating Docker",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 0
    }
  ],
  "location": "RepositoryStepdefs.books_available_in_the_catalogue(int)"
});
formatter.result({
  "duration": 32395364,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "978-1-78398-478-7",
      "offset": 27
    }
  ],
  "location": "RepositoryStepdefs.searching_for_book_by_isbn(String)"
});
formatter.result({
  "duration": 169080082,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orchestrating Docker",
      "offset": 19
    }
  ],
  "location": "RepositoryStepdefs.book_title_will_be(String)"
});
formatter.result({
  "duration": 224617,
  "status": "passed"
});
formatter.after({
  "duration": 6114001,
  "status": "passed"
});
formatter.uri("repositories_c.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: zh-CN"
    }
  ],
  "line": 3,
  "name": "通过isbn号找到一本书",
  "description": "",
  "id": "通过isbn号找到一本书",
  "keyword": "功能",
  "tags": [
    {
      "line": 2,
      "name": "@txn"
    }
  ]
});
formatter.before({
  "duration": 4007971,
  "status": "passed"
});
formatter.before({
  "duration": 7939754,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "预加载书的信息",
  "description": "",
  "type": "background",
  "keyword": "背景"
});
formatter.step({
  "line": 5,
  "name": "\"cucumber/packt-books\"路径将作为书的原始信息被加载",
  "keyword": "假设"
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber/packt-books",
      "offset": 1
    }
  ],
  "location": "RepositoryStepdefsCN.路径将作为书的原始信息被加载(String)"
});
formatter.result({
  "duration": 32618401,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "加载一本书",
  "description": "",
  "id": "通过isbn号找到一本书;加载一本书",
  "type": "scenario",
  "keyword": "场景"
});
formatter.step({
  "line": 7,
  "name": "确定数据中有2本书可用",
  "keyword": "假设"
});
formatter.step({
  "line": 8,
  "name": "通过isbn号为\"978-1-78398-478-7\"搜索时",
  "keyword": "当"
});
formatter.step({
  "line": 9,
  "name": "书名为\"Orchestrating Docker\"的将被找到。",
  "keyword": "那么"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 6
    }
  ],
  "location": "RepositoryStepdefsCN.确定数据中有书可用(int)"
});
formatter.result({
  "duration": 8281613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "978-1-78398-478-7",
      "offset": 9
    }
  ],
  "location": "RepositoryStepdefsCN.通过isbn号搜索(String)"
});
formatter.result({
  "duration": 8972833,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orchestrating Docker",
      "offset": 4
    }
  ],
  "location": "RepositoryStepdefsCN.书将被找到(String)"
});
formatter.result({
  "duration": 80531,
  "status": "passed"
});
formatter.after({
  "duration": 3084239,
  "status": "passed"
});
formatter.uri("restful.feature");
formatter.feature({
  "line": 2,
  "name": "Finding a book via REST API",
  "description": "",
  "id": "finding-a-book-via-rest-api",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@txn"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Using RESTful API to lookup books by ISBN",
  "description": "",
  "id": "finding-a-book-via-rest-api;using-restful-api-to-lookup-books-by-isbn",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "catalogue with books",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "requesting url /books/\u003cisbn\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "status code will be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "response content contains \u003ctitle\u003e",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "finding-a-book-via-rest-api;using-restful-api-to-lookup-books-by-isbn;",
  "rows": [
    {
      "cells": [
        "isbn",
        "title"
      ],
      "line": 11,
      "id": "finding-a-book-via-rest-api;using-restful-api-to-lookup-books-by-isbn;;1"
    },
    {
      "cells": [
        "978-1-78398-478-7",
        "Orchestrating Docker"
      ],
      "line": 12,
      "id": "finding-a-book-via-rest-api;using-restful-api-to-lookup-books-by-isbn;;2"
    },
    {
      "cells": [
        "978-1-78528-415-1",
        "Spring Boot Recipes"
      ],
      "line": 13,
      "id": "finding-a-book-via-rest-api;using-restful-api-to-lookup-books-by-isbn;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2295909,
  "status": "passed"
});
formatter.before({
  "duration": 6901937,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "cucumber/packt-books fixture is loaded",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber/packt-books",
      "offset": 0
    }
  ],
  "location": "RepositoryStepdefs.data_fixture_is_loaded(String)"
});
formatter.result({
  "duration": 8491230,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Using RESTful API to lookup books by ISBN",
  "description": "",
  "id": "finding-a-book-via-rest-api;using-restful-api-to-lookup-books-by-isbn;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@txn"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "catalogue with books",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "requesting url /books/978-1-78398-478-7",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "status code will be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "response content contains Orchestrating Docker",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RestfulStepdefs.catalogue_with_books()"
});
formatter.result({
  "duration": 33302121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/books/978-1-78398-478-7",
      "offset": 15
    }
  ],
  "location": "RestfulStepdefs.requesting_url(String)"
});
formatter.result({
  "duration": 285927061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "RestfulStepdefs.status_code_will_be(int)"
});
formatter.result({
  "duration": 4105081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orchestrating Docker",
      "offset": 26
    }
  ],
  "location": "RestfulStepdefs.response_content_contains(String)"
});
formatter.result({
  "duration": 11633892,
  "status": "passed"
});
formatter.after({
  "duration": 5089606,
  "status": "passed"
});
formatter.before({
  "duration": 2157349,
  "status": "passed"
});
formatter.before({
  "duration": 7319195,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "cucumber/packt-books fixture is loaded",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "cucumber/packt-books",
      "offset": 0
    }
  ],
  "location": "RepositoryStepdefs.data_fixture_is_loaded(String)"
});
formatter.result({
  "duration": 7341302,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Using RESTful API to lookup books by ISBN",
  "description": "",
  "id": "finding-a-book-via-rest-api;using-restful-api-to-lookup-books-by-isbn;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@txn"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "catalogue with books",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "requesting url /books/978-1-78528-415-1",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "status code will be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "response content contains Spring Boot Recipes",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RestfulStepdefs.catalogue_with_books()"
});
formatter.result({
  "duration": 5565289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/books/978-1-78528-415-1",
      "offset": 15
    }
  ],
  "location": "RestfulStepdefs.requesting_url(String)"
});
formatter.result({
  "duration": 27777098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "RestfulStepdefs.status_code_will_be(int)"
});
formatter.result({
  "duration": 101452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Spring Boot Recipes",
      "offset": 26
    }
  ],
  "location": "RestfulStepdefs.response_content_contains(String)"
});
formatter.result({
  "duration": 103031,
  "status": "passed"
});
formatter.after({
  "duration": 4277590,
  "status": "passed"
});
});