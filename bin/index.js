#!/usr/bin/env node
console.log("init start")
let package = require('../package.json');
const program = require('commander');
const download = require('download-git-repo');

program.version(package.version, '-v,--version')
    .command('init <name> [branch]')
    .action((name,branch) => {
        console.log(name)
        console.log(branch)
        console.log("load project")
        if(branch){
            download('direct:https://github.com/QCCS/tech-share.git#'+branch, name, { clone: true }, function (err) {
                console.log(err ? 'Init Error' : 'Init Success')
            })
        }else {
            download('direct:https://github.com/QCCS/tech-share.git#master', name, { clone: true }, function (err) {
                console.log(err ? 'Init Error' : 'Init Success')
            })
        }

    });
program.parse(process.argv);