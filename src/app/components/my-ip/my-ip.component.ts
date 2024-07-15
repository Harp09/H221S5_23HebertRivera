import { Component } from '@angular/core';
import { IpInfoService } from '../../services/ip-info.service';

@Component({
  selector: 'app-my-ip',
  templateUrl: './my-ip.component.html',
  styleUrls: ['./my-ip.component.css']
})
export class MyIpComponent {
  myIp: string = '';
  showIp: boolean = false;

  constructor(private ipInfoService: IpInfoService) { }

  getMyIP() {
    this.ipInfoService.getMyIP().subscribe((ip: string) => {
      this.myIp = ip;
      this.showIp = true;
    });
  }
}
