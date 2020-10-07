import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService } from '../../computer.service';

@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.page.html',
  styleUrls: ['./cpu.page.scss'],
})
export class CpuPage implements OnInit {
  id: string;
  form: FormGroup;
  constructor(
    private computerService: ComputerService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      baseClock: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      boostClock: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      core: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      thread: new FormControl(null, {
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

    this.computerService.addCpuData(this.id, this.form.value);
    this.form.reset(this.form.value);
    this.router.navigate(['./computer/admin']);
  }
}
