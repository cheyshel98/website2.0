import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, appConfig,)
  .catch((err) => console.error(err));

//solution from Ole Ersoy on Medium
//https://fireflysemantics.medium.com/turning-on-scrolltop-restoration-for-the-standalone-angular-router-afd98bd8defd

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);
bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes, inMemoryScrollingFeature)],
});