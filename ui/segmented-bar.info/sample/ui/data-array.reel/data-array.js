/**
 * @module ui/data-array.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class DataArray
 * @extends Component
 */
exports.DataArray = Component.specialize(/** @lends DataArray# */ {
    constructor: {
        value: function DataArray() {
            this.super();
        }
    },

    /**
     * Data can be any Object[] with any Object structure,
     * developer will pick right key by binding desired FRB expression.
     */
    data: {
        value: undefined
    },

    templateDidLoad: {
        value: function () {
            this.templateObjects.segmentedBar.addEventListener("action", this.parentComponent.parentComponent)
        }
    }
});
