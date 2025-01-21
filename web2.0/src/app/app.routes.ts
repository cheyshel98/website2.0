import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UiUxComponent } from './projects/ui-ux/ui-ux.component';
import { WebDesignComponent } from './projects/web-design/web-design.component';
import { GraphicDesignComponent } from './projects/graphic-design/graphic-design.component';
import { MotionGraphicsComponent } from './projects/motion-graphics/motion-graphics.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'portfolio/projects/ui-ux', component: UiUxComponent},
    {path: 'portfolio/projects/web-design', component: WebDesignComponent},
    {path: 'portfolio/projects/graphic-design', component: GraphicDesignComponent},
    {path: 'portfolio/projects/motion-graphics', component: MotionGraphicsComponent},
    {path: 'resume', component: ResumeComponent},
    {path: 'contact', component: ContactComponent},
    {path: '**', component: PageNotFoundComponent}
];
