import { Component, OnInit } from '@angular/core';
import { ComputerService } from '../computer.service';
import { Computer } from '../model/computer.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  computers: Computer[];
  constructor(private computersService: ComputerService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.computers = this.computersService.getAllComputers();
    // console.log(this.computers);
  }

}
