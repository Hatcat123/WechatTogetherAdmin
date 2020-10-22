
微信聚合前端后台管理系统-商业版本


相对于第一版的聚合管理系统，界面更加的干净整洁，采用了全套的layuiadmin前端框架


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
```


源码放置位置
```

```















