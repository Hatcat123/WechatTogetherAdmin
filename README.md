
微信聚合前端后台管理系统-商业版本


相对于第一版的聚合管理系统，界面更加的干净整洁，采用了全套的layuiadmin前端框架


## 源码打包

当你在 src 目录完成开发后，你可通过 gulp 对 src 源码进行自动化构建，以生成用于线上环境的 dist 目录。并在入口页面中的 layui.config 的 base 参数指向 dist。

在资源包中根目录下看到的 gulpfile.js 是 layuiAdmin 写好的任务脚本，package.json 是任务配置文件，你只需按照以下步骤：

step1：确保你的电脑已经安装好了 Node.js，如果未安装，可去官网下载安装
step2: 命令行安装 gulp：npm install gulp -g
step3：切换到 layuiAdmin 项目根目录（即 gulpfile.js 所在目录），命令行安装任务所依赖的包：npm install
安装完成后，后续只需直接执行命令：gulp 即可完成 src 到 dist 目录的构建

/ 注意node版本为11 gulp版本为3

## 部署

部署目录为dist，应用服务器为nginx

github下载源码

```
git clone https://github.com/Hatcat123/WechatTogetherAdmin.git
```

修改参数部分

- nginx参数
- 目录参数
- 服务接口参数

nginx配置方法

```
server {
      listen       80;
       server_name  www.xixi.com;	
     
    #    server_name  somename  alias  another.alias;
       location / {
           root   C:\layuiAdmin.pro-v1.2.1;
           index  .\start\index.html index.html index.htm;
       }
    }


             location /adminpro/{
              root /home/all/WechatTogetherAdmin;
              index ./start/index.html;
}
```


源码放置位置
```

```















