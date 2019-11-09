import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GitusersService } from '../gitusers.service';
import { Observable } from 'rxjs';
import { forEach } from '@angular/router/src/utils/collection';
import { NgModule } from '@angular/core';
import { FilterPipe} from '../../filter.pipe';

import { ActivatedRoute, ParamMap } from '@angular/router';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gitusers',
  templateUrl: './gitusers.component.html',
  styleUrls: ['./gitusers.component.css']
})
export class GitusersComponent implements OnInit {

  constructor(private gitu: GitusersService) { }  // Dependancy Injection of a service

  // variable declaration
  users$: Observable<any>;
  g: any = [];
  T: any;
  searchd: any;
  url: any;
  h: any = [];
  flag: any = 0;
  fg: any = 0;
  repodata$: Observable<any>;

  //function to retrive data of users
  subscribetouser() {
    this.users$.subscribe((v) => {
      this.g.push(v.items);
      console.log(this.g);
      this.flag = 1;
    });
  }



  // send the request to the service for retriving thr user repository details
  getrepo(v: any) {
    this.h = [];
    this.repodata$ = this.gitu.getrepodata(v.repos_url);
    this.repodata$.subscribe((s) => {
      s.forEach(c => this.h.push(c));
    });
    this.fg = 1;
    console.log(this.h);
  }
  ngOnInit() {
    this.users$ = this.gitu.getusers();
    console.log(this.users$);
  }

}
