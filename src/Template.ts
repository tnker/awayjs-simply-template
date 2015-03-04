/*

template class

*/

// awayjs-core
import RequestAnimationFrame= require("awayjs-core/lib/utils/RequestAnimationFrame");
// awayjs-renderergl
import DefaultRenderer      = require('awayjs-renderergl/lib/DefaultRenderer');
// awayjs-display
import View                 = require('awayjs-display/lib/containers/View');
import Mesh                 = require("awayjs-display/lib/entities/Mesh");
import PrimitiveSpherePrefab= require("awayjs-display/lib/prefabs/PrimitiveSpherePrefab");
// awayjs-methodmaterials
import MethodMaterial       = require("awayjs-methodmaterials/lib/MethodMaterial");
import MethodRendererPool   = require("awayjs-methodmaterials/lib/pool/MethodRendererPool");

class Template
{
    /**
     * Canvas相当の描画用ステージ
     */
    private _view: View;

    /**
     * 表示オブジェクトに付与するマテリアル
     */
    private _material: MethodMaterial;

    /**
     * 表示オブジェクトの形状情報
     */
    private _prefab: PrimitiveSpherePrefab;

    /**
     * 実際にviewにaddを行う表示オブジェクト
     */
    private _mesh: Mesh;

    /**
     * 描画／アニメーション用描画処理
     */
    private _timer: RequestAnimationFrame;

    constructor()
    {
        // 土台生成
        this._view = new View(new DefaultRenderer(MethodRendererPool));
        // リサイズ時処理
        window.onresize = (e: UIEvent): void => this.onResize(e);
        // 初回サイズ設定
        this.onResize();
        // マテリアル生成
        this._material = new MethodMaterial(0xFF0000);
        // 形状生成
        this._prefab = new PrimitiveSpherePrefab(300);
        // メッシュ取得
        this._mesh = <Mesh> this._prefab.getNewObject();
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
    private onEnterFrame(dt: number): void
    {
        this._mesh.rotationY += 1;
        this._view.render();
    }

    /**
     * ブラウザリサイズ時処理
     * @param {UIEvent} e
     */
    private onResize(e: UIEvent = null): void
    {
        this._view.x = 0;
        this._view.y = 0;
        this._view.width = window.innerWidth;
        this._view.height = window.innerHeight;
    }

}

window.onload = function()
{
    new Template();
}
