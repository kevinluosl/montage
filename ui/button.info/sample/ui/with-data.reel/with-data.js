/**
 * @module ui/with-data.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class WithData
 * @extends Component
 */
exports.WithData = Component.specialize(/** @lends WithData# */ {
    constructor: {
        value: function WithData() {
            this.super();
        }
    },


    handleAction:{
        value:function(event){
            this.templateObjects.text.value = event.detail;
        }
    }
});
