/**
 * @module ui/anchor.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Anchor
 * @extends Component
 */
exports.Anchor = Component.specialize(/** @lends Anchor# */ {
    constructor: {
        value: function Anchor() {
            this.super();
        }
    },

    handleButtonAction: {
        value: function() {
            if ( this.templateObjects.overlay.isShown) {
                this.templateObjects.overlay.hide();
            } else {
                this.templateObjects.overlay.show();
            }
        }
    }
});
