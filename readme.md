# Deprecated

Deprecated as Bower is practically unmaintained. Check out [`npm-name-cli`](https://github.com/sindresorhus/npm-name-cli) instead.

---

# bower-name-cli [![Build Status](https://travis-ci.org/sindresorhus/bower-name-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/bower-name-cli)

> Check whether a package name is available on bower


## Install

```
$ npm install --global bower-name-cli
```


## Usage

```
$ bower-name --help

  Usage
    $ bower-name <name>

  Examples
    $ bower-name multiline
    ✖ Unavailable
    $ bower-name unicorn-cake
    ✔ Available

  Exits with code 0 when the name is available or 2 when taken
```


## Related

- [bower-name](https://github.com/sindresorhus/bower-name) - API for this module


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
