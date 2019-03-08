import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/welcome/login/login.component';
import { CommonComponent } from './components/common/common.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { DashboardComponent } from './components/common/dashboard/dashboard.component';
import { DepartmentComponent } from './components/common/Masters/department/department.component';
import { Category1Component } from './components/common/Masters/category1/category1.component';
import { Category2Component } from './components/common/Masters/category2/category2.component';
import { Category3Component } from './components/common/Masters/category3/category3.component';
import { CityComponent } from './components/common/Masters/city/city.component';
import { SiteComponent } from './components/common/Masters/site/site.component';
import { ZoneComponent } from './components/common/Masters/zone/zone.component';
import { UserMasterComponent } from './components/common/Masters/user-master/user-master.component';
import { SupplierMasterComponent } from './components/common/Masters/supplier-master/supplier-master.component';
import { EmployeeMasterComponent } from './components/common/Masters/employee-master/employee-master.component';
import { AssetControlComponent } from './components/common/AssetControl/asset-control/asset-control.component';
import { DownloadDataComponent } from './components/common/ImportUtility/download-data/download-data.component';
import { AssetAuditComponent } from './components/common/AssetAudit/asset-audit/asset-audit.component';
import { AssetsByCategoryComponent } from './components/common/Reports/assets-by-category/assets-by-category.component';
import { AssetsByLocationComponent } from './components/common/Reports/assets-by-location/assets-by-location.component';
import { AssetsByUserDepartmentComponent } from './components/common/Reports/assets-by-user-department/assets-by-user-department.component';
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
import { AssetsByOwnerDepartmentComponent } from './components/common/Reports/assets-by-owner-department/assets-by-owner-department.component';
import { OwnerDepartmentCategorywiseComponent } from './components/common/SummaryReports/owner-department-categorywise/owner-department-categorywise.component';
import { OwnerDepartmentLocationwiseComponent } from './components/common/SummaryReports/owner-department-locationwise/owner-department-locationwise.component';
import { UserDepartmentCategorywiseComponent } from './components/common/SummaryReports/user-department-categorywise/user-department-categorywise.component';
import { UserDepartmentLocationwiseComponent } from './components/common/SummaryReports/user-department-locationwise/user-department-locationwise.component';
import { CostCenterCategorywiseComponent } from './components/common/SummaryReports/cost-center-categorywise/cost-center-categorywise.component';
import { CostCenterLocationwiseComponent } from './components/common/SummaryReports/cost-center-locationwise/cost-center-locationwise.component';
import { ProfitCenterCategorywiseComponent } from './components/common/SummaryReports/profit-center-categorywise/profit-center-categorywise.component';
import { ProfitCenterLocationwiseComponent } from './components/common/SummaryReports/profit-center-locationwise/profit-center-locationwise.component';
import { AccessControlComponent } from './components/common/File/AdminSetup/access-control/access-control.component';
import { ExistingRecordExcelUploadComponent } from './components/common/File/AssetGrouping/existing-record-excel-upload/existing-record-excel-upload.component';
import { ChangePasswordComponent } from './components/common/File/change-password/change-password.component';
import { RoleMasterComponent } from './components/common/Masters/role-master/role-master.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TreeModule } from 'angular-tree-component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { EngineService } from './services/engine.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { DndModule } from 'ng2-dnd';
import { Ng2SmartTableModule } from "ng2-smart-table";


@NgModule({
  declarations: [
    WelcomeComponent,
    LoginComponent,
    CommonComponent,
    AppComponent,
    DashboardComponent,
    DepartmentComponent,
    Category1Component,
    Category2Component,
    Category3Component,
    CityComponent,
    SiteComponent,
    ZoneComponent,
    UserMasterComponent,
    SupplierMasterComponent,
    EmployeeMasterComponent,
    AssetControlComponent,
    DownloadDataComponent,
    AssetAuditComponent,
    AssetsByCategoryComponent,
    AssetsByLocationComponent,
    AssetsByUserDepartmentComponent,
    AssetsByEmployeeComponent,
    AssetsByStatusComponent,
    AssetsAllocationComponent,
    AssetsByOwnerDepartmentComponent,
    OwnerDepartmentCategorywiseComponent,
    OwnerDepartmentLocationwiseComponent,
    UserDepartmentCategorywiseComponent,
    UserDepartmentLocationwiseComponent,
    CostCenterCategorywiseComponent,
    CostCenterLocationwiseComponent,
    ProfitCenterCategorywiseComponent,
    ProfitCenterLocationwiseComponent,
    HhtLogReportComponent,
    PrintLogReportComponent,
    NewAssetsReportComponent,
    WriteOffReportComponent,
    HistoryReportComponent,
    ErrorLogComponent,
    DatabaseBackupComponent,
    AboutUsComponent,
    RoleMasterComponent,
    AccessControlComponent,
    ExistingRecordExcelUploadComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatButtonModule,
    TreeModule.forRoot(),
    HttpModule,
    HttpClientModule,
    MatExpansionModule,
    CookieModule.forRoot(),
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxDatatableModule,
    NgxChartsModule,
    NgxDnDModule,
    DndModule.forRoot(),
    Ng2SmartTableModule

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [EngineService],
  bootstrap: [AppComponent]
})
export class AppModule { }
