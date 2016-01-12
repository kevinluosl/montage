/**
 * @module ui/hello-world.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class HelloWorld
 * @extends Component
 */
exports.HelloWorld = Component.specialize(/** @lends HelloWorld# */ {
    constructor: {
        value: function HelloWorld() {
            this.super();
        }
    }
});
