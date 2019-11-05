// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        OnlyTips: cc.Label,
        btn2: cc.Button,
        btn3: cc.Button
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var click = new cc.Component.EventHandler();
        click.target = this.node;
        click.component = "UI_Button";
        click.handler = "onBt2clicked";

        this.btn2.clickEvents.push(click); 

        this.btn3.node.on(cc.Node.EventType.TOUCH_END, this.onBt3clicked, this);

    },

    onBt1clicked(){
        cc.log("first Button clicked");
        this.OnlyTips.string = "乌拉拉拉阿拉";
    },
    onBt2clicked(){
        cc.log("second Button clicked");
        var tips = this.node.getChildByName('tips');
        tips.getComponent('cc.Label').string = "第二二二个"; 
    },
    onBt3clicked(){
        cc.log("third Button clicked");
        var tips = cc.find('tips',this.node);
        tips.getComponent('cc.Label').string = "第三三三三";
    },

    start () {

    },

    // update (dt) {},
});
