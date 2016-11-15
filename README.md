# SeuicHybridApp

####安装cordova

`cnpm install -g cordova ionic`

#####配置安卓环境
安卓环境需要java环境，mac自带1.7jdk无法满足安卓6.0的sdk支持，所以要升级1.8.0
安卓sdk环境最简单就是装个Android studio自带sdk管理

`ionic start myApp tabs`

首先构建安卓平台

`$ ionic platform add android`

然后开始进行打包，这个过程第一次非常慢请耐心等待

`$ ionic build android`

在虚拟机中运行

`$ ionic emulate android`

集成命令，集成了build和emulate


`$ ionic run android `

#####配置ios环境
 ios环境需要xcode开虚拟机

`npm install －g cordova //安装成功`

`npm install －g ionic //安装成功`

`npm install －g ios-sim`

`npm install -g ios-deploy`

`ionic info  查看环境信息`

`ionic platform add ios`

`ionic build ios`

`ionic emulate ios`
