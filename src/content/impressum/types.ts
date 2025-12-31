export type ImpressumContent = {
  title: string;
  sections: {
    provider: {
      heading: string;
      name: string;
      address: string[];
    };
    contact: {
      heading: string;
      emailLabel: string;
      email: string;
    };
    responsible: {
      heading: string;
      address: string[];
    };
    contentLiability: {
      heading: string;
      paragraphs: string[];
    };
    linkLiability: {
      heading: string;
      paragraphs: string[];
    };
    copyright: {
      heading: string;
      paragraphs: string[];
    };
  };
};
