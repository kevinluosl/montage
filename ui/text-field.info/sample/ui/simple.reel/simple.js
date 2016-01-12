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
            var date = new Date(),
                minutes = date.getMinutes(),
                second = date.getSeconds();

            this.templateObjects.textField.value = date.getHours() + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (second < 10 ? "0" : "") + second;
        }
    }
});
