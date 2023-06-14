export interface Project {
  name: string;
  image: string;
  description: string;
  linkAppStore: string;
  linkGooglePlay: string;
  linkGitHub: string;
}

export const ProjectsList: Project[] = [
  {
    name: "Gymtime Go",
    description:
      'Rede social gamificada de promoção à saúde e atividade física, entregue como benefício digital que conecta os usuários através de um marketplace e apoiado pela consultora digital de bem-estar LIA, reunindo serviços de wellness e atividade física orientada seguindo o modelo "fitness on demand" (pagamento por hora utilizada), estimulando o cumprimento de desafios e superação de metas, além de promover a adoção de um estilo de vida mais saudável.',
    image:
      "https://play-lh.googleusercontent.com/MtEwTEZa0RsJWF--2tMdlC10GC_QX_sdxDyUF1TGW_NjaMftAto0NDXoCe7HvZawNA=w240-h480-rw",
    linkGooglePlay:
      "https://play.google.com/store/apps/details?id=com.gymtime.user",
    linkAppStore: "https://apps.apple.com/br/app/gymtime/id1595957760",
    linkGitHub: "",
  },
  {
    name: "Gymtime Parceiros",
    description:
      "Aplicativo para realizar checkin e checkout dos usuários que utilizam os serviços sob demanda (on-demand)",
    image:
      "https://play-lh.googleusercontent.com/oZ-HjsEr9euIvun0F6LZ5oQsU8KYanNWbksmhNN7ol3LzuqO3Lq4SpDA-z53Ey1_6IeE=w240-h480-rw",
    linkGooglePlay:
      "https://play.google.com/store/apps/details?id=com.gymtime.partner",
    linkAppStore:
      "https://apps.apple.com/br/app/gymtime-parceiros/id1597513158",
    linkGitHub: "",
  },
  {
    name: "Valorant",
    description:
      "Application consuming the Valorant Riot Games API, listing and showing details about agents and weapons.",
    image:
      "https://media.licdn.com/dms/image/C4D22AQHr11BSURd0Ig/feedshare-shrink_2048_1536/0/1675716797200?e=1689811200&v=beta&t=0C9w8SrKWEwVgJ1U6HUEYc6Z8fC6KhzgdInaEqiGCDU",
    linkGooglePlay: "",
    linkAppStore: "",
    linkGitHub: "https://github.com/Timoteobs/vavas",
  },
];
