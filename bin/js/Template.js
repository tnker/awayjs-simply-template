(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*

simply template class

*/
// awayjs-core
var Vector3D = require("awayjs-core/lib/geom/Vector3D");
var RequestAnimationFrame = require("awayjs-core/lib/utils/RequestAnimationFrame");
// awayjs-display
var View = require("awayjs-display/lib/containers/View");
var PrimitivePlanePrefab = require("awayjs-display/lib/prefabs/PrimitivePlanePrefab");
// awayjs-methodmaterials
var MethodMaterial = require("awayjs-methodmaterials/lib/MethodMaterial");
var MethodRendererPool = require("awayjs-methodmaterials/lib/pool/MethodRendererPool");
// awayjs-renderergl
var DefaultRenderer = require("awayjs-renderergl/lib/DefaultRenderer");
var Template = (function () {
    function Template() {
        var _this = this;
        // view setup
        this._view = new View(new DefaultRenderer(MethodRendererPool));
        // view setting
        this._view.camera.z = -1000;
        this._view.camera.y = 500;
        this._view.camera.lookAt(new Vector3D());
        // material setup
        this._planeMaterial = new MethodMaterial();
        // scene setup
        this._plane = new PrimitivePlanePrefab(700, 700).getNewObject();
        this._plane.material = this._planeMaterial;
        this._view.scene.addChild(this._plane);
        // bind resize
        window.onresize = function (event) { return _this.onResize(event); };
        this.onResize();
        this._timer = new RequestAnimationFrame(this.onEnterFrame, this);
        this._timer.start();
    }
    Template.prototype.onEnterFrame = function (dt) {
        this._plane.rotationY += 1;
        this._view.render();
    };
    Template.prototype.onResize = function (event) {
        if (event === void 0) { event = null; }
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


},{"awayjs-core/lib/geom/Vector3D":undefined,"awayjs-core/lib/utils/RequestAnimationFrame":undefined,"awayjs-display/lib/containers/View":undefined,"awayjs-display/lib/prefabs/PrimitivePlanePrefab":undefined,"awayjs-methodmaterials/lib/MethodMaterial":undefined,"awayjs-methodmaterials/lib/pool/MethodRendererPool":undefined,"awayjs-renderergl/lib/DefaultRenderer":undefined}]},{},[1])


//# sourceMappingURL=Template.js.map