/**
 * @module ui/phone-portrait.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class PhonePortrait
 * @extends Component
 */
exports.PhonePortrait = Component.specialize(/** @lends PhonePortrait# */ {
    constructor: {
        value: function PhonePortrait() {
            this.super();
        }
    },

    templateDidLoad: {
        value: function () {
            this.templateObjects.segmentedBar.addEventListener("action", this.parentComponent.parentComponent)
        }
    }
});
