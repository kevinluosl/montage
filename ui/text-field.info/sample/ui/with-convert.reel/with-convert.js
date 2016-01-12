/**
 * @module ui/with-convert.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class WithConvert
 * @extends Component
 */
exports.WithConvert = Component.specialize(/** @lends WithConvert# */ {
    constructor: {
        value: function WithConvert() {
            this.super();
        }
    },

    convert: {
        value: function (value) {
            return value ? value.toUpperCase() : "";
        }
    }
});
