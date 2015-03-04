(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*

template class

*/
// awayjs-core
var RequestAnimationFrame = require("awayjs-core/lib/utils/RequestAnimationFrame");
// awayjs-renderergl
var DefaultRenderer = require('awayjs-renderergl/lib/DefaultRenderer');
// awayjs-display
var View = require('awayjs-display/lib/containers/View');
var PrimitiveSpherePrefab = require("awayjs-display/lib/prefabs/PrimitiveSpherePrefab");
// awayjs-methodmaterials
var MethodMaterial = require("awayjs-methodmaterials/lib/MethodMaterial");
var MethodRendererPool = require("awayjs-methodmaterials/lib/pool/MethodRendererPool");
var Template = (function () {
    function Template() {
        var _this = this;
        // 土台生成
        this._view = new View(new DefaultRenderer(MethodRendererPool));
        // リサイズ時処理
        window.onresize = function (e) { return _this.onResize(e); };
        // 初回サイズ設定
        this.onResize();
        // マテリアル生成
        this._material = new MethodMaterial(0xFF0000);
        // 形状生成
        this._prefab = new PrimitiveSpherePrefab(300);
        // メッシュ取得
        this._mesh = this._prefab.getNewObject();
        this._mesh.material = this._material;
        // ステージ上に追加
        this._view.scene.addChild(this._mesh);
        // アニメーション用の毎フレーム描画処理
        this._timer = new RequestAnimationFrame(this.onEnterFrame, this);
        this._timer.start();
    }
    /**
     * 毎フレーム描画処理
     * @param {number} dt
     */
    Template.prototype.onEnterFrame = function (dt) {
        this._mesh.rotationY += 1;
        this._view.render();
    };
    /**
     * ブラウザリサイズ時処理
     * @param {UIEvent} e
     */
    Template.prototype.onResize = function (e) {
        if (e === void 0) { e = null; }
        this._view.x = 0;
        this._view.y = 0;
        this._view.width = window.innerWidth;
        this._view.height = window.innerHeight;
    };
    return Template;
})();
window.onload = function () {
    new Template();
};


},{"awayjs-core/lib/utils/RequestAnimationFrame":undefined,"awayjs-display/lib/containers/View":undefined,"awayjs-display/lib/prefabs/PrimitiveSpherePrefab":undefined,"awayjs-methodmaterials/lib/MethodMaterial":undefined,"awayjs-methodmaterials/lib/pool/MethodRendererPool":undefined,"awayjs-renderergl/lib/DefaultRenderer":undefined}]},{},[1])


//# sourceMappingURL=Template.js.map