import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonItemSliding, ToastController } from '@ionic/angular';
import { ComputerService } from '../computer.service';
import { Computer } from '../model/computer.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  computers: Computer[];
  constructor(
    private computersService: ComputerService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.computers = this.computersService.getAllComputers();
    // console.log(this.computers);
  }

  deleteComputer(computerId: string, jenis: string){
    this.computersService.deleteComputer(computerId, jenis);
    this.router.navigate(['./home']);
    this.presentToast();
  }

  update(computer: Computer, slidingItem: IonItemSliding){
    slidingItem.close();
    this.router.navigate(['./computer/update-' + computer.jenis + '/' + computer.id]);
  }

  async presentAlert(data: Computer, slidingItem: IonItemSliding) {
    slidingItem.close();
    const alert = await this.alertCtrl.create({
      header: 'Hapus Produk',
      message: 'Apakah yakin ingin menghapus? Jika sudah dihapus tidak bisa dikembalikan lagi.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => this.deleteComputer(data.id, data.jenis)
        }
      ]
    });
    await alert.present();
  }
  
  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Data telah dihapus.',
      duration: 1000,
      color: 'warning'
    });
    toast.present();
  }

}
