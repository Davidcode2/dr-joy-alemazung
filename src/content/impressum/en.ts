import type { ImpressumContent } from './types';

export const impressumEN: ImpressumContent = {
  title: 'Legal Notice',
  sections: {
    provider: {
      heading: 'Information provided according to § 5 TMG',
      name: 'Dr. Joy A. Alemazung',
      address: [
        'Addresse 1',
        'Straße 123',
        '73540 Heubach',
      ],
    },
    contact: {
      heading: 'Contact',
      emailLabel: 'Email:',
      email: 'info@heubach.de',
    },
    responsible: {
      heading: 'Responsible for content according to § 55 Abs. 2 RStV',
      address: [
        'Addresse 1',
        'Straße 123',
        '73540 Heubach',
      ],
    },
    contentLiability: {
      heading: 'Liability for Content',
      paragraphs: [
        'As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG (German Telemedia Act) and general laws. According to §§ 8 to 10 TMG, however, we as a service provider are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
        'Obligations to remove or block the use of information according to general laws remain unaffected by this. However, liability in this regard is only possible from the time of knowledge of a specific legal violation. Upon becoming aware of such legal violations, we will remove this content immediately.',
      ],
    },
    linkLiability: {
      heading: 'Liability for Links',
      paragraphs: [
        'Our website contains links to external third-party websites over whose content we have no control. Therefore, we cannot assume any liability for this external content. The respective provider or operator of the linked pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal content was not recognizable at the time of linking.',
        'However, permanent monitoring of the content of linked pages is not reasonable without concrete evidence of a legal violation. Upon becoming aware of legal violations, we will remove such links immediately.',
      ],
    },
    copyright: {
      heading: 'Copyright',
      paragraphs: [
        'The content and works created by the site operators on these pages are subject to German copyright law. The reproduction, editing, distribution, and any kind of use outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use.',
        'Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. Upon becoming aware of legal violations, we will remove such content immediately.',
      ],
    },
  },
};
