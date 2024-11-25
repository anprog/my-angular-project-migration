import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RowDetailsModalComponent} from './row-details-modal.component';

describe('RowDetailsModalComponent', () => {
  let component: RowDetailsModalComponent;
  let fixture: ComponentFixture<RowDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RowDetailsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
