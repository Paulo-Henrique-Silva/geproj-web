import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import { definePreset } from '@primeng/themes';
import { HttpClient, provideHttpClient } from '@angular/common/http';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideTranslateService, TranslateLoader, TranslateModule } from '@ngx-translate/core';

const MyPreset = definePreset(Lara, {
  semantic: {
    //Primary Color
    primary: {
      50: '{green.50}',
      100: '{green.100}',
      200: '{green.200}',
      300: '{green.300}',
      400: '{green.400}',
      500: '{green.500}',
      600: '{green.600}',
      700: '{green.700}',
      800: '{green.800}',
      900: '{green.900}',
      950: '{green.950}'
    },
    colorScheme: {
        light: {
            primary: {
                color: '{green.800}',
                inverseColor: '#ffffff',
                hoverColor: '{green.900}',
                activeColor: '{green.950}'
            },
            highlight: {
                background: '{green.950}',
                focusBackground: '{green.950}',
                color: '#ffffff',
                focusColor: '#ffffff'
            }
        },
        dark: {
          primary: {
            color: '{green.800}',
            inverseColor: '#ffffff',
            hoverColor: '{green.900}',
            activeColor: '{green.950}'
          },
          highlight: {
              background: '{green.950}',
              focusBackground: '{green.950}',
              color: '#ffffff',
              focusColor: '#ffffff'
          }
        }
    }
  }
});

//Localization
const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: MyPreset,
                options: {
                    darkModeSelector: '.my-app-dark'
                }
            }
        }),
    provideTranslateService({
      defaultLanguage: 'en',
    }),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: httpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
};
