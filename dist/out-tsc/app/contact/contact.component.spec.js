import { async, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
describe('ContactComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ContactComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ContactComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/home/lighto/Desktop/pfa/pfa/src/app/contact/contact.component.spec.js.map