/**
 * @module ui/range-controller-bootstrap.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class RangeControllerBootstrap
 * @extends Component
 */
exports.RangeControllerBootstrap = Component.specialize(/** @lends RangeControllerBootstrap# */ {
    constructor: {
        value: function RangeControllerBootstrap() {
            this.super();
        }
    },

    templateDidLoad: {
        value: function () {
            this.templateObjects.segmentedBar.addEventListener("action", this.parentComponent.parentComponent)
        }
    }
});
