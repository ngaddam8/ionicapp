import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestComponetforDeploymentComponent } from './test-componetfor-deployment.component';

describe('TestComponetforDeploymentComponent', () => {
  let component: TestComponetforDeploymentComponent;
  let fixture: ComponentFixture<TestComponetforDeploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponetforDeploymentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponetforDeploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
