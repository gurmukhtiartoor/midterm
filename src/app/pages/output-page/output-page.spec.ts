import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputPage } from './output-page';

describe('OutputPage', () => {
  let component: OutputPage;
  let fixture: ComponentFixture<OutputPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OutputPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
