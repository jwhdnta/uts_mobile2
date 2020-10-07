import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComputerService } from '../computer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  form: FormGroup;
  constructor(private computerService: ComputerService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      jenis: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      foto: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      merk: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      harga: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      stok: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    })
  }

  onSubmit(){
    // console.log(this.form);
    this.computerService.addProduct(this.form.value);
    var id = this.form.value.id;
    var jenis = this.form.value.jenis;
    this.form.reset(this.form.value);
    if(jenis === 'GPU') this.router.navigate(['./computer/admin']);
    else if(jenis === 'RAM') this.router.navigate(['./computer/create/ram/' + id]);
    else if(jenis === 'CPU') this.router.navigate(['./computer/create/cpu/' + id]);
    else if(jenis === 'Motherboard') this.router.navigate(['./computer/create/motherboard/' + id]);
  }
}
