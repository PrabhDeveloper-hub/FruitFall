import { Manager } from "./Manager";
import { LoaderScene } from "./scenes/LoaderScene";

Manager.initialize(window.innerWidth, window.innerHeight, 0x000000);

const loading: LoaderScene = new LoaderScene();
Manager.changeScene(loading);
