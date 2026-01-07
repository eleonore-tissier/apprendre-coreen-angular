import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammarContentComponent } from './grammar-content.component';

describe('GrammarContentComponent', () => {
  let component: GrammarContentComponent;
  let fixture: ComponentFixture<GrammarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrammarContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrammarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
