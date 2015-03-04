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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9UZW1wbGF0ZS50cyJdLCJuYW1lcyI6WyJUZW1wbGF0ZSIsIlRlbXBsYXRlLmNvbnN0cnVjdG9yIiwiVGVtcGxhdGUub25FbnRlckZyYW1lIiwiVGVtcGxhdGUub25SZXNpemUiXSwibWFwcGluZ3MiOiJBQUFBOzs7O0VBSUU7QUFFRixBQUNBLGNBRGM7QUFDZCxJQUFPLHFCQUFxQixXQUFVLDZDQUE2QyxDQUFDLENBQUM7QUFDckYsQUFDQSxvQkFEb0I7QUFDcEIsSUFBTyxlQUFlLFdBQWdCLHVDQUF1QyxDQUFDLENBQUM7QUFDL0UsQUFDQSxpQkFEaUI7QUFDakIsSUFBTyxJQUFJLFdBQTJCLG9DQUFvQyxDQUFDLENBQUM7QUFFNUUsSUFBTyxxQkFBcUIsV0FBVSxrREFBa0QsQ0FBQyxDQUFDO0FBQzFGLEFBQ0EseUJBRHlCO0FBQ3pCLElBQU8sY0FBYyxXQUFpQiwyQ0FBMkMsQ0FBQyxDQUFDO0FBQ25GLElBQU8sa0JBQWtCLFdBQWEsb0RBQW9ELENBQUMsQ0FBQztBQUU1RixJQUFNLFFBQVE7SUEyQlZBLFNBM0JFQSxRQUFRQTtRQUFkQyxpQkF1RUNBO1FBMUNPQSxBQUNBQSxPQURPQTtRQUNQQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxJQUFJQSxJQUFJQSxDQUFDQSxJQUFJQSxlQUFlQSxDQUFDQSxrQkFBa0JBLENBQUNBLENBQUNBLENBQUNBO1FBQy9EQSxBQUNBQSxVQURVQTtRQUNWQSxNQUFNQSxDQUFDQSxRQUFRQSxHQUFHQSxVQUFDQSxDQUFVQSxJQUFXQSxPQUFBQSxLQUFJQSxDQUFDQSxRQUFRQSxDQUFDQSxDQUFDQSxDQUFDQSxFQUFoQkEsQ0FBZ0JBLENBQUNBO1FBQ3pEQSxBQUNBQSxVQURVQTtRQUNWQSxJQUFJQSxDQUFDQSxRQUFRQSxFQUFFQSxDQUFDQTtRQUNoQkEsQUFDQUEsVUFEVUE7UUFDVkEsSUFBSUEsQ0FBQ0EsU0FBU0EsR0FBR0EsSUFBSUEsY0FBY0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsQ0FBQ0E7UUFDOUNBLEFBQ0FBLE9BRE9BO1FBQ1BBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLHFCQUFxQkEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7UUFDOUNBLEFBQ0FBLFNBRFNBO1FBQ1RBLElBQUlBLENBQUNBLEtBQUtBLEdBQVVBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFlBQVlBLEVBQUVBLENBQUNBO1FBQ2hEQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxRQUFRQSxHQUFHQSxJQUFJQSxDQUFDQSxTQUFTQSxDQUFDQTtRQUNyQ0EsQUFDQUEsV0FEV0E7UUFDWEEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDdENBLEFBQ0FBLHFCQURxQkE7UUFDckJBLElBQUlBLENBQUNBLE1BQU1BLEdBQUdBLElBQUlBLHFCQUFxQkEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsRUFBRUEsSUFBSUEsQ0FBQ0EsQ0FBQ0E7UUFDakVBLElBQUlBLENBQUNBLE1BQU1BLENBQUNBLEtBQUtBLEVBQUVBLENBQUNBO0lBQ3hCQSxDQUFDQTtJQUVERDs7O09BR0dBO0lBQ0tBLCtCQUFZQSxHQUFwQkEsVUFBcUJBLEVBQVVBO1FBRTNCRSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxTQUFTQSxJQUFJQSxDQUFDQSxDQUFDQTtRQUMxQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsTUFBTUEsRUFBRUEsQ0FBQ0E7SUFDeEJBLENBQUNBO0lBRURGOzs7T0FHR0E7SUFDS0EsMkJBQVFBLEdBQWhCQSxVQUFpQkEsQ0FBaUJBO1FBQWpCRyxpQkFBaUJBLEdBQWpCQSxRQUFpQkE7UUFFOUJBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1FBQ2pCQSxJQUFJQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtRQUNqQkEsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsS0FBS0EsR0FBR0EsTUFBTUEsQ0FBQ0EsVUFBVUEsQ0FBQ0E7UUFDckNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLEdBQUdBLE1BQU1BLENBQUNBLFdBQVdBLENBQUNBO0lBQzNDQSxDQUFDQTtJQUVMSCxlQUFDQTtBQUFEQSxDQXZFQSxBQXVFQ0EsSUFBQTtBQUVELE1BQU0sQ0FBQyxNQUFNLEdBQUc7SUFFWixJQUFJLFFBQVEsRUFBRSxDQUFDO0FBQ25CLENBQUMsQ0FBQSIsImZpbGUiOiJUZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5cbnRlbXBsYXRlIGNsYXNzXG5cbiovXG5cbi8vIGF3YXlqcy1jb3JlXG5pbXBvcnQgUmVxdWVzdEFuaW1hdGlvbkZyYW1lPSByZXF1aXJlKFwiYXdheWpzLWNvcmUvbGliL3V0aWxzL1JlcXVlc3RBbmltYXRpb25GcmFtZVwiKTtcbi8vIGF3YXlqcy1yZW5kZXJlcmdsXG5pbXBvcnQgRGVmYXVsdFJlbmRlcmVyICAgICAgPSByZXF1aXJlKCdhd2F5anMtcmVuZGVyZXJnbC9saWIvRGVmYXVsdFJlbmRlcmVyJyk7XG4vLyBhd2F5anMtZGlzcGxheVxuaW1wb3J0IFZpZXcgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnYXdheWpzLWRpc3BsYXkvbGliL2NvbnRhaW5lcnMvVmlldycpO1xuaW1wb3J0IE1lc2ggICAgICAgICAgICAgICAgID0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9lbnRpdGllcy9NZXNoXCIpO1xuaW1wb3J0IFByaW1pdGl2ZVNwaGVyZVByZWZhYj0gcmVxdWlyZShcImF3YXlqcy1kaXNwbGF5L2xpYi9wcmVmYWJzL1ByaW1pdGl2ZVNwaGVyZVByZWZhYlwiKTtcbi8vIGF3YXlqcy1tZXRob2RtYXRlcmlhbHNcbmltcG9ydCBNZXRob2RNYXRlcmlhbCAgICAgICA9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9NZXRob2RNYXRlcmlhbFwiKTtcbmltcG9ydCBNZXRob2RSZW5kZXJlclBvb2wgICA9IHJlcXVpcmUoXCJhd2F5anMtbWV0aG9kbWF0ZXJpYWxzL2xpYi9wb29sL01ldGhvZFJlbmRlcmVyUG9vbFwiKTtcblxuY2xhc3MgVGVtcGxhdGVcbntcbiAgICAvKipcbiAgICAgKiBDYW52YXPnm7jlvZPjga7mj4/nlLvnlKjjgrnjg4bjg7zjgrhcbiAgICAgKi9cbiAgICBwcml2YXRlIF92aWV3OiBWaWV3O1xuXG4gICAgLyoqXG4gICAgICog6KGo56S644Kq44OW44K444Kn44Kv44OI44Gr5LuY5LiO44GZ44KL44Oe44OG44Oq44Ki44OrXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbWF0ZXJpYWw6IE1ldGhvZE1hdGVyaWFsO1xuXG4gICAgLyoqXG4gICAgICog6KGo56S644Kq44OW44K444Kn44Kv44OI44Gu5b2i54q25oOF5aCxXG4gICAgICovXG4gICAgcHJpdmF0ZSBfcHJlZmFiOiBQcmltaXRpdmVTcGhlcmVQcmVmYWI7XG5cbiAgICAvKipcbiAgICAgKiDlrp/pmpvjgat2aWV344GrYWRk44KS6KGM44GG6KGo56S644Kq44OW44K444Kn44Kv44OIXG4gICAgICovXG4gICAgcHJpdmF0ZSBfbWVzaDogTWVzaDtcblxuICAgIC8qKlxuICAgICAqIOaPj+eUu++8j+OCouODi+ODoeODvOOCt+ODp+ODs+eUqOaPj+eUu+WHpueQhlxuICAgICAqL1xuICAgIHByaXZhdGUgX3RpbWVyOiBSZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICAvLyDlnJ/lj7DnlJ/miJBcbiAgICAgICAgdGhpcy5fdmlldyA9IG5ldyBWaWV3KG5ldyBEZWZhdWx0UmVuZGVyZXIoTWV0aG9kUmVuZGVyZXJQb29sKSk7XG4gICAgICAgIC8vIOODquOCteOCpOOCuuaZguWHpueQhlxuICAgICAgICB3aW5kb3cub25yZXNpemUgPSAoZTogVUlFdmVudCk6IHZvaWQgPT4gdGhpcy5vblJlc2l6ZShlKTtcbiAgICAgICAgLy8g5Yid5Zue44K144Kk44K66Kit5a6aXG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcbiAgICAgICAgLy8g44Oe44OG44Oq44Ki44Or55Sf5oiQXG4gICAgICAgIHRoaXMuX21hdGVyaWFsID0gbmV3IE1ldGhvZE1hdGVyaWFsKDB4RkYwMDAwKTtcbiAgICAgICAgLy8g5b2i54q255Sf5oiQXG4gICAgICAgIHRoaXMuX3ByZWZhYiA9IG5ldyBQcmltaXRpdmVTcGhlcmVQcmVmYWIoMzAwKTtcbiAgICAgICAgLy8g44Oh44OD44K344Ol5Y+W5b6XXG4gICAgICAgIHRoaXMuX21lc2ggPSA8TWVzaD4gdGhpcy5fcHJlZmFiLmdldE5ld09iamVjdCgpO1xuICAgICAgICB0aGlzLl9tZXNoLm1hdGVyaWFsID0gdGhpcy5fbWF0ZXJpYWw7XG4gICAgICAgIC8vIOOCueODhuODvOOCuOS4iuOBq+i/veWKoFxuICAgICAgICB0aGlzLl92aWV3LnNjZW5lLmFkZENoaWxkKHRoaXMuX21lc2gpO1xuICAgICAgICAvLyDjgqLjg4vjg6Hjg7zjgrfjg6fjg7PnlKjjga7mr47jg5Xjg6zjg7zjg6Dmj4/nlLvlh6bnkIZcbiAgICAgICAgdGhpcy5fdGltZXIgPSBuZXcgUmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMub25FbnRlckZyYW1lLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fdGltZXIuc3RhcnQoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmr47jg5Xjg6zjg7zjg6Dmj4/nlLvlh6bnkIZcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZHRcbiAgICAgKi9cbiAgICBwcml2YXRlIG9uRW50ZXJGcmFtZShkdDogbnVtYmVyKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5fbWVzaC5yb3RhdGlvblkgKz0gMTtcbiAgICAgICAgdGhpcy5fdmlldy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDjg5bjg6njgqbjgrbjg6rjgrXjgqTjgrrmmYLlh6bnkIZcbiAgICAgKiBAcGFyYW0ge1VJRXZlbnR9IGVcbiAgICAgKi9cbiAgICBwcml2YXRlIG9uUmVzaXplKGU6IFVJRXZlbnQgPSBudWxsKTogdm9pZFxuICAgIHtcbiAgICAgICAgdGhpcy5fdmlldy54ID0gMDtcbiAgICAgICAgdGhpcy5fdmlldy55ID0gMDtcbiAgICAgICAgdGhpcy5fdmlldy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICB0aGlzLl92aWV3LmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICB9XG5cbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKClcbntcbiAgICBuZXcgVGVtcGxhdGUoKTtcbn1cbiJdfQ==