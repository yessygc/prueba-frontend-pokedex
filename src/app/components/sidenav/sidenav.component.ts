import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { navbarData } from './nav-data';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SideNavComponent implements OnInit {

  
  public navData: any = navbarData;
  public menu: boolean = false;

  constructor(
    public dialog: MatDialog,
    private alertsService: AlertsService,
  ) { }

  ngOnInit() {
  }

  

}
