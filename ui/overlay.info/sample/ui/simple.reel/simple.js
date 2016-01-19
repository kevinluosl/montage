/**
 * @module ui/simple.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Simple
 * @extends Component
 */
exports.Simple = Component.specialize(/** @lends Simple# */ {
    constructor: {
        value: function Simple() {
            this.super();
        }
    },

    handleAction: {
        value: function () {
            if ( this.templateObjects.overlay.isShown) {
                this.templateObjects.overlay.hide();
            } else {
                this.templateObjects.overlay.show();
            }
        }
    }
});
