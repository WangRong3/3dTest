System.register("chunks:///_virtual/migrate-canvas.ts",["cc"],(function(){"use strict";var e,n,t,i,r,o;return{setters:[function(a){e=a.cclegacy,n=a.director,t=a.Director,i=a.Canvas,r=a.Camera,o=a.game}],execute:function(){e._RF.push({},"7d507G2bLZKvqM0g1V6Z4eH","migrate-canvas",void 0);var a=1048575;function c(e,n){for(var t=0,i=e.children.length;t<i;t++)e.children[t].layer=n,c(e.children[t],n)}n.on(t.EVENT_AFTER_SCENE_LAUNCH,(function(){var e,t,l,s=null===(e=n.getScene())||void 0===e?void 0:e.children,v=null===(t=n.getScene())||void 0===t?void 0:t.getComponentsInChildren(i);if(!(v.length<=1)){v=v.filter((function(e){return!!e.cameraComponent}));var m=null===(l=n.getScene())||void 0===l?void 0:l.getComponentsInChildren(r),u=0;m.forEach((function(e){return u|=e.visibility&a}));for(var p=[],d=0,f=s.length;d<f;d++){var C=s[d];if(o.isPersistRootNode(C)){var h=C.getComponentsInChildren(i);0!==h.length&&p.push.apply(p,h.filter((function(e){return!!e.cameraComponent})))}}p.forEach((function(e){if(v.find((function(n){return n!==e&&n.cameraComponent.visibility&e.cameraComponent.visibility&a}))){var n=~u,t=n&~(n-1);e.cameraComponent.visibility=t|4293918720&e.cameraComponent.visibility,c(e.node,t),u|=n}}))}}));var l=cc.Node.prototype.setParent;function s(e){var n=null,t=e.getComponent(i);return t&&t.cameraComponent?n=t.cameraComponent.visibility&t.node.layer?t.node.layer:t.cameraComponent.visibility&~(t.cameraComponent.visibility-1):(e.parent&&(n=s(e.parent)),n)}cc.Node.prototype.setParent=function(e,n){if(l.call(this,e,n),e){var t=s(this);t&&(this.layer=t,c(this,t))}},e._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./migrate-canvas.ts"],(function(){"use strict";return{setters:[function(){}],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});