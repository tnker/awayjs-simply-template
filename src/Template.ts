/*

template class

*/

// awayjs-core
import Vector3D             = require("awayjs-core/lib/geom/Vector3D");
import RequestAnimationFrame= require("awayjs-core/lib/utils/RequestAnimationFrame");
// awayjs-display
import View                 = require("awayjs-display/lib/containers/View");
import Mesh                 = require("awayjs-display/lib/entities/Mesh");
import PrimitivePlanePrefab = require("awayjs-display/lib/prefabs/PrimitivePlanePrefab");
// awayjs-methodmaterials
import MethodMaterial       = require("awayjs-methodmaterials/lib/MethodMaterial");
import MethodRendererPool   = require("awayjs-methodmaterials/lib/pool/MethodRendererPool");
// awayjs-renderergl
import DefaultRenderer      = require("awayjs-renderergl/lib/DefaultRenderer");

class Template
{
    private _view: View;

    private _planeMaterial: MethodMaterial;

    private _plane: Mesh;

    private _timer: RequestAnimationFrame;

    constructor()
    {
        // view setup
        this._view = new View(new DefaultRenderer(MethodRendererPool));
        // view setting
        this._view.camera.z = -1000;
        this._view.camera.y = 500;
        this._view.camera.lookAt(new Vector3D());
        // material setup
        this._planeMaterial = new MethodMaterial();
        // scene setup
        this._plane = <Mesh> new PrimitivePlanePrefab(700, 700).getNewObject();
        this._plane.material = this._planeMaterial;
        this._view.scene.addChild(this._plane);
        // bind resize
        window.onresize = (event: UIEvent) => this.onResize(event);
        this.onResize();
        // enterframe start
        this._timer = new RequestAnimationFrame(this.onEnterFrame, this);
        this._timer.start();
    }

    private onEnterFrame(dt: number): void
    {
        this._plane.rotationY += 1;
        this._view.render();
    }

    private onResize(event: UIEvent = null): void
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
