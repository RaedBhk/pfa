var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input } from '@angular/core';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';
import { BROWSER_SANITIZATION_PROVIDERS } from "@angular/platform-browser/src/browser";
export var ProfileImageDirective = (function () {
    function ProfileImageDirective(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
    }
    ProfileImageDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("http://localhost:3000/api/pic/" + "5925a3b473845c1d770998e9")
            .map(function (image) { return image.json(); })
            .subscribe(function (data) {
            _this.imageData = 'data:image/png;base64,' + data;
        });
    };
    __decorate([
        Input('profile-image'), 
        __metadata('design:type', Number)
    ], ProfileImageDirective.prototype, "profileId", void 0);
    ProfileImageDirective = __decorate([
        Directive({
            selector: '[profile-image]',
            providers: [BROWSER_SANITIZATION_PROVIDERS],
            host: {
                '[src]': 'sanitizer.bypassSecurityTrustUrl(imageData)'
            }
        }), 
        __metadata('design:paramtypes', [Http, DomSanitizer])
    ], ProfileImageDirective);
    return ProfileImageDirective;
}());
//# sourceMappingURL=/home/lighto/Desktop/pfa/pfa/src/app/profile-image.directive.js.map