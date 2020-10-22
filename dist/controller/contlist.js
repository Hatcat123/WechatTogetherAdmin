/** layuiAdmin.pro-v1.2.1 LPPL License By http://www.layui.com/admin/ */
 ;layui.define(["table","form"],function(t){var e=(layui.$,layui.admin),i=layui.view,l=layui.table,n=layui.form;l.render({elem:"#LAY-app-content-list",url:"./json/content/list.js",cols:[[{type:"checkbox",fixed:"left"},{field:"id",width:100,title:"文章ID",sort:!0},{field:"label",title:"文章标签",minWidth:100},{field:"title",title:"文章标题"},{field:"author",title:"作者"},{field:"uploadtime",title:"上传时间",sort:!0},{field:"status",title:"发布状态",templet:"#buttonTpl",minWidth:80,align:"center"},{title:"操作",minWidth:150,align:"center",fixed:"right",toolbar:"#table-content-list"}]],page:!0,limit:10,limits:[10,15,20,25,30],text:"对不起，加载出现异常！"}),l.on("tool(LAY-app-content-list)",function(t){var l=t.data;"del"===t.event?layer.confirm("确定删除此文章？",function(e){t.del(),layer.close(e)}):"edit"===t.event&&e.popup({title:"编辑文章",area:["550px","550px"],id:"LAY-popup-content-edit",success:function(t,e){i(this.id).render("app/content/listform",l).done(function(){n.render(null,"layuiadmin-app-form-list"),n.on("submit(layuiadmin-app-form-submit)",function(t){t.field;layui.table.reload("LAY-app-content-list"),layer.close(e)})})}})}),l.render({elem:"#LAY-app-article-content-list",url:layui.setter.domain.api_article_list,cols:[[{type:"checkbox",fixed:"left"},{field:"id",width:100,title:"文章ID",sort:!0},{field:"cover",title:"图标",width:60,event:"show_big_cover",templet:"<div ><img src='{{d.cover}}'  alt='' width=\"28px\" height=\"28px\"></div>"},{field:"account",title:"微信名",width:150,sort:!0},{field:"title",title:"标题 （点击标题进入原文章）",width:400,templet:"<div ><a href='{{d.url}}' target=\"_blank\">{{d.title}}</a></div>"},{field:"author",title:"作者",width:100},{field:"digest",title:"描述",width:200,event:"show_digest"},{field:"",title:"内容",width:100,event:"show_article",templet:"<div >点击查看</div>"},{field:"source_url",title:"原地址",width:150,templet:"<div ><a href='{{d.source_url}}' target=\"_blank\">{{d.source_url}}</a></div>"},{field:"copyright_stat",title:"原创",width:100,sort:!0},{field:"flag",title:"周报",width:100,templet:function(t){return 1==t.flag?'<input type="checkbox" name="status" value='+t.id+' lay-skin="switch" lay-text="精华|普通" lay-filter="sexDemo"  checked>':'<input type="checkbox" name="status" value='+t.id+' lay-skin="switch" lay-text="精华|普通" lay-filter="sexDemo" >'}},{field:"publish_time",title:"公开时间",width:160,sort:!0,templet:"<div>{{layui.util.toDateString(d.publish_time,'yyyy-MM-dd HH:mm:ss')}}</div>"},{field:"spider_time",title:"爬取时间",width:160,sort:!0,templet:"<div>{{layui.util.toDateString(d.spider_time,'yyyy-MM-dd HH:mm:ss')}}</div>"},{field:"status",title:"发布状态",templet:"#buttonTpl",minWidth:100,align:"center"},{title:"操作",minWidth:150,align:"center",fixed:"right",toolbar:"#table-content-list"}]],page:!0,limit:10,limits:[10,15,20,25,30,100],text:"对不起，加载出现异常！"}),l.on("tool(LAY-app-article-content-list)",function(t){var l=t.data;"del"===t.event?layer.confirm("确定删除此文章？",function(e){t.del(),layer.close(e)}):"edit"===t.event&&e.popup({title:"编辑文章",area:["550px","550px"],id:"LAY-popup-content-edit",success:function(t,e){i(this.id).render("app/content/listform",l).done(function(){n.render(null,"layuiadmin-app-form-list"),n.on("submit(layuiadmin-app-form-submit)",function(t){t.field;layui.table.reload("LAY-app-content-list"),layer.close(e)})})}})}),n.on("switch(sexDemo)",function(t){var i=new Object;id=this.value,i.id=id,1==t.elem.checked?i.flag=1:i.flag=0,e.req({url:layui.setter.domain.api_article_list_flag,type:"post",data:i,success:function(t){200==t.code?layer.msg(t.message):layer.msg(t.message)},fail:function(){layer.msg("网络错误！")}})}),l.render({elem:"#LAY-app-content-tags",url:layui.setter.domain.api_tag_list,cols:[[{type:"numbers",fixed:"left"},{field:"id",title:"ID",width:80,sort:!0},{field:"tag_name",title:"标签名",width:200},{field:"tag_en",title:"标签英文",width:200},{field:"tag_summary",title:"标签描述",width:400},{field:"create_time",title:"添加时间",width:200,templet:"<div>{{layui.util.toDateString(d.createTime,'yyyy-MM-dd HH:mm:ss')}}</div>"},{title:"操作",width:150,align:"center",fixed:"right",toolbar:"#layuiadmin-app-cont-tagsbar"}]],page:!0,limit:10,limits:[10,15,20,25,30],text:"对不起，加载出现异常！"}),l.on("tool(LAY-app-content-tags)",function(t){var l=t.data;"del"===t.event?layer.confirm("确定删除此分类？",function(e){t.del(),layer.close(e)}):"edit"===t.event&&e.popup({title:"编辑分类",area:["450px","200px"],id:"LAY-popup-content-tags",success:function(t,e){i(this.id).render("app/content/tagsform",l).done(function(){n.render(null,"layuiadmin-form-tags"),n.on("submit(layuiadmin-app-tags-submit)",function(t){t.field;layui.table.reload("LAY-app-content-tags"),layer.close(e)})})}})}),l.render({elem:"#LAY-app-content-comm",url:"./json/content/comment.js",cols:[[{type:"checkbox",fixed:"left"},{field:"id",width:100,title:"ID",sort:!0},{field:"reviewers",title:"评论者",minWidth:100},{field:"content",title:"评论内容",minWidth:100},{field:"commtime",title:"评论时间",minWidth:100,sort:!0},{title:"操作",width:150,align:"center",fixed:"right",toolbar:"#table-content-com"}]],page:!0,limit:10,limits:[10,15,20,25,30],text:"对不起，加载出现异常！"}),l.on("tool(LAY-app-content-comm)",function(t){var l=t.data;"del"===t.event?layer.confirm("确定删除此条评论？",function(e){t.del(),layer.close(e)}):"edit"===t.event&&e.popup({title:"编辑评论",area:["450px","300px"],id:"LAY-popup-content-comm",success:function(t,e){i(this.id).render("app/content/contform",l).done(function(){n.render(null,"layuiadmin-form-comment"),n.on("submit(layuiadmin-app-com-submit)",function(t){t.field;layui.table.reload("LAY-app-content-comm"),layer.close(e)})})}})}),l.render({elem:"#LAY-wechat-account-list",url:layui.setter.domain.api_account_list,cols:[[{type:"checkbox",fixed:"left"},{field:"id",title:"ID",width:80,sort:!0},{field:"head_url",title:"图标",width:60,event:"show_big_head_url",templet:"<div ><img src='{{d.head_url}}'  alt='' width=\"28px\" height=\"28px\"></div>"},{field:"account_name",title:"微信名",width:150},{field:"account_id",title:"微信ID",width:200},{field:"summary",title:"描述",width:600},{field:"qr_code",title:"二维码",width:90,event:"show_big_qr_code",templet:"<div ><img src='{{d.qr_code}}'  alt='' width=\"30px\" height=\"30px\"></div>"},{field:"verify",title:"认证",width:90,templet:function(t){return""==t.verify?"<div>暂无</div>":t.verify}},{field:"spider_time",title:"时间",width:160,sort:!0,templet:"<div>{{layui.util.toDateString(d.spider_time,'yyyy-MM-dd HH:mm:ss')}}</div>"},{title:"操作",minWidth:100,align:"center",fixed:"right",toolbar:"#table-content-list"}]],page:!0,limit:10,limits:[10,15,20,25,30],text:"对不起，加载出现异常！"}),l.on("tool(LAY-wechat-account-list)",function(t){var l=t.data;"del"===t.event?layer.confirm("确定删除此文章？",function(e){t.del(),layer.close(e)}):"edit"===t.event&&e.popup({title:"编辑文章",area:["550px","550px"],id:"LAY-popup-content-edit",success:function(t,e){i(this.id).render("app/content/listform",l).done(function(){n.render(null,"layuiadmin-app-form-list"),n.on("submit(layuiadmin-app-form-submit)",function(t){t.field;layui.table.reload("LAY-wechat-account-list"),layer.close(e)})})}})}),t("contlist",{})});