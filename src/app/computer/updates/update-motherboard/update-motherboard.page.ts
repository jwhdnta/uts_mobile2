import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ComputerService } from '../../computer.service';
import { Computer } from '../../model/computer.model';
import { Motherboard } from '../../model/motherboard.model';

@Component({
  selector: 'app-update-motherboard',
  templateUrl: './update-motherboard.page.html',
  styleUrls: ['./update-motherboard.page.scss'],
})
export class UpdateMotherboardPage implements OnInit {
  form: FormGroup;
  computer: Computer;
  mobo: Motherboard;
  constructor(
    private activatedRoute: ActivatedRoute,
    private computerService: ComputerService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')) {return;}
      const id = paramMap.get('id');
      this.computer = this.computerService.getComputer(id);
      this.mobo = this.computerService.getMotherBoard(id);
    });

    var photos = this.computer.foto.join(",");
    var processorAccess = this.mobo.processorAccess.join(",");

    this.form = new FormGroup({
      foto: new FormControl(photos, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merk: new FormControl(this.computer.merk, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(this.computer.model, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(this.computer.harga, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(this.computer.stok, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      chipset: new FormControl(this.mobo.chipset, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),  
      processorAccess: new FormControl(processorAccess, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),  
    })
  }

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Update',
      message: 'Apakah yakin ingin melakukan update?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Update',
          handler: () => this.onSubmit()
        }
      ]
    });
    await alert.present();
  }

  onSubmit(){
    // console.log(this.form.value);
    this.computerService.updateMobo(this.computer.id, this.form.value, this.form.value);
    this.router.navigate(['./computer/admin']);
  }
}
