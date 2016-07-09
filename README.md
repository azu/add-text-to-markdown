# add-text-to-markdown [![Build Status](https://travis-ci.org/azu/add-text-to-markdown.svg?branch=master)](https://travis-ci.org/azu/add-text-to-markdown)

Add stdin text to exist markdown file.

## Install

Install with [npm](https://www.npmjs.com/):

    npm install add-text-to-markdown

## Usage

    Usage
      $ echo "text" | add-text-to-markdown path/to/file.md --section "section name"

    Options
      --section  Markdown section name to insert text
      -w --write    re-write to file

    Examples
      $ echo "text" | add-text-to-markdown README.md --section "section"
      
      # section
      text

## Changelog

See [Releases page](https://github.com/azu/add-text-to-markdown/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/add-text-to-markdown/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
