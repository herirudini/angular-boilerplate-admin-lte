import { Component } from '@angular/core';
import { MLayFooter } from './components/m-lay-footer/m-lay-footer';
import { MLayMain } from './components/m-lay-main/m-lay-main';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-main-layout',
  imports: [MLayFooter, MLayMain, RouterLink],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {

}
