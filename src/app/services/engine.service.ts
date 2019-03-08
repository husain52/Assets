import { RequestOptions, Headers, Http } from '@angular/http';
import { OnInit, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CookieService } from 'ngx-cookie';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import * as crypto from 'crypto-js';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpParameterCodec } from '@angular/common/http';
import * as moment from 'moment';

@Injectable()
export class EngineService implements OnInit {
  SHOW_PROGRESS_BAR = false;
  headers: Headers;
  options: RequestOptions;
  // baseUrl = 'http://localhost:3979/api/';
  // loginUrl = 'http://localhost:3979/token';

  baseUrl = 'http://lakshyawebapi.rlmc.in/api/';
  loginUrl = 'http://lakshyawebapi.rlmc.in/token';

  URL: string;
  users: any;
  excel: any;
  excelData: any[] = [];
  excelHeaders: any[] = [];
  excelOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Your title',
    useBom: true,
    noDownload: false,
    headers: []
  };
  userRole: string;
  isClient: string;
  currentRoute: string;
  leadViewer_LeadArray: any[] = [];
  leadViewer_SelectedLead = -1;

  private teamSelection = new Subject<any>();
  private dashboardState = new Subject<any>();
  private byMeLeadCounter = new Subject<any>();
  private forMeLeadCounter = new Subject<any>();
  private closeMod = new Subject<any>();


  constructor(private http: Http, private httpC: HttpClient, private _cookieService: CookieService, private router: Router) {
    this.setHeaders();
  }

  ngOnInit() {
  }

  toggle_SHOW_PROGRESS_BAR(state?: boolean) {
    if (state != null) {
      this.SHOW_PROGRESS_BAR = state;
      return;
    } else {
      this.SHOW_PROGRESS_BAR = !this.SHOW_PROGRESS_BAR;
    }
  }
  // Auhtorization started

  isAuthenticated(): boolean {
    try {
      const Decrypt = crypto.AES.decrypt(this._cookieService.get('response').toString(), this._cookieService.get('Oid') + 'India');
      const decryptData = Decrypt.toString(crypto.enc.Utf8);
      const Oid = JSON.parse(decryptData).Oid.toString();
      if (this._cookieService.get('Oid') !== Oid) {
        return false;
      }
      return JSON.parse(decryptData).LoggedIn;
    } catch (err) {
      this.router.navigate(['']);
      return false;
    }
  }

  isEditAuthenticated(): boolean {
    try {
      const Decrypt = crypto.AES.decrypt(this._cookieService.get('response').toString(), this._cookieService.get('Oid') + 'India');
      const decryptData = Decrypt.toString(crypto.enc.Utf8);
      const Oid = JSON.parse(decryptData).Oid.toString();
      if (this._cookieService.get('Oid') !== Oid) {
        return false;
      }
      const userRole = JSON.parse(decryptData).UserRole;
      if (userRole === 'User') {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      this.router.navigate(['']);
      return false;
    }
  }

  isMasterAuthenticated(): boolean {
    try {
      const Decrypt = crypto.AES.decrypt(this._cookieService.get('response').toString(), this._cookieService.get('Oid') + 'India');
      const decryptData = Decrypt.toString(crypto.enc.Utf8);
      const Oid = JSON.parse(decryptData).Oid.toString();
      if (this._cookieService.get('Oid') !== Oid) {
        return false;
      }
      const userRole = JSON.parse(decryptData).UserRole;
      if (userRole === 'User') {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      this.router.navigate(['']);
      return false;
    }
  }

  validateUser() {
    const Decrypt = crypto.AES.decrypt(this._cookieService.get('response').toString(), this._cookieService.get('Oid') + 'India');
    const decryptData = Decrypt.toString(crypto.enc.Utf8);
    const Oid = JSON.parse(decryptData).Oid.toString();
    if (this._cookieService.get('Oid') !== Oid) {
      this._cookieService.removeAll();
      this.router.navigate(['']);
    } else {
      return true;
    }
  }

  // Authorization completed

  getCookieData() {
    const cookieData = crypto.AES.decrypt(this._cookieService.get('response'), this._cookieService.get('Oid') + 'India');
    this.userRole = JSON.parse(cookieData.toString(crypto.enc.Utf8)).UserRole;
  }

  updateDashboardState(dashboardState: string) {
    this.dashboardState.next({ dashboardState: dashboardState });
  }

  getDashboardState(): Observable<any> {
    return this.dashboardState.asObservable();
  }

  updateTeamSelectionState(teamSelectionState: boolean) {
    this.teamSelection.next({ teamSelectionState: teamSelectionState });
  }

  getTeamSelectionState(): Observable<any> {
    return this.teamSelection.asObservable();
  }

  updateByMeLeadCounter(count: number) {
    this.byMeLeadCounter.next({ byMeLeadCounter: count });
  }

  getByMeLeadsCounter(): Observable<any> {
    return this.byMeLeadCounter.asObservable();
  }
  updateForMeLeadCounter(count: number) {
    this.forMeLeadCounter.next({ forMeLeadCounter: count });
  }

  getForMeLeadsCounter(): Observable<any> {
    return this.forMeLeadCounter.asObservable();
  }

  closeModal() {
    this.closeMod.next(1);
  }
  getCloseModal() {
    return this.closeMod.asObservable();
  }

  setHeaders() {
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    this.headers.append('Allow', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    this.headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
    this.headers.append('Content-Type', 'application/json; charset=utf-8');
    this.options = new RequestOptions();
    this.options.headers = this.headers;
  }

  login(userName: string, password: string): Promise<any> {
    const body = new HttpParams({ encoder: new HttpFormEncodingCodec() })
      .append('grant_type', 'password')
      .append('username', userName)
      .append('password', password)
      .toString();
    return this.httpC.post(this.loginUrl, body).toPromise();
  }
  logout() {
    this._cookieService.removeAll();
  }

  getToken(): Promise<any> {
    this.URL = this.baseUrl + '/token';
    const body = {
      'username': 'user',
      'password': 'user',
      'grant_type': 'password'
    };
    return this.http.post(this.URL, body, this.options).toPromise();
  }

  checkRefreshToken() {
    try {
      const expiryTime = Number(this._cookieService.get('expires_in'));
      const startTime = moment(new Date(this._cookieService.get('time')));
      const spentTime = moment.duration(moment().diff(startTime)).asSeconds();

      const leftTime = (expiryTime - spentTime);

      if (leftTime > 1 && leftTime < 5) {
        const body = new HttpParams({ encoder: new HttpFormEncodingCodec() })
          .append('refresh_token', this._cookieService.get('refresh_token'))
          .append('grant_type', 'refresh_token')
          .toString();
        this.httpC.post(this.loginUrl, body).toPromise().then(res => {
          this._cookieService.put('token', 'bearer ' + res['access_token']);
          this._cookieService.put('refresh_token', res['refresh_token']);
          this._cookieService.put('expires_in', res['expires_in']);
          this._cookieService.put('time', moment().format());
        }).catch(err => {
        });
      } else if (leftTime < 0) {
        this._cookieService.removeAll();
        this.router.navigate(['/']);
      }
    } catch (e) {
      this.router.navigate(['']);
    }
  }
  getData(url: string, id?: any): Promise<any> {
    this.checkRefreshToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': this._cookieService.get('token')
      })
    };
    this.URL = this.baseUrl + url;
    return this.httpC.get(this.URL, httpOptions).toPromise();
  }

  getDummyData(url: string): Promise<any> {
    this.URL = url;
    return this.httpC.get(this.URL).toPromise();
  }

  postData(url: any, data: any): Promise<any> {
    this.checkRefreshToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Allow': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this._cookieService.get('token')
      })
    };
    this.URL = this.baseUrl + url;
    const body = JSON.stringify(data);
    return this.httpC.post(this.URL, body, httpOptions).toPromise();
  }

  updateData(url: any, data: any): Promise<any> {
    this.checkRefreshToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        'Allow': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this._cookieService.get('token')
      })
    };
    this.URL = this.baseUrl + url;
    const body = JSON.stringify(data);
    return this.httpC.put(this.URL, body, httpOptions).toPromise();
  }

  downloadExcel(excelData, excelName) {
    this.excelOptions.title = excelName;
    if (excelData.length > 0) {
      this.excelOptions.headers = Object.keys(excelData[0]);
    }
    this.excelData = excelData;
    this.excel = new Angular5Csv(this.excelData, excelName, this.excelOptions);
  }

  uploadFile(fileItem: File, data, filename): Promise<any> {
    const url = this.baseUrl + 'Upload/UploadFiles';
    const formData: FormData = new FormData();
    formData.append('LeadID', data.LeadID);
    formData.append('LeadNo', data.LeadNo);
    formData.append('LeadBacklogID', data.LeadBacklogID);
    formData.append('FileName', filename);
    formData.append('By', this._cookieService.get('Oid'));
    formData.append('fileItem', fileItem, filename);

    return this.httpC.post(url, formData).toPromise();
  }

}

export class HttpFormEncodingCodec implements HttpParameterCodec {
  encodeKey(k: string): string { return encodeURIComponent(k).replace(/%20/g, '+'); }

  encodeValue(v: string): string { return encodeURIComponent(v).replace(/%20/g, '+'); }

  decodeKey(k: string): string { return decodeURIComponent(k.replace(/\+/g, ' ')); }

  decodeValue(v: string): any { return decodeURIComponent(v.replace(/\+/g, ' ')); }
}
