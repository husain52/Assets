import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './components/common/common.component';
import { DashboardComponent } from './components/common/dashboard/dashboard.component';
import { DepartmentComponent } from './components/common/Masters/department/department.component';
import { Category1Component } from './components/common/Masters/category1/category1.component';
import { Category2Component } from './components/common/Masters/category2/category2.component';
import { Category3Component } from './components/common/Masters/category3/category3.component';
import { CityComponent } from './components/common/Masters/city/city.component';
import { SiteComponent } from './components/common/Masters/site/site.component';
import { ZoneComponent } from './components/common/Masters/zone/zone.component';
import { UserMasterComponent } from './components/common/Masters/user-master/user-master.component';
import { EmployeeMasterComponent } from './components/common/Masters/employee-master/employee-master.component';
import { SupplierMasterComponent } from './components/common/Masters/supplier-master/supplier-master.component';
import { AssetControlComponent } from './components/common/AssetControl/asset-control/asset-control.component';
import { DownloadDataComponent } from './components/common/ImportUtility/download-data/download-data.component';
import { AssetAuditComponent } from './components/common/AssetAudit/asset-audit/asset-audit.component';
import { AssetsByCategoryComponent } from './components/common/Reports/assets-by-category/assets-by-category.component';
import { AssetsByLocationComponent } from './components/common/Reports/assets-by-location/assets-by-location.component';
import { AssetsByUserDepartmentComponent } from './components/common/Reports/assets-by-user-department/assets-by-user-department.component';
import { AssetsByOwnerDepartmentComponent } from './components/common/Reports/assets-by-owner-department/assets-by-owner-department.component';
import { AssetsByEmployeeComponent } from './components/common/Reports/assets-by-employee/assets-by-employee.component';
import { AssetsByStatusComponent } from './components/common/Reports/assets-by-status/assets-by-status.component';
import { AssetsAllocationComponent } from './components/common/Reports/assets-allocation/assets-allocation.component';
import { HhtLogReportComponent } from './components/common/Reports/hht-log-report/hht-log-report.component';
import { PrintLogReportComponent } from './components/common/Reports/print-log-report/print-log-report.component';
import { NewAssetsReportComponent } from './components/common/Reports/new-assets-report/new-assets-report.component';
import { WriteOffReportComponent } from './components/common/Reports/write-off-report/write-off-report.component';
import { HistoryReportComponent } from './components/common/Reports/history-report/history-report.component';
import { ErrorLogComponent } from './components/common/Tools/error-log/error-log.component';
import { DatabaseBackupComponent } from './components/common/Tools/database-backup/database-backup.component';
import { AboutUsComponent } from './components/common/AboutUs/about-us/about-us.component';
import { OwnerDepartmentCategorywiseComponent } from './components/common/SummaryReports/owner-department-categorywise/owner-department-categorywise.component';
import { OwnerDepartmentLocationwiseComponent } from './components/common/SummaryReports/owner-department-locationwise/owner-department-locationwise.component';
import { UserDepartmentCategorywiseComponent } from './components/common/SummaryReports/user-department-categorywise/user-department-categorywise.component';
import { CostCenterCategorywiseComponent } from './components/common/SummaryReports/cost-center-categorywise/cost-center-categorywise.component';
import { CostCenterLocationwiseComponent } from './components/common/SummaryReports/cost-center-locationwise/cost-center-locationwise.component';
import { UserDepartmentLocationwiseComponent } from './components/common/SummaryReports/user-department-locationwise/user-department-locationwise.component';
import { ProfitCenterLocationwiseComponent } from './components/common/SummaryReports/profit-center-locationwise/profit-center-locationwise.component';
import { ProfitCenterCategorywiseComponent } from './components/common/SummaryReports/profit-center-categorywise/profit-center-categorywise.component';
import { ExistingRecordExcelUploadComponent } from './components/common/File/AssetGrouping/existing-record-excel-upload/existing-record-excel-upload.component';
import { ChangePasswordComponent } from './components/common/File/change-password/change-password.component';
import { RoleMasterComponent } from './components/common/Masters/role-master/role-master.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AccessControlComponent } from './components/common/File/AdminSetup/access-control/access-control.component';
import { LoginComponent } from './components/welcome/login/login.component';


const appRoutes: Routes = [
  {
    path: '', component: WelcomeComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  },
  {
    path: 'dashboard', component: CommonComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'utility/access-control', component: AccessControlComponent },
      { path: 'utility/existing-record-excel-upload', component: ExistingRecordExcelUploadComponent },
      { path: 'utility/change-password', component: ChangePasswordComponent },
      { path: 'masters/role-master', component: RoleMasterComponent },
      { path: 'masters/department', component: DepartmentComponent },
      { path: 'masters/category1', component: Category1Component },
      { path: 'masters/category2', component: Category2Component },
      { path: 'masters/category3', component: Category3Component },
      { path: 'masters/city', component: CityComponent },
      { path: 'masters/site', component: SiteComponent },
      { path: 'masters/zone', component: ZoneComponent },
      { path: 'masters/user-master', component: UserMasterComponent },
      { path: 'masters/employee-master', component: EmployeeMasterComponent },
      { path: 'masters/supplier-master', component: SupplierMasterComponent },
      { path: 'asset-control', component: AssetControlComponent },
      { path: 'download-data', component: DownloadDataComponent },
      { path: 'asset-audit', component: AssetAuditComponent },
      { path: 'reports/category', component: AssetsByCategoryComponent },
      { path: 'reports/location', component: AssetsByLocationComponent },
      { path: 'reports/user-department', component: AssetsByUserDepartmentComponent },
      { path: 'reports/owner-department', component: AssetsByOwnerDepartmentComponent },
      { path: 'reports/employee', component: AssetsByEmployeeComponent },
      { path: 'reports/status', component: AssetsByStatusComponent },
      { path: 'reports/assets-allocation', component: AssetsAllocationComponent },
      { path: 'reports/hht-log', component: HhtLogReportComponent },
      { path: 'reports/print-log', component: PrintLogReportComponent },
      { path: 'reports/new-assets', component: NewAssetsReportComponent },
      { path: 'reports/writeoff', component: WriteOffReportComponent },
      { path: 'reports/history', component: HistoryReportComponent },
      { path: 'summary-reports/owner-department-categorywise', component: OwnerDepartmentCategorywiseComponent },
      { path: 'summary-reports/owner-department-locationwise', component: OwnerDepartmentLocationwiseComponent },
      { path: 'summary-reports/user-department-categorywise', component: UserDepartmentCategorywiseComponent },
      { path: 'summary-reports/user-department-locationwise', component: UserDepartmentLocationwiseComponent },
      { path: 'summary-reports/cost-center-categorywise', component: CostCenterCategorywiseComponent },
      { path: 'summary-reports/cost-center-locationwise', component: CostCenterLocationwiseComponent },
      { path: 'summary-reports/profit-center-categorywise', component: ProfitCenterCategorywiseComponent },
      { path: 'summary-reports/profit-center-locationwise', component: ProfitCenterLocationwiseComponent },
      { path: 'tools/error-log', component: ErrorLogComponent },
      { path: 'tools/dbbk', component: DatabaseBackupComponent },
      { path: 'about-us', component: AboutUsComponent },
    ]
  }
  ,
  {
    path: 'not-found',
    component: WelcomeComponent,
    data: { message: 'Page not found!' }
  },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
