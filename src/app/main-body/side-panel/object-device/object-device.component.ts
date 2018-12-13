import { Component, OnInit} from '@angular/core';
import { CommonServiceService } from './../../../service/common-service.service';



@Component({
  selector: 'app-object-device',
  templateUrl: './object-device.component.html',
  styleUrls: ['./object-device.component.scss'],
})
export class ObjectDeviceComponent implements OnInit {
  
  constructor( public CommonService:CommonServiceService ) { }

  mydata = this.CommonService.tempData;

  active:boolean = false;


  ngOnInit() {
    
  }

  
  onClick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var idAttr = target.attributes.id;
    this.CommonService.deviceNumber = idAttr.nodeValue; 
    alert(this.CommonService.deviceNumber);   
  }

}
