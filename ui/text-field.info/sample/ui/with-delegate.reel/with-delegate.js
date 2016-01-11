/**
 * @module ui/with-delegate.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class WithDelegate
 * @extends Component
 */
exports.WithDelegate = Component.specialize(/** @lends WithDelegate# */ {
    constructor: {
        value: function WithDelegate() {
            this.super();
        }
    }
});
