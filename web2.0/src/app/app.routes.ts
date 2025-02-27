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
import { ExperimentsComponent } from './experiments/experiments/experiments.component';


export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'portfolio', component: PortfolioComponent},
    {path: 'portfolio/ui-ux', component: UiUxComponent},
    {path: 'portfolio/web-design', component: WebDesignComponent},
    {path: 'portfolio/graphic-design', component: GraphicDesignComponent},
    {path: 'portfolio/motion-graphics', component: MotionGraphicsComponent},
    {path: 'resume', component: ResumeComponent},
    //{path: 'contact', component: ContactComponent},
    {path: 'experiments', component: ExperimentsComponent},
    {path: '**', component: PageNotFoundComponent}
];
