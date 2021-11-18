import { Component, Input, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/material/core";
export class MatPassToggleVisibilityComponent {
    get type() {
        return this.isVisible ? 'text' : 'password';
    }
}
MatPassToggleVisibilityComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MatPassToggleVisibilityComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MatPassToggleVisibilityComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: MatPassToggleVisibilityComponent, selector: "mat-pass-toggle-visibility", inputs: { isVisible: "isVisible", tabindex: "tabindex" }, ngImport: i0, template: "<button\n  (click)=\"isVisible = !isVisible\"\n  class=\"mat-icon-button cdk-focused cdk-mouse-focused\"\n  mat-icon-button\n  matRipple\n  matRippleCentered=\"true\"\n  matRipple\n  [attr.tabindex]=\"tabindex ? tabindex : null\"\n  type=\"button\"\n>\n  <mat-icon>{{ isVisible ? \"visibility\" : \"visibility_off\" }}</mat-icon>\n</button>\n", styles: [""], components: [{ type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], directives: [{ type: i2.MatRipple, selector: "[mat-ripple], [matRipple]", inputs: ["matRippleColor", "matRippleUnbounded", "matRippleCentered", "matRippleRadius", "matRippleAnimation", "matRippleDisabled", "matRippleTrigger"], exportAs: ["matRipple"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MatPassToggleVisibilityComponent, decorators: [{
            type: Component,
            args: [{ selector: 'mat-pass-toggle-visibility', encapsulation: ViewEncapsulation.None, template: "<button\n  (click)=\"isVisible = !isVisible\"\n  class=\"mat-icon-button cdk-focused cdk-mouse-focused\"\n  mat-icon-button\n  matRipple\n  matRippleCentered=\"true\"\n  matRipple\n  [attr.tabindex]=\"tabindex ? tabindex : null\"\n  type=\"button\"\n>\n  <mat-icon>{{ isVisible ? \"visibility\" : \"visibility_off\" }}</mat-icon>\n</button>\n", styles: [""] }]
        }], propDecorators: { isVisible: [{
                type: Input
            }], tabindex: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhci1tYXRlcmlhbC1leHRlbnNpb25zL3Bhc3N3b3JkLXN0cmVuZ3RoL3NyYy9saWIvY29tcG9uZW50L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL2NvbXBvbmVudC9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQVFsRSxNQUFNLE9BQU8sZ0NBQWdDO0lBUTNDLElBQUksSUFBSTtRQUNOLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7SUFDOUMsQ0FBQzs7NkhBVlUsZ0NBQWdDO2lIQUFoQyxnQ0FBZ0MsNEhDUjdDLHdWQVlBOzJGREphLGdDQUFnQztrQkFONUMsU0FBUzsrQkFDRSw0QkFBNEIsaUJBR3ZCLGlCQUFpQixDQUFDLElBQUk7OEJBS3JDLFNBQVM7c0JBRFIsS0FBSztnQkFJTixRQUFRO3NCQURQLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIFZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHknLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXBhc3MtdG9nZ2xlLXZpc2liaWxpdHkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9tYXQtcGFzcy10b2dnbGUtdmlzaWJpbGl0eS5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXG59KVxuZXhwb3J0IGNsYXNzIE1hdFBhc3NUb2dnbGVWaXNpYmlsaXR5Q29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBpc1Zpc2libGU6IGJvb2xlYW47XG5cbiAgQElucHV0KClcbiAgdGFiaW5kZXg/OiBzdHJpbmc7XG5cbiAgZ2V0IHR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNWaXNpYmxlID8gJ3RleHQnIDogJ3Bhc3N3b3JkJztcbiAgfVxuXG59XG4iLCI8YnV0dG9uXG4gIChjbGljayk9XCJpc1Zpc2libGUgPSAhaXNWaXNpYmxlXCJcbiAgY2xhc3M9XCJtYXQtaWNvbi1idXR0b24gY2RrLWZvY3VzZWQgY2RrLW1vdXNlLWZvY3VzZWRcIlxuICBtYXQtaWNvbi1idXR0b25cbiAgbWF0UmlwcGxlXG4gIG1hdFJpcHBsZUNlbnRlcmVkPVwidHJ1ZVwiXG4gIG1hdFJpcHBsZVxuICBbYXR0ci50YWJpbmRleF09XCJ0YWJpbmRleCA/IHRhYmluZGV4IDogbnVsbFwiXG4gIHR5cGU9XCJidXR0b25cIlxuPlxuICA8bWF0LWljb24+e3sgaXNWaXNpYmxlID8gXCJ2aXNpYmlsaXR5XCIgOiBcInZpc2liaWxpdHlfb2ZmXCIgfX08L21hdC1pY29uPlxuPC9idXR0b24+XG4iXX0=