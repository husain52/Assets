import { Component, OnInit } from '@angular/core';
import { numericIndexGetter } from '@swimlane/ngx-datatable/release/utils';

@Component({
  selector: 'app-asset-control',
  templateUrl: './asset-control.component.html',
  styleUrls: ['./asset-control.component.scss'],
})
export class AssetControlComponent implements OnInit {
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = {};
  selectedTags: any[] = [];
  
  constructor() {
  }
  ngOnInit() {
  }
  addTag(event) {
    console.log(event);
    this.selectedTags.push(event.node.data);
  }
  removeTag(index: number) {
    this.selectedTags.slice(index);
  }

}
