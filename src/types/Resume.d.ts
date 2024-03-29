export interface Resume {
  ProfilePic: string;
  ProfilePicHover: string;
  Name: string;
  BirthDate: string;
  JobTitle: string;
  ResumeFileName: string;
  Social: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    email?: string;
    twitch?: string;
    youtube?: string;
  };
  HI: string;
  Description: string;
  Contact: {
    email: string;
    phone: string;
    phoneLink: string;
    address: string;
    availability: string;
  };
  Skills: {
    title: string;
    percent: number;
  }[];
  Experience: {
    title: string;
    company: string;
    date: string;
    description: string;
  }[];
  Education: {
    title: string;
    company: string;
    date: string;
    description: string;
    GPA: string;
  }[];
  ProjectList: {
    title: string;
    description: string;
    link?: string;
    linkType?: string;
    img: string;
  }[];
  Projects: {
    title: string;
    description: string;
    link: string;
    img: string;
  }[];
  Languages: {
    title: string;
    level: string;
  }[];
  Certifications: {
    title: string;
    date: string;
    description: string;
    company: string;
  }[];
}
