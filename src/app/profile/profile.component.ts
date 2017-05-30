import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {MemberService} from "../member.service";
import {FileUploader} from "ng2-file-upload";

var URL = 'http://localhost:3000/api/uploadcv';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user:Object;
    id: String;
    imgPath='./uploads/';
    uploader: FileUploader;

    constructor(private memberService : MemberService,
                private authService: AuthService,
                private router:Router) {


    }

    ngOnInit() {
        this.authService.getSprofile().subscribe(
            data => {
                this.user= data.user;
                this.id = data.user._id;
            },
            err =>{
                console.log(err);
                return false;
            }
        );
        console.log(this.id);

        this.uploader= new FileUploader({url: URL+'?id='+this.id, itemAlias: 'photo'});

        this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
        //overide the onCompleteItem property of the uploader so we are
        //able to deal with the server response.
        this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
            //console.log("ImageUpload:uploaded:", item, status, response);
            console.log(item);
        };

    }



    onEditSumbit () {

        this.memberService.setMember(this.id,this.user).subscribe(
            member => {
                this.router.navigate(['profile']);

            }
        );
        console.log(this.id);

    }

}