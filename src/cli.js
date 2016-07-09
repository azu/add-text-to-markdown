'use strict';
const meow = require('meow');
const fs = require("fs");
const path = require("path");
import insert from "./insert";

const cli = meow(`
    Usage
      $ echo "text" | add-text-to-markdown path/to/file.md --section "section name"

    Options
      --section  Markdown section name to insert text
      -w --write    re-write to file

    Examples
      $ echo "text" | add-text-to-markdown README.md --section "section"
      🌈 
      # section
      text
`, {
    alias: {
        section: 'rainbow',
        w: 'write'
    }
});
/*
 {
 input: ['unicorns'],
 flags: {rainbow: true},
 ...
 }
 */
const markdownFilePath = path.resolve(process.cwd(), cli.input[0]);
if (!markdownFilePath || !cli.flags.section) {
    cli.showHelp();
}
const markdownContent = fs.readFileSync(markdownFilePath, "utf-8");
process.stdin.pipe((buf) => {
    const insertContent = buf.toString('utf8');
    const rewriteContent = insert(markdownContent, insertContent, cli.flags.section);
    if (cli.flags.write) {
        fs.writeFileSync(markdownFilePath, rewriteContent, "utf-8");
    } else {
        console.log(rewriteContent);
    }
});
