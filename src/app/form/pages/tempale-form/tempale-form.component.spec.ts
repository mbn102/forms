import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TempaleFormComponent } from './tempale-form.component';

describe('TempaleFormComponent', () => {
  let component: TempaleFormComponent;
  let fixture: ComponentFixture<TempaleFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempaleFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TempaleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
