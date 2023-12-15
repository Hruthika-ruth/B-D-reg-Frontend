import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareddComponent } from './sharedd.component';

describe('ShareddComponent', () => {
  let component: ShareddComponent;
  let fixture: ComponentFixture<ShareddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShareddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
