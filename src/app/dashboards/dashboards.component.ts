import { Component, OnInit } from '@angular/core';
import {GetDashboardsService} from "../get-dashboards.service";

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {
  private dashboards;
  constructor(private getDashboardsService:GetDashboardsService) { }

  ngOnInit() {
    this.getDashboards();
  }

  getDashboards() {
    this.getDashboardsService.getDashboards().subscribe(res=>{
      this.dashboards = JSON.parse(res._body).dashboards;
      console.log(this.dashboards);
    })
  }

  addBoard(name){
    this.getDashboardsService.addBoard(name).subscribe(res=>{
      console.log(res);
      this.getDashboards();
    })
  }

}
