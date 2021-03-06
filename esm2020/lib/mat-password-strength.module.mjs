import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPassToggleVisibilityComponent, MatPasswordStrengthComponent, MatPasswordStrengthInfoComponent } from './component';
import * as i0 from "@angular/core";
// Export module's public API
// export {MatPasswordStrengthComponent} from './component/mat-password-strength/mat-password-strength.component';
// export {
//   MatPasswordStrengthInfoComponent
// } from './component/mat-password-strength-info/mat-password-strength-info.component';
// export {MatPassToggleVisibilityComponent} from './component/mat-pass-toggle-visibility/mat-pass-toggle-visibility.component';
// export {MatPasswordStrengthValidator} from './validator/mat-password-strength-validator';
// validator
export { RegExpValidator } from './validator/regexp.class';
export class MatPasswordStrengthModule {
    static forRoot() {
        return {
            ngModule: MatPasswordStrengthModule,
            providers: []
        };
    }
}
MatPasswordStrengthModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MatPasswordStrengthModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MatPasswordStrengthModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MatPasswordStrengthModule, declarations: [MatPasswordStrengthComponent,
        MatPasswordStrengthInfoComponent,
        MatPassToggleVisibilityComponent], imports: [CommonModule,
        MatProgressBarModule,
        MatCardModule,
        MatIconModule,
        MatRippleModule], exports: [MatPasswordStrengthComponent,
        MatPasswordStrengthInfoComponent,
        MatPassToggleVisibilityComponent] });
MatPasswordStrengthModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MatPasswordStrengthModule, imports: [[
            CommonModule,
            MatProgressBarModule,
            MatCardModule,
            MatIconModule,
            MatRippleModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: MatPasswordStrengthModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [
                        CommonModule,
                        MatProgressBarModule,
                        MatCardModule,
                        MatIconModule,
                        MatRippleModule
                    ],
                    exports: [
                        MatPasswordStrengthComponent,
                        MatPasswordStrengthInfoComponent,
                        MatPassToggleVisibilityComponent
                    ],
                    declarations: [
                        MatPasswordStrengthComponent,
                        MatPasswordStrengthInfoComponent,
                        MatPassToggleVisibilityComponent
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBhc3N3b3JkLXN0cmVuZ3RoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2FuZ3VsYXItbWF0ZXJpYWwtZXh0ZW5zaW9ucy9wYXNzd29yZC1zdHJlbmd0aC9zcmMvbGliL21hdC1wYXNzd29yZC1zdHJlbmd0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBc0IsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBRXJELE9BQU8sRUFBQyxnQ0FBZ0MsRUFBRSw0QkFBNEIsRUFBRSxnQ0FBZ0MsRUFBQyxNQUFNLGFBQWEsQ0FBQzs7QUFHN0gsNkJBQTZCO0FBQzdCLGtIQUFrSDtBQUNsSCxXQUFXO0FBQ1gscUNBQXFDO0FBQ3JDLHdGQUF3RjtBQUN4RixnSUFBZ0k7QUFDaEksNEZBQTRGO0FBQzVGLFlBQVk7QUFDWixPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFxQnpELE1BQU0sT0FBTyx5QkFBeUI7SUFDcEMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7SUFDSixDQUFDOztzSEFOVSx5QkFBeUI7dUhBQXpCLHlCQUF5QixpQkFMbEMsNEJBQTRCO1FBQzVCLGdDQUFnQztRQUNoQyxnQ0FBZ0MsYUFkaEMsWUFBWTtRQUNaLG9CQUFvQjtRQUNwQixhQUFhO1FBQ2IsYUFBYTtRQUNiLGVBQWUsYUFHZiw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLGdDQUFnQzt1SEFRdkIseUJBQXlCLFlBbEIzQjtZQUNQLFlBQVk7WUFDWixvQkFBb0I7WUFDcEIsYUFBYTtZQUNiLGFBQWE7WUFDYixlQUFlO1NBQ2hCOzJGQVlVLHlCQUF5QjtrQkFuQnJDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osb0JBQW9CO3dCQUNwQixhQUFhO3dCQUNiLGFBQWE7d0JBQ2IsZUFBZTtxQkFDaEI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLDRCQUE0Qjt3QkFDNUIsZ0NBQWdDO3dCQUNoQyxnQ0FBZ0M7cUJBQ2pDO29CQUNELFlBQVksRUFBRTt3QkFDWiw0QkFBNEI7d0JBQzVCLGdDQUFnQzt3QkFDaEMsZ0NBQWdDO3FCQUNqQztpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFByb2dyZXNzQmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuaW1wb3J0IHtNYXRSaXBwbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbmltcG9ydCB7TWF0UGFzc1RvZ2dsZVZpc2liaWxpdHlDb21wb25lbnQsIE1hdFBhc3N3b3JkU3RyZW5ndGhDb21wb25lbnQsIE1hdFBhc3N3b3JkU3RyZW5ndGhJbmZvQ29tcG9uZW50fSBmcm9tICcuL2NvbXBvbmVudCc7XG5cblxuLy8gRXhwb3J0IG1vZHVsZSdzIHB1YmxpYyBBUElcbi8vIGV4cG9ydCB7TWF0UGFzc3dvcmRTdHJlbmd0aENvbXBvbmVudH0gZnJvbSAnLi9jb21wb25lbnQvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoL21hdC1wYXNzd29yZC1zdHJlbmd0aC5jb21wb25lbnQnO1xuLy8gZXhwb3J0IHtcbi8vICAgTWF0UGFzc3dvcmRTdHJlbmd0aEluZm9Db21wb25lbnRcbi8vIH0gZnJvbSAnLi9jb21wb25lbnQvbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLWluZm8vbWF0LXBhc3N3b3JkLXN0cmVuZ3RoLWluZm8uY29tcG9uZW50Jztcbi8vIGV4cG9ydCB7TWF0UGFzc1RvZ2dsZVZpc2liaWxpdHlDb21wb25lbnR9IGZyb20gJy4vY29tcG9uZW50L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5L21hdC1wYXNzLXRvZ2dsZS12aXNpYmlsaXR5LmNvbXBvbmVudCc7XG4vLyBleHBvcnQge01hdFBhc3N3b3JkU3RyZW5ndGhWYWxpZGF0b3J9IGZyb20gJy4vdmFsaWRhdG9yL21hdC1wYXNzd29yZC1zdHJlbmd0aC12YWxpZGF0b3InO1xuLy8gdmFsaWRhdG9yXG5leHBvcnQge1JlZ0V4cFZhbGlkYXRvcn0gZnJvbSAnLi92YWxpZGF0b3IvcmVnZXhwLmNsYXNzJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc0Jhck1vZHVsZSxcbiAgICBNYXRDYXJkTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgTWF0UmlwcGxlTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBNYXRQYXNzd29yZFN0cmVuZ3RoQ29tcG9uZW50LFxuICAgIE1hdFBhc3N3b3JkU3RyZW5ndGhJbmZvQ29tcG9uZW50LFxuICAgIE1hdFBhc3NUb2dnbGVWaXNpYmlsaXR5Q29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE1hdFBhc3N3b3JkU3RyZW5ndGhDb21wb25lbnQsXG4gICAgTWF0UGFzc3dvcmRTdHJlbmd0aEluZm9Db21wb25lbnQsXG4gICAgTWF0UGFzc1RvZ2dsZVZpc2liaWxpdHlDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRQYXNzd29yZFN0cmVuZ3RoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxNYXRQYXNzd29yZFN0cmVuZ3RoTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBNYXRQYXNzd29yZFN0cmVuZ3RoTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXVxuICAgIH07XG4gIH1cbn1cbiJdfQ==