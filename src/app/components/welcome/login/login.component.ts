import { Component, OnInit } from '@angular/core';
import { EngineService } from '../../../services/engine.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  students: any[] = [];

  constructor(private _engineService: EngineService) { }

  ngOnInit() {
    // this._engineService.getDummyData('http://localhost:3000/getStudentData').then(res => {
    //   console.log(res);
    //   // this.students = ;
    //   // console.log(JSON.stringify(res));
    // }
    // ).catch();
  }


}
