(function(e,t,o,s,a,d){"use strict";const{FormText:r}=d.Forms;function c(){return React.createElement(r,null,"Hello, world!")}t.storage.settings??={enabled:!0,customText:"Sent from my Samsung Smart Fridge"};const i=s.before("sendMessage",a.sendMessage,function(l){let[f,n]=l;t.storage.settings.enabled&&n?.content&&(n.content+=` (${t.storage.settings.customText})`)}),g=o.addSettings("Smart Fridge Sender",c);function m(){}function u(){i(),g.remove()}return e.onLoad=m,e.onUnload=u,e})({},vendetta.plugin,vendetta.ui.settings,vendetta.patcher,vendetta.discord.messages,vendetta.ui.components);
