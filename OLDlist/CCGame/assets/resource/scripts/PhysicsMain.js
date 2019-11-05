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

    onEnable () {
    	cc.director.getPhysicsManager().enabled = true;
	    cc.director.getPhysicsManager().gravity = cc.v2(0, -980);
  	    cc.director.getCollisionManager().enabled = true;
    	cc.director.getCollisionManager().enabledDebugDraw = true;
    	cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    	var manager = cc.director.getPhysicsManager();

		// 开启物理步长的设置
		manager.enabledAccumulator = true;

		// 物理步长，默认 FIXED_TIME_STEP 是 1/60
		manager.FIXED_TIME_STEP = 1/60;

		// 每次更新物理系统处理速度的迭代次数，默认为 10
		manager.VELOCITY_ITERATIONS = 8;

		// 每次更新物理系统处理位置的迭代次数，默认为 10
		manager.POSITION_ITERATIONS = 5;
    },

    start () {
    	// cc.director.getPhysicsManager().enabled = true;
	    // cc.director.getPhysicsManager().gravity = cc.v2(0, -1299);
  	  //   cc.director.getCollisionManager().enabled = true;
    	// cc.director.getCollisionManager().enabledDebugDraw = true;
    	// cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    },

    // update (dt) {},
});
