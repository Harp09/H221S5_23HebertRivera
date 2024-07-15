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
  loading: boolean = false;

  constructor(private ipInfoService: IpInfoService) {}

  getIpInfo(): void {
    this.loading = true;
    this.ipInfoService.getIpInfo(this.ip).subscribe(
      (info: IpInfo) => {
        this.ipInfo = info;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error getting IP info:', error);
        this.loading = false;
      }
    );
  }
}
