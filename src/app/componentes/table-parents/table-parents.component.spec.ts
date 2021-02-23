import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableParentsComponent } from './table-parents.component';

describe('TableParentsComponent', () => {
  let component: TableParentsComponent;
  let fixture: ComponentFixture<TableParentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableParentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableParentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
