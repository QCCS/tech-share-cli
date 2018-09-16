#!/usr/bin/env node
console.log("init start")
let package = require('../package.json');
const program = require('commander');
const download = require('download-git-repo');

program.version(package.version, '-v,--version')
    .command('init <name>')
    .action((name) => {
        console.log("load project")
        download('direct:https://github.com/QCCS/tech-share.git#master', name, { clone: true }, function (err) {
            console.log(err ? 'Init Error' : 'Init Success')
        })
    });
program.parse(process.argv);