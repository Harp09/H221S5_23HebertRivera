import { Component } from '@angular/core';
import { IpInfoService } from '../../services/ip-info.service';

@Component({
  selector: 'app-my-ip',
  templateUrl: './my-ip.component.html',
  styleUrls: ['./my-ip.component.css']
})
export class MyIpComponent {
  myIp: string | null = null;
  loading: boolean = false;

  constructor(private ipInfoService: IpInfoService) {}

  getMyIP(): void {
    this.loading = true;
    this.ipInfoService.getMyIP().subscribe(
      (ip: string) => {
        this.myIp = ip;
        this.loading = false;
      },
      (error: any) => {
        console.error('Error getting IP:', error);
        this.loading = false;
      }
    );
  }
}
