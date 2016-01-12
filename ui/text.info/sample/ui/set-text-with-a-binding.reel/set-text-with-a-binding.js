/**
 * @module ui/set-text-with-a-binding.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class SetTextWithABinding
 * @extends Component
 */
exports.SetTextWithABinding = Component.specialize(/** @lends SetTextWithABinding# */ {
    constructor: {
        value: function SetTextWithABinding() {
            this.super();
        }
    },

    text: {
        value: ""
    },

    templateDidLoad: {
        value: function () {
            setInterval(this._setTime.bind(this), 1000);
        }
    },

    _setTime: {
        value: function () {
            var date = new Date(),
                minutes = date.getMinutes(),
                second = date.getSeconds();

            this.text = date.getHours() + ":" + (minutes < 10 ? "0" : "") + minutes + ":" + (second < 10 ? "0" : "") + second;
        }
    }
});
