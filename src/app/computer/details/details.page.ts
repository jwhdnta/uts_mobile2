import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComputerService } from '../computer.service';
import { Computer } from '../model/computer.model';
import { CPU } from '../model/cpu.model';
import { Motherboard } from '../model/motherboard.model';
import { Ram } from '../model/ram.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  computer: Computer;
  ram: Ram;
  cpu: CPU;
  motherboard: Motherboard;
  
  constructor(
    private computerService: ComputerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')) {return;}
      const id = paramMap.get('id');
      this.computer = this.computerService.getComputer(id);
      if(this.computer.jenis === 'CPU') this.cpu = this.computerService.getCpu(id);
      else if(this.computer.jenis === 'Motherboard') this.motherboard = this.computerService.getMotherBoard(id);
      else if(this.computer.jenis === 'Ram') this.ram = this.computerService.getRam(id);
      // console.log("loaded: " + this.loadedContact.name);
    });
  }

}
