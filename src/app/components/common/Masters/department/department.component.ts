import { Component, OnInit } from '@angular/core';
import { EngineService } from '../../../../services/engine.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  loadingIndicator = false;
  data = [];
  department = [{ label: 'User Department' }, { label: 'Owner Department' }];
  selectedDepartment = 0;
  rows = [{ label: 'User Department', data: [] }, { label: 'Owner Department', data: [] }];
  columns = [{ name: 'ID', prop: 'Oid' }, { name: 'Department', prop: 'Department' }];
  constructor(private _engineService: EngineService) {
    this._engineService.getDummyData('https://api.mockaroo.com/api/4f832bb0?count=100&key=10e25740').then(res => {
      this.data = res;
      this.rows[0].data = res;
      this.rows[1].data = res;
    }).catch(err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }
  onActivate() {
  }
  onSelect() { }
  onDepartmentSelect(id) { }
}
