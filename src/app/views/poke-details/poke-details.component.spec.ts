import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokeDetailsComponent } from './poke-details.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        PokeDetailsComponent
      ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the details component', () => {
    const fixture = TestBed.createComponent(PokeDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should search 'Ampharos'`, (async () => {
    const fixture = TestBed.createComponent(PokeDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    await app.getPokes('pl1-1');
    expect(app.poke.name).toEqual('Ampharos');
  }));

  it(`should have as title 'pokedex'`, async() => {
    const fixture = TestBed.createComponent(PokeDetailsComponent);
    const app = fixture.debugElement.componentInstance;
    await app.getPokes('pl1-1');
    console.log(app.poke);
    expect(app.poke.types.length).toBeGreaterThanOrEqual(1);
  });
});
