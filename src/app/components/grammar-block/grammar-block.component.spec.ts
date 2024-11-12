import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarBlockComponent } from './grammar-block.component';

describe('GrammarBlockComponent', () => {
  let component: GrammarBlockComponent;
  let fixture: ComponentFixture<GrammarBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammarBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrammarBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
