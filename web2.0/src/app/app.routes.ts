import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
    { path: 'home', component: HomeComponent, data: { title: 'Home'} },
    { path: 'portfolio', component: PortfolioComponent, data: { title: 'Portfolio' } },
    { path: 'portfolio/ui-ux', component: UiUxComponent, data: { title: 'Portfolio | UI/UX' } },
    { path: 'portfolio/web-design', component: WebDesignComponent, data: { title: 'Portfolio | Web Design' } },
    { path: 'portfolio/graphic-design', component: GraphicDesignComponent, data: { title: 'Portfolio | Graphic Design' } },
    { path: 'portfolio/motion-graphics', component: MotionGraphicsComponent, data: { title: 'Portfolio | Motion Graphics' } },
    { path: 'resume', component: ResumeComponent, data: { title: 'Resume' } },
    //{ path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
    { path: 'experiments', component: ExperimentsComponent, data: { title: 'Experiments' } },
    { path: '**', component: PageNotFoundComponent, data: { title: 'Page Not Found' } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
