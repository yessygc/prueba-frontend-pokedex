import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertsService } from 'src/app/services/alerts/alerts.service';
import { PagesService } from 'src/app/services/pages/pages.service';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  public titleSection$: Observable<string>;
  public locationBack$: Observable<string>;
  public subtitleSection$: Observable<string>;

  private backRoute: string = "";

  constructor(
    private pageService: PagesService,
    private router: Router,
    private alertsService: AlertsService,
    private dialog: MatDialog,
    private sharedService: SharedService,
  ) {
    this.titleSection$ = pageService.titleSection;
    this.locationBack$ = pageService.locationBack;
    this.subtitleSection$ = pageService.subtitleSection;

  }
    ngOnInit() {}

    goBack() {
      if (this.backRoute != "") {
        this.router.navigate([this.backRoute]);
      }
    }

  }