const remark = require("remark")();
const inject = require('mdast-util-inject');
// https://github.com/wooorm/remark/tree/master/packages/remark-stringify
const defaultRemarkStringifyOptions = {
    listItemIndent: 1
};
module.exports = function insert(content, insertContent, sectionName,
    {
        remarkParseOptions = {},
        remarkStringifyOptions = defaultRemarkStringifyOptions
    } = {}) {
    const target = remark.parse(content);
    const newStuff = remark.parse(insertContent, remarkParseOptions);
    inject(sectionName, target, newStuff);
    return remark.stringify(target, remarkStringifyOptions)
};