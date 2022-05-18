import Solid from "./solid.js";

export default class Planet extends Solid {
    addRes() {
        return this.resourses += 3 * this.square;
    }
}