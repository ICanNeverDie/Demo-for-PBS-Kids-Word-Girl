/*global define $ requestAnimationFrame*/

define(function (require) {
	
	var Backbone = require('backbone'),
        Vars = require('app/models/vars'),
        UserEvent = require('app/events/user-event'),
        AppEvent = require('app/events/app-event'),
        CellView = require('app/views/cells/cell-view'),
        Frame;

    Frame = CellView.extend({
        initialize: function () {
            CellView.prototype.initialize.call(this);
        },

        render: function (ctx) {
            var currentFrame = this.options.num == Vars.get('currentFrame'),
                i;

            if (currentFrame && this.layers.length > 0) {
                this.layers[1].x = this.layers[1].x > this.layers[1].origin.x ? this.layers[1].x - 1 : this.layers[1].origin.x;
            } else {
                for (i = 0; i < this.layers.length; i += 1) {
                    this.layers[i].x = this.layers[i].origin.x;
                    this.layers[i].y = this.layers[i].origin.y;
                    this.layers[i].rotation = 0;
                }

                this.layers[1].x = this.layers[1].x + 100;
            }

            CellView.prototype.render.call(this, ctx);
        }
    });

	return Frame;
});

