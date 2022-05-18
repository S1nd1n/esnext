import Solid from "./solid.js";

export default class Asteroid extends Solid {
    addRes() {
        return this.resourses += this.square;
    }
}