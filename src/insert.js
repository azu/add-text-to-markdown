const remark = require("remark")();
const inject = require('mdast-util-inject');
export default function insert(content, insertContent, sectionName) {
    const target = remark.parse(content);
    const newStuff = remark.parse(insertContent);
    inject(sectionName, target, newStuff);
    return remark.stringify(target)
}