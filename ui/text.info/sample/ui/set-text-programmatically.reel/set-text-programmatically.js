/**
 * @module ui/set-text-programmatically.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class SetTextProgrammatically
 * @extends Component
 */
exports.SetTextProgrammatically = Component.specialize(/** @lends SetTextProgrammatically# */ {
    constructor: {
        value: function SetTextProgrammatically() {
            this.super();
        }
    },

    templateDidLoad: {
        value: function () {
            var text = this.templateObjects.text,
                date = new Date(),
                minutes = date.getMinutes(),
                second = date.getSeconds();

            text.value = date.getHours() + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (second < 10 ? "0" : "") + second;
        }
    }

});
