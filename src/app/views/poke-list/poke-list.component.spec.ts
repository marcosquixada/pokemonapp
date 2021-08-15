import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PokeListComponent } from './poke-list.component';

describe('PokeListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        PokeListComponent
      ], schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  it('should create the poke list', () => {
    const fixture = TestBed.createComponent(PokeListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have at least 1 pokemon`, async () => {
    const fixture = TestBed.createComponent(PokeListComponent);
    const app = fixture.debugElement.componentInstance;
    await app.getPokes();
    expect(app.pokesBackup.length).toBeGreaterThanOrEqual(1);
  });

  it(`should search for abra`, async() => {
    const fixture = TestBed.createComponent(PokeListComponent);
    const app = fixture.debugElement.componentInstance;
    await app.getPokes();
    app.searchPokemon({ target: { value: 'abra' } });

    expect(app.pokesNext.length).toBeGreaterThanOrEqual(1);
  });
});
