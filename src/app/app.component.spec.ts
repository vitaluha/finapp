import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { componentFactoryName } from '@angular/compiler';
import { Stock } from './stock/stock.model';
// import { Stock } from "./stock/stock.model";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  describe('app setup', () => {
    let fixture, app;
    beforeEach(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
    });

    it('should create the app', () => {
      expect(app).toBeTruthy();
    });

    it(`should have as title 'Finapp'`, () => {
      expect(app.title).toEqual('Finapp');
    });

    it('should render title in a h1 tag', () => {
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Finapp - lookup a stock!');
    });

    describe('"stockChange"', () => {
      it('should set stock symbol', () => {
        const mockEvent = {
          target: {
            value: 'FB'
          }
        };
        app.stockChange(mockEvent);

        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h2').textContent).toContain(
          '10'
          );
        });
      });
    });
  });
