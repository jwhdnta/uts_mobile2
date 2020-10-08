import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateGpuPage } from './update-gpu.page';

describe('UpdateGpuPage', () => {
  let component: UpdateGpuPage;
  let fixture: ComponentFixture<UpdateGpuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateGpuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateGpuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
