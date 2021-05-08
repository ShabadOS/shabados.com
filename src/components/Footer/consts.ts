import { FiInstagram } from 'react-icons/fi'
import { FaTwitter, FaYoutube } from 'react-icons/fa'

export const LINKS = [
  [
    {
      label: 'Products',
      links: [
        { name: 'Database', url: '/database' },
        { name: 'Viewer', url: '/viewer' },
        { name: 'Presenter', url: '/presenter' },
        { name: 'App (Android/iOS)', url: '/mobile' },
        { name: 'Gurmukhi Utilities', url: '/gurmukhi-utilities' },
        { name: 'Theme Tool', url: '/theme-tool' },
      ],
    },
    {
      label: 'Stories',
      links: [
        { name: 'Basics of Sikhi', url: '/stories/basics-of-sikhi' },
        { name: 'Sikh Inside (Livestream)', url: '/stories/sikh-inside-livestream' },
        { name: 'DGN Sounds (Livestream)', url: '/stories/dgn-sounds-livestream' },
        { name: 'Central London Gurudwara', url: '/stories/central-london-gurdwara' },
        { name: 'Sikh Student Associations', url: '/stories/sikh-student-associations' },
        { name: 'Sikh Research Institute', url: '/stories/sikh-research-institute' },
      ],
    },
  ],
  [
    {
      label: 'For Gurudwaras',
      links: [
        { name: 'Shabad OS in Gurudwaras', url: '/gurdwaras' },
        { name: 'Live Streaming', url: '/gurdwaras/livestreaming' },
      ],
    },
    {
      label: 'For Education',
      links: [
        { name: 'Shabad OS and Education', url: '/education' },
        { name: 'Camp Workshops', url: '/education/workshops' },
        { name: 'Presentations', url: '/education/presentations' },
      ],
    },
    {
      label: 'For Research',
      links: [
        { name: 'Shabad OS for Researcher', url: '/researchers' },
        { name: 'Translations', url: '/translations' },
      ],
    },
  ],
  [
    {
      label: 'Contribute',
      links: [
        { name: 'GitHub', url: 'https://git.shabados.com' },
        { name: 'Code of Conduct', url: 'https://docs.shabados.com/community/#code-of-conduct' },
        { name: 'Workflow', url: 'https://docs.shabados.com/community/how-to-contribute#workflow' },
        { name: 'Coding Guidelines', url: 'https://docs.shabados.com/community/coding-guidelines' },
        { name: 'Project Management', url: 'https://docs.shabados.com/community/project-management' },
      ],
    },
  ],
  [
    {
      label: 'Commitments',
      links: [
        { name: 'Open Source', url: '/commitments/open-source' },
        { name: 'Non-Profit', url: '/commitments/non-profit' },
        { name: 'Sustainability', url: '/commitments/sustainability' },
        { name: 'Education', url: '/commitments/education' },
        { name: 'Inclusion & Diversity', url: '/commitments/inclusion-and-diversity' },
        { name: 'Transparency', url: '/commitments/transparency' },
      ],
    },
  ],
  [
    {
      label: 'About Us',
      links: [
        { name: 'Name & Mission', url: '/about' },
        { name: 'Our Team & Leadership', url: '/about/team' },
        { name: 'News', url: '/news' },
        { name: 'Blog', url: '/blog' },
        { name: 'Partners', url: '/partners' },
        { name: 'Contact', url: '/contact' },
      ],
    },
  ],
]

export const SOCIAL = [
  { url: 'https://www.instagram.com/shabad_os/', icon: FiInstagram },
  { url: 'https://twitter.com/shabad_os', icon: FaTwitter },
  { url: 'https://www.youtube.com/channel/UCi8UjVV2Lz8H8J2Cka6iVsA', icon: FaYoutube },
]
