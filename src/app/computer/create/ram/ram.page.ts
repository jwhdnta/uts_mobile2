import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService } from '../../computer.service';

@Component({
  selector: 'app-ram',
  templateUrl: './ram.page.html',
  styleUrls: ['./ram.page.scss'],
})
export class RamPage implements OnInit {
  id: string;
  form: FormGroup;
  constructor(
    private computerService: ComputerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      speed: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    })
  }

  onSubmit(){
    // console.log(this.form);
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('id')) {return;}
      this.id = paramMap.get('id');
      // console.log(this.id);
    });

    this.computerService.addRamData(this.id, this.form.value);
    this.form.reset(this.form.value);
    this.router.navigate(['./computer/admin']);
  }
}
