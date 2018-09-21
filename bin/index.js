#!/usr/bin/env node
console.log("init start")
var fs = require("fs");

let package = require('../package.json');
const program = require('commander');
const download = require('download-git-repo');
// const writePage = require('.....');

program.version(package.version, '-v,--version')
    .command('init <name> [branch]')
    .action((name, branch) => {
        console.log(name)
        console.log(branch)
        console.log("load project ...")
        if (branch) {
            download('direct:https://github.com/QCCS/tech-share.git#' + branch, name, {clone: true}, function (err) {
                console.log(err ? 'Init Error' : 'Init Success')
            })
        } else {
            download('direct:https://github.com/QCCS/tech-share.git#master', name, {clone: true}, function (err) {
                console.log(err ? 'Init Error' : 'Init Success')
            })
        }
    });

program.version(package.version)
    .command('new <name> [pageName]')
    .action((name, pageName) => {
        if(name != "page" || !pageName){
            console.log("if you want to create page,type--- share-tech-cli new page pageName")
            return;
        }
        writePage(pageName);
    });

program.parse(process.argv);


//创建目录
function writePage(pageName) {
    //获取项目路径
    let cwd = process.cwd();
    //页面内容
    let txt = "<html>";
    let path = cwd + "/src/js/pages/" + pageName;
    let pathName = path + "/" + pageName + ".html";
    //生成的页面路径
    fs.mkdir(path, function (err) {
        if (err) {
            console.log(path)
            console.log('path create error！');
            return false;
        }
        console.log('path create success！');
        //生成的页面
        fs.writeFile(pathName, txt, function (err) {
            if (err) {
                console.log(pathName)
                console.log("generate a page err");
                return false;
            }
            console.log("generate a page success");
        })
    });
}

