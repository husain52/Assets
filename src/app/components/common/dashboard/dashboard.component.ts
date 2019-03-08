import { Component, OnInit } from '@angular/core';
import { EngineService } from '../../../services/engine.service';

import * as groupby from 'json-groupby';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  data: any[] = [];
  sourceItems: any[] = [];
  listRecycled: any[] = [];
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };


  transferDataSuccess($event: any) {
      //this.receivedData.push($event);
  }

  constructor(private _engineService: EngineService) {

    this.data = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv"
      },
      
      // ... list of items
      
      {
        id: 11,
        name: "Nicholas DuBuque",
        username: "Nicholas.Stanton",
        email: "Rey.Padberg@rosamond.biz"
      }
    ];
   }

  ngOnInit() {
    this._engineService.getDummyData('../../../../assets/treeData.json').then(res => {

      this.sourceItems = Object.keys(res[0]);

       let resul = groupby(res, ['Project', 'Priority', 'LeadStatus' ]);
       console.log(resul)

      
       this.iterObj(resul);



    }).catch(err => {
      console.log('err----this._engineService.getDummyData(../../../../assets/treeData.json)');
    });

  }

  iterObj(obj) {

    for (var key in obj) {
      console.log(key + ': ' + obj[key]);
      if (obj[key] !== null && typeof obj[key] === "object") {
        // Recurse into children
        this.iterObj(obj[key]);
      }
    }
  }

   

  delete(index){
    console.log("---- Delete Called ----"+index);
    this.sourceItems.push(this.listRecycled[index]);
    this.listRecycled.splice(index,1);
    
  }

  addTo(event){
  console.log("-----Called---"+event)  
  }
  
}
