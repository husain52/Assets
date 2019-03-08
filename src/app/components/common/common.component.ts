import { Component, OnInit } from '@angular/core';
import { EngineService } from '../../services/engine.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent implements OnInit {
  // SHOW_PROGRESS_BAR = true;
  panelOpenState = false;
  menu = [
    {
      item1: 'Utility',
      link1: 'not-found',
      hasSubmenu: true,
      items: [
        { item2: 'Access Control', link2: '/utility/access-control', hasSubmenu: false },
        { item2: 'Existing record excel upload', link2: '/utility/existing-record-excel-upload', hasSubmenu: false },
        { item2: 'Change Password', link2: '/utility/change-password', hasSubmenu: false }
      ]
    },
    {
      item1: 'Masters',
      hasSubmenu: true,
      items: [
        { item2: 'Role', link2: '/masters/role-master', hasSubmenu: false },
        { item2: 'Department', link2: '/masters/department', hasSubmenu: false },
        { item2: 'Category 1', link2: '/masters/category1', hasSubmenu: false },
        { item2: 'Category 2', link2: '/masters/category2', hasSubmenu: false },
        { item2: 'Category 3', link2: '/masters/category3', hasSubmenu: false },
        { item2: 'City', link2: '/masters/city', hasSubmenu: false },
        { item2: 'State', link2: '/masters/state', hasSubmenu: false },
        { item2: 'Zone', link2: '/masters/zone', hasSubmenu: false },
        { item2: 'User Master', link2: '/masters/user-master', hasSubmenu: false },
        { item2: 'Employee Master', link2: '/masters/employee-master', hasSubmenu: false },
        { item2: 'Supplier Master', link2: '/masters/supplier-master', hasSubmenu: false },
        // {
        //   item2: 'Template',
        //   hasSubmenu: true,
        //   items: [
        //     { item3: 'Templete Master' },
        //     { item3: 'Templete Field' }
        //   ]
        // }
      ]
    },
    {
      item1: 'Asset Control',
      link1: '/asset-control',
      hasSubmenu: false
    },
    {
      item1: 'Import Utility',
      hasSubmenu: true,
      items: [
        { item2: 'Download Data', link2: '/download-data', hasSubmenu: false }
      ],
    },
    {
      item1: 'Asset Audit',
      link1: '/asset-audit',
      hasSubmenu: false
    },
    {
      item1: 'Reports',
      hasSubmenu: true,
      items: [
        { item2: 'Assets By Category', link2: '/reports/category', hasSubmenu: false },
        { item2: 'Assets By Location', link2: '/reports/location', hasSubmenu: false },
        { item2: 'Assets By User Department', link2: '/reports/user-department', hasSubmenu: false },
        { item2: 'Assets By Owner Department', link2: '/reports/owner-department', hasSubmenu: false },
        { item2: 'Assets By Employee', link2: '/reports/employee', hasSubmenu: false },
        { item2: 'Assets By Status', link2: '/reports/status', hasSubmenu: false },
        { item2: 'Assets Allocation', link2: '/reports/assets-allocation', hasSubmenu: false },
        { item2: 'HHT Log Report', link2: '/reports/hht-log', hasSubmenu: false },
        { item2: 'Print Log Report', link2: '/reports/print-log', hasSubmenu: false },
        { item2: 'New Assets Report', link2: '/reports/new-assets', hasSubmenu: false },
        { item2: 'Write Off Report', link2: '/reports/writeoff', hasSubmenu: false },
        { item2: 'History Report', link2: '/reports/history', hasSubmenu: false },
      ]
    },
    {
      item1: 'Summary Reports',
      hasSubmenu: true,
      items: [
        { item2: 'Owner Department Categorywise', link2: '/summary-reports/owner-department-categorywise', hasSubmenu: false },
        { item2: 'Owner Department Locationwise', link2: '/summary-reports/owner-department-locationwise', hasSubmenu: false },
        { item2: 'User Department Categorywise', link2: '/summary-reports/user-department-categorywise', hasSubmenu: false },
        { item2: 'User Department Locationwise', link2: '/summary-reports/user-department-locationwise', hasSubmenu: false },
        { item2: 'Cost Center Categorywise', link2: '/summary-reports/cost-center-categorywise', hasSubmenu: false },
        { item2: 'Cost Center Locationwise', link2: '/summary-reports/cost-center-locationwise', hasSubmenu: false },
        { item2: 'Profit Center Categorywise', link2: '/summary-reports/profit-center-categorywise', hasSubmenu: false },
        { item2: 'Profit Center Locationwise', link2: '/summary-reports/profit-center-locationwise', hasSubmenu: false }
      ]
    },
    {
      item1: 'Tools',
      hasSubmenu: true,
      items: [
        { item2: 'Error Log', link2: '/tools/error-log', hasSubmenu: false },
        { item2: 'Set Backup Path', link2: '/', hasSubmenu: false },
        { item2: 'Database backup', link2: '/tools/dbbk', hasSubmenu: false }
      ]
    },
    {
      item1: 'About Us',
      link1: '/about-us',
      hasSubmenu: false
    },
  ];
  constructor(private _engineService: EngineService) {
  }

  ngOnInit() {

  }

}
