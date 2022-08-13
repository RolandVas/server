import { Component, OnInit } from '@angular/core';
import { DataService } from '../_service/data.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.scss']
})
export class ServerListComponent implements OnInit {
  servers: any[] = [];

  labelChack = false;

  constructor(public service: DataService) { }

  ngOnInit(): void {
    this.getServer()
  }

  /**
   * find all server in data.json and push all server to data array
   */
  getServer() {
    this.service.getData().subscribe( data => {
      this.servers.push(data['apple']['date']['durian']['server'] )
      this.servers.push(data['apple']['elderberry'][0]['huckleberry']['server'] )
      this.servers.push(data['apple']['elderberry'][1]['server'] )
      this.servers.push(data['server'] )
    })
  }

  /**
   * checks if labels in child component are valide 
   */
  labelValidation() {
    if (!this.labelChack) {
      this.labelChack = true;
    } else {
      this.labelChack = false;
    }
  }
 
}
