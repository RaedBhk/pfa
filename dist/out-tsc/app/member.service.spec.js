import { TestBed, inject } from '@angular/core/testing';
import { MemberService } from './member.service';
describe('MemberService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [MemberService]
        });
    });
    it('should ...', inject([MemberService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=/home/lighto/Desktop/pfa/pfa/src/app/member.service.spec.js.map