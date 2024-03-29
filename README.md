# Inverted Index

[![Coverage Status](https://coveralls.io/repos/github/KaiserPhemi/inverted-index/badge.svg?branch=main)](https://coveralls.io/github/KaiserPhemi/inverted-index?branch=main)

## Introduction
Inverted index takes a JSON array of text objects and creates an index from the array. The index allows a user to search for text blocks in the array that contain a specified collection of words.

## Key Features
* Supports Upload of JSON file created following the format displayed below:

```json
[
    {"title": "Voltron",
    "text":"Defender of the Universe."
    },
    {"title": "Anime",
    "text": "Japanese-style animated film or television entertainment."
    }
]
```
* Creates an Index for any selected JSON file.

* Searching of a specific JSON file or all indexed JSON files.


## Local Installation Guide
* Clone the repository
* Install the dependencies using  `npm install`
* Run `node server.js` to start the application.
* The app will start on your local server.
* Run tests with: `npm test`

## Technologies
* Javascript (ES6)
* Node.js
* Gulp
* Jasmine-node


## Contributing

* Fork this repository to your account.
* Clone your repository: git clone git@github.com:your-username/inverted-index.git
* Create your feature branch: git checkout -b new-feature
* Commit your changes: git commit -m "did something"
* Push to the remote branch: git push origin new-feature
* Open a pull request.

