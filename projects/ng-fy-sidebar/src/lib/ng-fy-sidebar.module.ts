import { NgModule } from '@angular/core';
import { NgFySidebarComponent } from './ng-fy-sidebar.component';
import { NgFySidebarItemComponent } from './components/ng-fy-sidebar-item/ng-fy-sidebar-item.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { clickOutsideDirective } from './directives/clickOutside.directive';
import { NgFyRippleModule } from 'ng-fy-ripple';

@NgModule({
  declarations: [
    NgFySidebarComponent,
    NgFySidebarItemComponent,
    clickOutsideDirective
  ],
  imports: [
    CommonModule,
    NgFyRippleModule
  ],
  exports: [NgFySidebarComponent]
})
export class NgFySidebarModule { }
