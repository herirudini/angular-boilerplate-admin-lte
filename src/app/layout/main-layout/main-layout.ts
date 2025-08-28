import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Previleges } from '../../_previleges';
import { IMenu } from '../../types/interfaces/menu.interface';
@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {
  menuItems: IMenu[] = [];
  constructor(private previleges: Previleges, public router: Router) {
    this.menuItems = this.previleges.getMenuList();
  }
}
