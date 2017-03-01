# <%-projectName%>

[![Build Status](https://travis-ci.org/react-melon/<%-projectName%>.svg?branch=master)](https://travis-ci.org/react-melon/<%-projectName%>)
[![Coverage Status](https://coveralls.io/repos/github/react-melon/<%-projectName%>/badge.svg?branch=master)](https://coveralls.io/github/react-melon/<%-projectName%>?branch=master)

## Usage

```js
import React from 'react';
import <%-componentName%> from '<%-projectName%>';
import ReactDOM from 'react-dom';

import './index.styl';

ReactDOM.render(
    <<%-componentName%> />,
    document.getElementById('app')
);
```

## Setup

### webpack

1. please check out [this](https://github.com/react-melon/melon#如何在-webpack-中使用-melon) first.

2. `npm install -S <%-projectName%>`

### bower

1. `bower install -S <%-projectName%>`
2. config your `requirejs` / `esl`

    ```js
    require.config({
        paths: {
            '<%-projectName%>': 'bower_components/<%-projectName%>/lib/<%-componentName%>'
        }
    });
    ```

## API Document

check [this](https://doc.esdoc.org/github.com/react-melon/<%-projectName%>/) out

## Run the example

```sh
git clone https://github.com/react-melon/<%-projectName%>.git
cd <%-projectName%>
npm install
npm start
open http://localhost:8080/example
```
