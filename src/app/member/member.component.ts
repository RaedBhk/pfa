import {Component, OnInit, OnDestroy} from '@angular/core';
import {MemberService} from "../member.service";
import {Subscription} from "rxjs";
import {Router, ActivatedRoute} from "@angular/router";
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

var URL = 'http://localhost:3000/api/uploadcv';
@Component({
  selector: 'member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit,OnDestroy {

  member: Object;
  id: string;
    imgPath = './uploads/';

    private sub: Subscription;

  constructor(private memberService: MemberService,
              private router: Router,
              private route: ActivatedRoute,) {
  }
    public uploader:FileUploader ;

  ngOnInit() {
      this.sub = this.route.params.subscribe(
          (params: any) => {
              this.id = params['id'];
              this.imgPath+=this.id+".png";
              console.log(this.id);
              this.member = this.memberService.getMemberById(this.id).subscribe(
                  member => {
                      this.member = member.data ;

                  }
              );

          }

      );
 this.uploader= new FileUploader({url: URL+'?id='+this.id, itemAlias: 'photo'});

      this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
      //overide the onCompleteItem property of the uploader so we are
      //able to deal with the server response.
      this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
          //console.log("ImageUpload:uploaded:", item, status, response);

          console.log(item);
      };




  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}