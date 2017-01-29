# PostCSS At-Debug

[PostCSS](https://github.com/postcss/postcss) plugin to keep nodes inside the @debug at-rule in debug mode and remove them in release mode.

### Install

`npm install postcss-at-debug --save-dev`

# Usage

## Debug mode
```js
var postcss = require('postcss');
var debug = require('postcss-at-debug');

var fs = require('fs');

var mycss = fs.readFileSync('input.css', 'utf8');

var output = postcss([
		debug({
		    debug: true
		})
	])
	.process(mycss)
	.css;

console.log(output);
```

Input:
```css
@debug {
    .body {
        color: red;
    }

    #root {
        background-color: blue;
    }
}

h1 {
    font-style: italic;
}
```

Output:
```css
#root {
    background-color: blue;
}

.body {
    color: red;
}

h1 {
    font-style: italic;
}
```


## Release mode
```js
// ...

var output = postcss([
		debug({
		    debug: true
		})
	])
	.process(mycss)
	.css;

console.log(output);
```

Input:
```css
@debug {
    .body {
        color: red;
    }

    #root {
        background-color: blue;
    }
}

h1 {
    font-style: italic;
}
```

Output:
```css
h1 {
    font-style: italic;
}
```

# Options

 - `debug`: boolean - flag for debug mode
	  - Default: `'true'`


# Testing

`npm test`
