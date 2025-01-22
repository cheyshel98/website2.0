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
        "Supported customer facing apps using Angular and Typescript",
        "Provided wireframe designs using Figma for new features and new products",
        "Worked with stakeholders to plan new features and designs",
        "Followed Agile development process to develop the product at a regular pace"
      ],
    },
    {
      role: 'Professional Assistant I',
      company: 'UADA State Extension Office',
      time: 'Feb 2020 - Nov 2020',
      duties: [
        "Developed Web Apps using Django, JavaScript, CSS, and HTML",
        "Designed concepts to be implemented using Adobe XD",
        "Followed development schedule and rolled out apps and patches accordingly",
        "Ensured Web Apps were accessible to users with disabilities"
      ],
    },
    {
      role: 'Technical Assistant I',
      company: 'UADA State Extension Office',
      time: 'Feb 2019 - Feb 2020',
      duties: [
        "Provided technical support for all 75 Arkansas Counties",
        "Created and completed tickets in a timely manner",
        "Deployed computer images for new computer setup",
        "Troubleshot various issues with computers, printers, networks, and software",
        "Created technical documents to aid users"
      ],
    },
    {
      role: 'Help-desk Technician',
      company: 'UALR College of Engineering and Information Technology',
      time: 'Aug 2016 - Feb 2019',
      duties: [
        "Troubleshot and repaired various hardware and software issues",
        "Ensured proper installation of cables, operating systems, and software",
        "Created and completed Spiceworks tickets in a timely manner",
        "Communicated solutions to students and professors in a professional manner",
        "Managed users in Active Directory",
        "Provisioned Thin Clients and Update Client Software"
      ],
    },
  ];


}
