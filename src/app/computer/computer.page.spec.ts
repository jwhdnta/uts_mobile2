import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComputerPage } from './computer.page';

describe('ComputerPage', () => {
  let component: ComputerPage;
  let fixture: ComponentFixture<ComputerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComputerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
