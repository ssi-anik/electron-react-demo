const path = require('path')
const package_version = require(path.join(__dirname, '../package.json')).version;
const build_number = process.argv.slice(2)[0] || '';

const output = package_version + (build_number ? '-build-' + build_number : '');
console.log(output);
