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

    configData: {
        value: undefined
    },

    handleAction: {
        value: function () {
            this.templateObjects.textField.value = this.configData ? this.configData.default : "";
        }
    }
});
