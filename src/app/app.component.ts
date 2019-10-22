import { Component } from '@angular/core';
import { NgFySidebarData } from 'projects/ng-fy-sidebar/src/public-api';

@Component({
  selector: 'mat-ta-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarData: NgFySidebarData = {
    logo: "https://www.biryudumkitap.com/img/logo-alt.png",
    mobileLogo:"https://www.biryudumkitap.com/img/logo-default.png",
    sidebarClosed:true,
    sidebarData: [],
    topbarDataRight: [
      {
        title: "John Doe",
        icon: "<i class='material-icons'>person</i>",
        children: [
          {
            title: "Settings",
            icon: "<i class='material-icons'>settings_applications</i>",
          },
          {
            title: "Logout",
            icon: "<i class='material-icons'>exit_to_app</i>",
          },
        ]
      },
    ],
    topbarDataLeft: [
      {
        title:"",
        icon: "<i class='material-icons'>menu</i>",
        onClick:()=>{
          this.sidebarData.sidebarClosed = !this.sidebarData.sidebarClosed;
        }
      }
    ],
    mobileRightSidebar:[
      {
        icon: "<i class='material-icons'>person</i>",
        title:"John Doe",
        children:[
          {
            icon: "<i class='material-icons'>settings</i>",
            title: "Ayarlar"
          },
          {
            icon: "<i class='material-icons'>exit</i>",
            title: "Çıkış Yap"
          }
        ]
      }
    ]
  }
}