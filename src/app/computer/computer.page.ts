import { Component, OnInit } from '@angular/core';
import { ComputerService } from './computer.service';
import { Computer } from './model/computer.model';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.page.html',
  styleUrls: ['./computer.page.scss'],
})
export class ComputerPage implements OnInit {
  computers: Computer[];

  constructor(
    private computersService: ComputerService,
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.computers = this.computersService.getAllComputers();
    // console.log(this.computers);
  }
}
