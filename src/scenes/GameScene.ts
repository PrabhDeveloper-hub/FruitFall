import * as PIXI from "pixi.js";
import {  Manager } from "../Manager";

export class GameScene extends PIXI.Container  {
  private background: PIXI.Sprite;

  constructor() {
    super();

    this.background = PIXI.Sprite.from("background");
    this.background.anchor.set(0.5,0.65);
    this.background.scale.x  = this.background.scale.y = 0.8;
    this.background.x = Manager.width/2;
    this.background.y = Manager.height/2;
    this.addChild(this.background);

  }

  public update(framesPassed: number): void {
    

  }


}
