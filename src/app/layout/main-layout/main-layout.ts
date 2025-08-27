import { Component } from '@angular/core';
import { MLayFooter } from './components/m-lay-footer/m-lay-footer';
import { MLayMain } from './components/m-lay-main/m-lay-main';

@Component({
  selector: 'app-main-layout',
  imports: [MLayFooter, MLayMain],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss'
})
export class MainLayout {

}
