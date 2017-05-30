import { async, TestBed } from '@angular/core/testing';
import { AuthComponent } from './auth.component';
describe('AuthComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [AuthComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(AuthComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/lighto/Desktop/ppp/SiteFinal/src/app/auth/auth.component.spec.js.map