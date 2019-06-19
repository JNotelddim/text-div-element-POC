var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "util", "lit-html", "aurelia-event-aggregator"], function (require, exports, aurelia_framework_1, util_1, lit_html_1, aurelia_event_aggregator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var markup = lit_html_1.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    <template>\n        <div if.bind=\"formatTemplate == null\"\n                text-content.two-way=\"textString\"\n                contenteditable.bind=\"canEdit\"\n                class=\"${textInvalid ? 'text-red' : ''} ${canEdit ? '' :'cursor-default'} ${styleClass}\"\n                keydown.delegate=\"keydownHandler($event)\"\n                blur.trigger=\"textBlur()\"\n                title.bind=\"textString\">\n        </div>\n\n        <div if.bind=\"formatTemplate != null\"\n                text-content.two-way=\"textString | decimalFormat: formatTemplate & updateTrigger: 'blur'\"\n                contenteditable.bind=\"canEdit\"\n                class=\"${textInvalid ? 'text-red' : ''} ${canEdit ? '' :'cursor-default'} ${styleClass}\"\n                keydown.delegate=\"keydownHandler($event)\"\n                blur.trigger=\"textBlur()\"\n                title.bind=\"textString\">\n        </div>\n    </template>"], ["\n    <template>\n        <div if.bind=\"formatTemplate == null\"\n                text-content.two-way=\"textString\"\n                contenteditable.bind=\"canEdit\"\n                class=\"\\${textInvalid ? 'text-red' : ''} \\${canEdit ? '' :'cursor-default'} \\${styleClass}\"\n                keydown.delegate=\"keydownHandler(\\$event)\"\n                blur.trigger=\"textBlur()\"\n                title.bind=\"textString\">\n        </div>\n\n        <div if.bind=\"formatTemplate != null\"\n                text-content.two-way=\"textString | decimalFormat: formatTemplate & updateTrigger: 'blur'\"\n                contenteditable.bind=\"canEdit\"\n                class=\"\\${textInvalid ? 'text-red' : ''} \\${canEdit ? '' :'cursor-default'} \\${styleClass}\"\n                keydown.delegate=\"keydownHandler(\\$event)\"\n                blur.trigger=\"textBlur()\"\n                title.bind=\"textString\">\n        </div>\n    </template>"])));
    var TextDivCustomElement = /** @class */ (function () {
        function TextDivCustomElement(eventAggregator) {
            this.canEdit = false;
            this.textInvalid = false;
            this.eventAggregator = eventAggregator;
            this.blurTriggerFunction = "";
        }
        TextDivCustomElement.prototype.textStringChanged = function (newValue, oldValue) {
            if (!this.textStringHandler)
                return;
            this.textStringHandler(newValue, oldValue);
        };
        TextDivCustomElement.prototype.canEditChanged = function (newValue, oldValue) {
            if (util_1.isNullOrUndefined(newValue))
                this.canEdit = oldValue;
        };
        TextDivCustomElement.prototype.keydownHandler = function (e) {
            switch (e.keyCode) {
                case 13: //enter
                    $(':focus').blur();
                    break;
                default:
                    return true;
            }
        };
        TextDivCustomElement.prototype.textBlur = function () {
            this.eventAggregator.publish(this.blurTriggerFunction);
        };
        __decorate([
            aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay }),
            __metadata("design:type", String)
        ], TextDivCustomElement.prototype, "textString", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], TextDivCustomElement.prototype, "formatTemplate", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], TextDivCustomElement.prototype, "blurTriggerFunction", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], TextDivCustomElement.prototype, "styleClass", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], TextDivCustomElement.prototype, "canEdit", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], TextDivCustomElement.prototype, "textInvalid", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Function)
        ], TextDivCustomElement.prototype, "textStringHandler", void 0);
        TextDivCustomElement = __decorate([
            aurelia_framework_1.inlineView(markup.getHTML()),
            aurelia_framework_1.customElement('text-div'),
            aurelia_framework_1.inject(aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [Object])
        ], TextDivCustomElement);
        return TextDivCustomElement;
    }());
    exports.TextDivCustomElement = TextDivCustomElement;
    var templateObject_1;
});
//# sourceMappingURL=text-div-element.js.map