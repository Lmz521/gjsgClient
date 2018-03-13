"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        wait: cc.Sprite
    },

    // use this for initialization
    onLoad: function onLoad() {
        var action = cc.repeatForever(cc.rotateBy(3.0, 360));
        this.wait.node.runAction(action);
    }

});