import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPanelComponent } from './footer-panel.component';

describe('FooterPanelComponent', () => {
  let component: FooterPanelComponent;
  let fixture: ComponentFixture<FooterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
