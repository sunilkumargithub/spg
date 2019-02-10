import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CommonServiceService } from './../../../service/common-service.service';
import { RestService } from '../../../service/rest.service';
import { ObjectDetails } from './object-details.model';



var headers_object = new HttpHeaders();
headers_object.append('Content-Type', 'application/json');
headers_object.append("Authorization", "Basic " + "YWRtaW46YWRtaW4=");

const httpOptions = {
  withCredentials: true,
  headers: headers_object
};




@Component({
  selector: 'app-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.scss'],
})
export class ObjectDetailsComponent implements OnInit {

  constructor(public CommonService: CommonServiceService, private ajax: RestService) { }

  deviceDetails: ObjectDetails;
<<<<<<< HEAD

=======
  // deviceDetails;
>>>>>>> e5a09dbad56ae5598aa7c810fa0a84a75f400721

  ngOnInit() {

    this.CommonService.deviceDetails.subscribe((value) => {
<<<<<<< HEAD
      this.deviceDetails = value[0];
      //console.log (value);
=======
      this.deviceDetails = value;
      console.log ('subscribed device details value' , this.deviceDetails);
>>>>>>> e5a09dbad56ae5598aa7c810fa0a84a75f400721
    })


    // this.CommonService.deviceNumber.subscribe((value)=>{
    //   //console.log(value);
    //   this.deviceID = value[0];
    // })

  }


  status: boolean = false;
  public showhide() {
    this.status = !this.status;
  }

}
