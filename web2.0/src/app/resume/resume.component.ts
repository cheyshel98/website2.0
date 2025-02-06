import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent {

  resumeData:any = [
    {
      role: 'Software Engineer I',
      company: 'Windstream',
      time: 'Nov 2020 - Jan 2025',
      duties: [
        "Collaborated as a team to provide support to customer facing apps using Angular and Typescript",
        "Devised a plan with business leaders to implement new features",
        "Maintained existing features with direction from business leaders",
        "Utilized Swagger to view API details and check functionality",
        "Refactored aging code in HTML, CSS, and TypeScript",
        "Reviewed code and gave feedback using Azure DevOps",
        "Evaluated apps for possible improvements",
        "Planned action items for improving evaluated app areas",
        "Created wireframes with Figma to present how features would look and function"
      ],
    },
    {
      role: 'Professional Assistant I',
      company: 'UADA State Extension Office',
      time: 'Feb 2020 - Nov 2020',
      duties: [
        "Developed Web Apps using Django, JavaScript, CSS, and HTML",
        "Programmed apps for internal use and external use",
        "Designed concepts to be implemented using Adobe XD",
        "Collaborated with stakeholders to plan new features and designs",
        "Monitored development schedule and rolled out apps and patches accordingly",
        "Developed designs to work within accessibility guidelines and laws"
      ],
    },
    {
      role: 'Technical Assistant I',
      company: 'UADA State Extension Office',
      time: 'Feb 2019 - Feb 2020',
      duties: [
        "Supported all 75 counties in Arkansas with technical expertise",
        "Responded to multiple tickets concurrently",
        "Solved issues remotely as well as locally",
        "Created concise and easy to digest instructions for Multi-Factor Authentication",
        "Collaborated on website redesign writing custom HTML and CSS using OU Campus",
        "Deployed images to computers and set up computer environments"
      ],
    },
    {
      role: 'Help-desk Technician',
      company: 'UALR College of Engineering and Information Technology',
      time: 'Aug 2016 - Feb 2019',
      duties: [
        "Diagnosed issues in various software and hardware while offering excellent customer service",
        "Communicated with staff and students in a professional environment",
        "Solved multiple tickets concurrently and completed them in a timely manner",
        "Maintained and updated machines on various operating systems including Mac OS, Windows, and HP Thin Pro",
        "Supported hardware of machines out of warranty",
        "Drafted user documentation",
        "Managed users in Active Directory"
      ],
    },
  ];


}
