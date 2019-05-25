import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DragndropmatComponent } from './dragndropmat.component';


describe('DragndropmatComponent', () => {
  let component: DragndropmatComponent;
  let fixture: ComponentFixture<DragndropmatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragndropmatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragndropmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
