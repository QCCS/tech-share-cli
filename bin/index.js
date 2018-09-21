#!/usr/bin/env node
console.log("init start")
var fs = require("fs");
const path = require('path');

let package = require('../package.json');
const program = require('commander');
const download = require('download-git-repo');
// const writePage = require('.....');


program.version(package.version, '-v,--version')
    .command('init <name> [branch]')
    .action((name, branch) => {
        console.log(name)
        console.log(branch)
        console.log("load project")
        if (branch) {
            download('direct:https://github.com/QCCS/tech-share.git#' + branch, name, {clone: true}, function (err) {
                console.log(err ? 'Init Error' : 'Init Success')
            })
        } else {
            download('direct:https://github.com/QCCS/tech-share.git#master', name, {clone: true}, function (err) {
                console.log(err ? 'Init Error' : 'Init Success')
            })
        }

    })
    .option('new', 'generate a page')
    .parse(process.argv);


if (program.new) {
    // process.argv获取输入内容
    writePage(process.argv);
}


function writePage(args) {
    //页面文件夹与页面名字，相同
    let pageName = args[3];
    //页面内容
    let txt = "<html>";
    let path = __dirname + "/src/js/pages/" + pageName;
    let pathName = path + "/" + pageName + ".html";
    //生成的页面路径
    fs.mkdir(path, function (err) {
        if (err) {
            console.log('file create error！');
            return false;
        }
        console.log('file create success！');
        //生成的页面
        fs.writeFile(pathName, txt, function (err) {
            if (err) {
                console.log("generate a page err");
                return false;
            }
            console.log("generate a page success");
        })
    });
}

