import { Component } from '@angular/core';
import { IpInfoService, IpInfo } from '../../services/ip-info.service';

@Component({
  selector: 'app-ip-info',
  templateUrl: './ip-info.component.html',
  styleUrls: ['./ip-info.component.css']
})
export class IpInfoComponent {
  ip: string = '';
  ipInfo: IpInfo | null = null;

  constructor(private ipInfoService: IpInfoService) { }

  getIpInfo(): void {
    if (this.ip) {
      this.ipInfoService.getIpInfo(this.ip).subscribe(info => {
        this.ipInfo = info;
      }, error => {
        console.error('Error fetching IP info:', error);
      });
    } else {
      console.warn('IP address is required');
    }
  }
}
