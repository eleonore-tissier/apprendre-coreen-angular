import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocBlockComponent } from './voc-block.component';

describe('VocBlockComponent', () => {
  let component: VocBlockComponent;
  let fixture: ComponentFixture<VocBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
