import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorResult } from './generator-result';

describe('GeneratorResult', () => {
  let component: GeneratorResult;
  let fixture: ComponentFixture<GeneratorResult>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneratorResult],
    }).compileComponents();

    fixture = TestBed.createComponent(GeneratorResult);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
