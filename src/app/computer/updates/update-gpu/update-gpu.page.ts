import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ComputerService } from '../../computer.service';
import { Computer } from '../../model/computer.model';

@Component({
  selector: 'app-update-gpu',
  templateUrl: './update-gpu.page.html',
  styleUrls: ['./update-gpu.page.scss'],
})
export class UpdateGpuPage implements OnInit {
  form: FormGroup;
  computer: Computer;
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
    });

    var photos = this.computer.foto.join(",");
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
      })
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
    this.computerService.updateGPU(this.computer.id, this.form.value);
    this.router.navigate(['./computer/admin']);
  }
}
