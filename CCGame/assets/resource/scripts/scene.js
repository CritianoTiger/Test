// Learn cc.Class:CC的类
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
//  
// Learn Attribute:学习属性
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
//  
// Learn life-cycle callbacks:生命周期回调
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function() {
    	var logo, s_max, s_min, seq, rf;
    	// logo = cc.find("UI_ROOT/start_Button");
    	// s_max = cc.scaleTo(1.5, 1.1); 
    	// s_min = cc.scaleTo(1.5, 0.9);
    	// seq = cc.sequence([s_max, s_min]);
    	// rf = cc.repeatForever(seq);
    	// logo.runAction(rf);

    	logo = cc.find("UI_ROOT/boom_1");
    	s_max = cc.scaleTo(2.4, 1.1); 
    	s_min = cc.scaleTo(2.4, 0.9);
    	seq = cc.sequence([s_max, s_min]);
    	rf = cc.repeatForever(seq);
    	logo.runAction(rf);

    	logo = cc.find("UI_ROOT/boom_2");
    	s_max = cc.scaleTo(3.5, 1.4); 
    	s_min = cc.scaleTo(2.5, 0.9);
    	seq = cc.sequence([s_max, s_min]);
    	rf = cc.repeatForever(seq);
    	logo.runAction(rf);

    	var start_Button = cc.find("UI_ROOT/start_Button")
    	// 以下是一个长语句的写法
    	// start_Button.runAction(cc.repeatForever(cc.rotateBy(1.2,360).easing(cc.easeCubicActionIn())));
    	

    	// 以下是分解的写法
    	var rot = cc.rotateBy(1.2,360).easing(cc.easeCubicActionIn());
    	rf = cc.repeatForever(rot);
    	start_Button.runAction(rf);

    	//背景音乐
    	cc.audioEngine.stopAll();
    	cc.audioEngine.play(cc.url.raw("resource/sounds/BG.mp3"),true);

    },

    goto_game_scene:function(){
    	cc.director.loadScene("game_scene");

    },

    start () {

    },

    // update (dt) {},
});
