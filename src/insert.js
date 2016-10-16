const remark = require("remark")();
const inject = require('mdast-util-inject');
module.exports = function insert(content, insertContent, sectionName, remarkOptions = {}) {
    const target = remark.parse(content);
    const newStuff = remark.parse(insertContent);
    inject(sectionName, target, newStuff);
    return remark.stringify(target, remarkOptions)
};