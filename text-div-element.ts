import { inlineView, customElement, bindable, bindingMode, inject } from "aurelia-framework"
import { isNullOrUndefined } from "util";
import { html } from "lit-html";
import { EventAggregator } from 'aurelia-event-aggregator'

let markup = html`
    <template>
        <div if.bind="formatTemplate == null"
                text-content.two-way="textString"
                contenteditable.bind="canEdit"
                class="\${textInvalid ? 'text-red' : ''} \${canEdit ? '' :'cursor-default'} \${styleClass}"
                keydown.delegate="keydownHandler(\$event)"
                blur.trigger="textBlur()"
                title.bind="textString">
        </div>

        <div if.bind="formatTemplate != null"
                text-content.two-way="textString | decimalFormat: formatTemplate & updateTrigger: 'blur'"
                contenteditable.bind="canEdit"
                class="\${textInvalid ? 'text-red' : ''} \${canEdit ? '' :'cursor-default'} \${styleClass}"
                keydown.delegate="keydownHandler(\$event)"
                blur.trigger="textBlur()"
                title.bind="textString">
        </div>
    </template>`

@inlineView(markup.getHTML())
@customElement('text-div')
    @inject(EventAggregator)
export class TextDivCustomElement {
    eventAggregator: EventAggregator
    @bindable({ defaultBindingMode: bindingMode.twoWay }) textString: string
    @bindable formatTemplate: string
    @bindable blurTriggerFunction: string
    @bindable styleClass: string

    @bindable canEdit: boolean = false
    @bindable textInvalid: boolean = false

    @bindable textStringHandler: Function


    constructor(eventAggregator) {
        this.eventAggregator = eventAggregator
        this.blurTriggerFunction = "";
    }

    textStringChanged(newValue: string, oldValue: string) {
        if (!this.textStringHandler) return;
        this.textStringHandler(newValue, oldValue);
    }

    canEditChanged(newValue, oldValue: boolean) {
        if (isNullOrUndefined(newValue))
            this.canEdit = oldValue
    }

    keydownHandler(e: KeyboardEvent) {
        switch (e.keyCode) {
            case 13: //enter
                $(':focus').blur()
                break
            default:
                return true
        }
    }

    textBlur() {
        this.eventAggregator.publish(this.blurTriggerFunction);
    }
}
