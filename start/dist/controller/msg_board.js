/** layuiAdmin.pro-v1.2.1 LPPL License By http://www.layui.com/admin/ */
 ;layui.define(["table","form"],function(e){var t=(layui.$,layui.admin),i=layui.view,l=layui.table,r=layui.form;l.render({elem:"#LAY-user-manage",url:layui.setter.domain.api_msg_board_list,cols:[[{type:"checkbox",fixed:"left"},{field:"id",title:"ID",width:80,sort:!0},{field:"visitor_id",title:"访客",width:250,sort:!0},{field:"ip",title:"IP",width:200,sort:!0},{field:"area",title:"地区",width:200},{field:"content",title:"留言内容",width:400,event:"show_digest"},{field:"create_time",title:"公开时间",width:160,sort:!0,templet:"<div>{{layui.util.toDateString(d.create_time,'yyyy-MM-dd HH:mm:ss')}}</div>"},{fixed:"right",title:"操作",toolbar:"#table-useradmin-webuser",width:150}]],page:!0,height:"full-320",text:"对不起，加载出现异常！"}),l.on("tool(LAY-user-manage)",function(e){var l=e.data;"del"===e.event?layer.prompt({formType:1,title:"敏感操作，请验证口令"},function(t,i){layer.close(i),layer.confirm("真的删除行么",function(t){e.del(),layer.close(t)})}):"edit"===e.event&&t.popup({title:"编辑用户",area:["500px","450px"],id:"LAY-popup-user-add",success:function(e,t){i(this.id).render("user/user/userform",l).done(function(){r.render(null,"layuiadmin-form-useradmin"),r.on("submit(LAY-user-front-submit)",function(e){e.field;layui.table.reload("LAY-user-manage"),layer.close(t)})})}})}),e("msg_board",{})});