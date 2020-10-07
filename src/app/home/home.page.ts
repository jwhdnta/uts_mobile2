import { Component } from '@angular/core';
import { ComputerService } from '../computer/computer.service';
import { Computer } from '../computer/model/computer.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  computers: Computer[];
  constructor(
    private computersService: ComputerService
  ) {}

  ionViewWillEnter(){
    this.computers = this.computersService.getAllComputersHasStok();
    // console.log(this.computers);
  }
}
