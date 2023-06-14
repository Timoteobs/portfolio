export interface Experience {
  title: string;
  date: string;
  office: string;
  company: string;
  order: number;
}

export const ExperienceList: Experience[] = [
  {
    company: "Motz",
    date: "set de 2022 - o momento",
    title: "Desenvolvedor Mobile React Native",
    office: "Front-end, mobile",
    order: 1,
  },
  {
    company: "Gymtime",
    date: "fev de 2021 - o momento",
    title: "Co-Founder",
    office: "Front-end, mobile",
    order: 0,
  },
  {
    company: "Sanar",
    date: "jun de 2022 - set de 2022",
    title: "Desenvolvedor Front-end",
    office: "Front-end",
    order: 2,
  },
  {
    company: "INSOLE",
    date: "mar de 2021 - jun de 2022",
    title: "Desenvolvedor",
    office: "Front-end, VueJS, JS, React, React Native",
    order: 3,
  },
  {
    company: "Kurier",
    date: "dez de 2019 - mar de 2021",
    title: "Desenvolvedor Jr. A",
    office: "FullStak, Angular, Delphi, Sql Server",
    order: 4,
  },
  {
    company: "Kurier",
    date: "dez de 2019 - mar de 2021",
    title: "Consultor de Atendimento e Suporte",
    office: "Atendimento, Sql Server",
    order: 5,
  },
  {
    company: "Kurier",
    date: "mar de 2018 - out de 2018",
    title: "Estagiário",
    office: "Atendimento, Sql Server",
    order: 6,
  },
];
