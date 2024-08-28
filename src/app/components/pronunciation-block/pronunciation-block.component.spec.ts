import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PronunciationBlockComponent } from './pronunciation-block.component';

describe('PronunciationBlockComponent', () => {
  let component: PronunciationBlockComponent;
  let fixture: ComponentFixture<PronunciationBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PronunciationBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PronunciationBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
