import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'my-app';
  constructor(private router: Router) {

  }
  images: string[] = [
    'assets/images/et00347867-zklzrdqjwu-portrait.jpg',
    'assets/images/et00072466-uxewjtfjhg-portrait.jpg',
    'assets/images/et00312549-evehmvnrtp-portrait.jpg',
    'assets/images/et00360172-ncsbpawyxm-portrait.jpg',
    'assets/images/et00329481-bcufavugyg-portrait.jpg',
    'assets/images/et00364543-hwdmuuayfw-portrait.jpg',
    'assets/images/et00347275-nthssccrsw-portrait.jpg',
    'assets/images/et00338378-qyrlmhwdmg-portrait.jpg',
    'assets/images/eve1.jpg',
    'assets/images/mav.jpg',
    'assets/images/et00346122-snphpyehru-portrait.jpg',
    'assets/images/et00363001-xgtxmsxmys-portrait.jpg',];
  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`])
  }
}
