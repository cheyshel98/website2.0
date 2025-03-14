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

  skills:any = ["Angular", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS", "Figma", "Adobe XD", "Github", "Azure DevOps", "Photoshop", "Illustrator"];

  resumeExp:any = [
    {
      role: 'Software Engineer I',
      company: 'Windstream',
      time: '11/2020 - 01/2025',
      duties: [
        "Collaborated with team to develop customer facing apps using Angular and Typescript",
        "Devised plans with business leaders to implement new features",
        "Utilized Swagger to view API details and check functionality for Front End integration",
        "Refactored aging code in HTML, CSS, and Typescript",
        "Reviewed Pull Requests and provided feedback using Azure DevOps",
        "Evaluated app for improvements and planned action items within Scrum for implementation",
        "Created wireframes with Figma to present ideas and proof of concepts"
      ],
    },
    {
      role: 'Professional Assistant I',
      company: 'UADA State Extension Office',
      time: '02/2020 - 11/2020',
      duties: [
        "Developed Web Apps using Django, JavaScript, CSS, and HTML",
        "Programmed apps for internal use and external use",
        "Designed concepts to be implemented using Adobe XD",
        "Collaborated with stakeholders to plan new features and designs",
        "Developed designs to work within WCAG accessibility guidelines and federal laws"
      ],
    },
    {
      role: 'Technical Assistant I',
      company: 'UADA State Extension Office',
      time: '02/2019 - 02/2020',
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
      company: 'University of Arkansas College of EIT',
      time: '08/2016 - 02/2019',
      duties: [
        "Diagnosed issues in various software and hardware while offering excellent customer service",
        "Communicated with staff and students in a professional environment",
        "Solved multiple tickets concurrently and completed them in a timely manner in Spiceworks",
        "Maintained and updated machines on various operating systems including Mac OS, Windows, and HP Thin Pro",
        "Supported hardware of machines out of warranty",
        "Drafted user documentation",
        "Managed users in Active Directory"
      ],
    },
  ];


}
