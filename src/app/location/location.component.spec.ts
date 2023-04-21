import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTextModule } from 'primeng/inputtext';
import { LocationComponent } from './location.component';

describe('LocationComponent', () => {
  let component: LocationComponent;
  let fixture: ComponentFixture<LocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTextModule],
      declarations: [LocationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
