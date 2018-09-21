卸载最新命令行工具
npm uninstall -g share-tech-cli

安装最新命令行工具
npm install -g share-tech-cli

输出版本号
```
share-tech-cli -v
share-tech-cli --version

```

初始化项目,从仓库下载 主分支默认的
```
share-tech-cli init name

```

初始化项目,从仓库下载，可以跟可选参数，下载脚手架对应分支
```
share-tech-cli init name branchName

```

创建一个页面，（测试性api）
new后加两个参数
```
share-tech-cli new page pageName

```