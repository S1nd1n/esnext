import Solid from "./solid.js";

export default class Star extends Solid {
    addRes() {
        return this.resourses += 10 * this.square;
    }
}