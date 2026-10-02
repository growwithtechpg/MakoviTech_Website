// ES Module Imports for bundling by Vite
import heroWireMeshImg from '../assets/images/hero_stainless_wire_mesh_1790693822229.jpg';
import manufacturingPressImg from '../assets/images/manufacturing_press_cutting_1790693837351.jpg';

// Dedicated individual product photography
import stainlessWireMeshRollsImg from '../assets/images/stainless_wire_mesh_rolls_1790709329146.jpg';
import wireMeshScreenPanelImg from '../assets/images/wire_mesh_screen_panel_1790709342664.jpg';
import weldedMeshFilterScreenImg from '../assets/images/welded_mesh_filter_screen_1790709355397.jpg';
import wireMeshGasketsImg from '../assets/images/wire_mesh_sealing_gaskets_1790709367732.jpg';
import spinPackFilterImg from '../assets/images/spin_pack_disc_filter_1790709378989.jpg';

import {
  BUSINESS_CONFIG,
  DISPLAY_PHONE,
  GOOGLE_MAPS_URL,
  TEL_URL,
} from '../config/businessConfig';

export const SITE_IMAGES = {
  hero: heroWireMeshImg,
  manufacturing: manufacturingPressImg,
  // 5 proper dedicated product images
  stainlessSteelWireMesh: stainlessWireMeshRollsImg,
  wireMeshScreen: wireMeshScreenPanelImg,
  wireMeshFilterWeldedScreen: weldedMeshFilterScreenImg,
  gaskets: wireMeshGasketsImg,
  spinPackFilter: spinPackFilterImg,
};

export const COMPANY_INFO = {
  name: BUSINESS_CONFIG.companyName,
  businessType: 'Woven industrial wire mesh manufacturer and supplier',
  tagline: 'Precision Wire Mesh Solutions for Industrial Applications',
  kicker: 'Woven Industrial Wire Mesh Manufacturer & Supplier · Ambernath (E), Thane, Maharashtra',
  subheadline:
    'Manufacturer and supplier of stainless steel wire mesh, wire mesh screens, welded screen filters, gaskets, and spin pack filters.',
  address: {
    name: BUSINESS_CONFIG.companyName,
    line1: 'PR 504, Vishwajeet Meadows',
    line2: 'Bacbin Road, Ambernath (E)',
    line3: 'Thane - 421 501',
    line4: 'Maharashtra, India',
    fullFormatted: BUSINESS_CONFIG.address,
    googleMapsUrl: GOOGLE_MAPS_URL,
  },
  email: BUSINESS_CONFIG.email,
  phone: BUSINESS_CONFIG.phone,
  displayPhone: DISPLAY_PHONE,
  telUrl: TEL_URL,
  whatsapp: BUSINESS_CONFIG.whatsapp,
  aboutText:
    'Makovi Tech is a specialized wire mesh products manufacturer and supplier focusing on stainless steel wire mesh, wire mesh screens, wire mesh filter welded screens, gaskets, and spin pack filters.',
  manufacturingText:
    'The company operates its own manufacturing facility equipped with wire mesh press cutting machines and different sizes of cutting dies to produce exact-size diameter mesh components, circular filters, welded screens, gaskets, and related wire mesh products.',
};

export type ProductCategory =
  | 'All Products'
  | 'Woven Mesh & Screens'
  | 'Filtration Components'
  | 'Sealing & Filtration';

export interface ProductDetail {
  id: string;
  code: string;
  name: string;
  category: ProductCategory;
  description: string;
  applications: string[];
  image: string;
  schematicType: 'mesh-roll' | 'screen-grid' | 'welded-filter' | 'gasket-ring' | 'spin-pack';
}

export const PRODUCTS: ProductDetail[] = [
  {
    id: 'stainless-steel-wire-mesh',
    code: '01',
    name: 'Stainless Steel Wire Mesh',
    category: 'Woven Mesh & Screens',
    description:
      'High-grade woven stainless steel wire mesh manufactured for industrial screening, filtering, and demanding chemical and pharmaceutical environments.',
    applications: ['Plastics & Chemical', 'Filtering', 'Pharmaceutical'],
    image: SITE_IMAGES.stainlessSteelWireMesh,
    schematicType: 'mesh-roll',
  },
  {
    id: 'wire-mesh-screen',
    code: '02',
    name: 'Wire Mesh Screen',
    category: 'Woven Mesh & Screens',
    description:
      'Durable woven wire mesh screen panels engineered for material classification, particle separation, and rigorous industrial filtering systems.',
    applications: ['Filtering', 'Food Processing', 'Plastics & Chemical'],
    image: SITE_IMAGES.wireMeshScreen,
    schematicType: 'screen-grid',
  },
  {
    id: 'wire-mesh-filter-welded-screen',
    code: '03',
    name: 'Wire Mesh Filter Welded Screen',
    category: 'Filtration Components',
    description:
      'Welded wire mesh filter elements and screen cylinders designed for structural rigidity and solid-liquid separation in fluid and gas processing.',
    applications: ['Plastics & Chemical', 'Filtering', 'Food Processing'],
    image: SITE_IMAGES.wireMeshFilterWeldedScreen,
    schematicType: 'welded-filter',
  },
  {
    id: 'gaskets',
    code: '04',
    name: 'Gaskets',
    category: 'Sealing & Filtration',
    description:
      'Specialized compressed stainless steel wire mesh gaskets engineered for sealing and boundary filtration in high-temperature and heat treatment equipment.',
    applications: ['Heat Treatment', 'Plastics & Chemical', 'Filtering'],
    image: SITE_IMAGES.gaskets,
    schematicType: 'gasket-ring',
  },
  {
    id: 'spin-pack-filter',
    code: '05',
    name: 'Spin Pack Filter',
    category: 'Filtration Components',
    description:
      'Precision wire mesh spin pack filters with rimmed circular construction configured for polymer extrusion and synthetic fiber filtration applications.',
    applications: ['Plastics & Chemical', 'Filtering'],
    image: SITE_IMAGES.spinPackFilter,
    schematicType: 'spin-pack',
  },
];

export interface IndustryApplicationItem {
  id: string;
  code: string;
  name: string;
  description: string;
  appliedProducts: string;
  iconName: string;
}

export const INDUSTRIES: IndustryApplicationItem[] = [
  {
    id: 'plastics-chemical',
    code: '01',
    name: 'Plastics & Chemical',
    description:
      'Spin pack filters, wire mesh filter welded screens, and stainless steel wire mesh applied in polymer processing and chemical filtration.',
    appliedProducts: 'Spin Pack Filters · Welded Screens · Woven Mesh',
    iconName: 'Layers',
  },
  {
    id: 'pharmaceutical',
    code: '02',
    name: 'Pharmaceutical',
    description:
      'Sanitary grade stainless steel wire mesh and precision filters utilized in pharmaceutical separation and active ingredient filtration.',
    appliedProducts: 'Stainless Steel Wire Mesh · Wire Mesh Filters',
    iconName: 'ShieldCheck',
  },
  {
    id: 'food-processing',
    code: '03',
    name: 'Food Processing',
    description:
      'Woven wire mesh screens and wire mesh filters applied across food screening, liquid separation, and grading systems.',
    appliedProducts: 'Wire Mesh Screens · Wire Mesh Filter Screens',
    iconName: 'UtensilsCrossed',
  },
  {
    id: 'heat-treatment',
    code: '04',
    name: 'Heat Treatment',
    description:
      'Specialized wire mesh gaskets and heat-resistant mesh configurations for high-temperature furnace, fixtures, and thermal processing.',
    appliedProducts: 'Gaskets · Stainless Steel Wire Mesh',
    iconName: 'Flame',
  },
  {
    id: 'filtering',
    code: '05',
    name: 'Filtering',
    description:
      'Comprehensive spectrum of wire mesh filter welded screens, spin pack filters, and screen media for fluid and gas industrial filtering.',
    appliedProducts: 'Wire Mesh Filter Welded Screens · Spin Pack Filters · Mesh Screens',
    iconName: 'Filter',
  },
];

export const MANUFACTURING_STEPS = [
  {
    step: 'STEP 01',
    title: 'Woven Wire Mesh Selection',
    description: 'Precision stainless steel woven wire mesh prepared for cutting, forming, and welding.',
  },
  {
    step: 'STEP 02',
    title: 'Press Tooling & Cutting',
    description: 'Specialized press cutting machinery utilizing multi-size circular cutting dies for exact dimensions.',
  },
  {
    step: 'STEP 03',
    title: 'Finished Components',
    description: 'Precision wire mesh screens, welded filter screens, spin pack filters, and wire mesh gaskets.',
  },
];

export const MANUFACTURING_CAPABILITIES = [
  {
    code: '01',
    title: 'Press Cutting Capability',
    description:
      'In-house wire mesh press cutting machines engineered for clean, burr-free cuts across single and multi-layer woven mesh.',
  },
  {
    code: '02',
    title: 'Different Cutting Die Sizes',
    description:
      'Comprehensive inventory of circular cutting dies enabling quick setup and fabrication of varied diameter specifications.',
  },
  {
    code: '03',
    title: 'Exact-Size Diameter Components',
    description:
      'Precision dimensional consistency ensuring exact fitment into filter housings, assemblies, and process equipment.',
  },
  {
    code: '04',
    title: 'Wire Mesh Filter Fabrication',
    description:
      'Welded wire mesh screen assemblies and spin pack filters produced for continuous industrial fluid and polymer filtration.',
  },
  {
    code: '05',
    title: 'Sealing Gasket Forming',
    description:
      'Forming and compression of wire mesh gaskets tailored for heat treatment, furnace fixtures, and high-pressure joints.',
  },
];

export const BENTO_VALUE_PROPOSITIONS = [
  {
    code: '01',
    span: 'col-span-1 md:col-span-3',
    title: 'Specialized Wire Mesh Products',
    description:
      'Focused manufacturing of stainless steel wire mesh, wire mesh screens, welded screen filters, wire mesh gaskets, and spin pack filters.',
    metricLabel: 'Product Specialization',
    metricValue: '5 Core Product Lines',
  },
  {
    code: '02',
    span: 'col-span-1 md:col-span-3',
    title: 'Precision Cut Components',
    description:
      'Equipped with wire mesh press cutting machines and modular circular dies to produce exact-size diameter screen components and filters.',
    metricLabel: 'In-House Tooling',
    metricValue: 'Multi-Size Dies',
  },
  {
    code: '03',
    span: 'col-span-1 md:col-span-2',
    title: 'Multiple Industrial Applications',
    description:
      'Products engineered and applied across plastics & chemical, pharmaceutical, food processing, heat treatment, and filtering.',
    metricLabel: 'Sectors Served',
    metricValue: '5 Key Sectors',
  },
  {
    code: '04',
    span: 'col-span-1 md:col-span-2',
    title: 'Dedicated Manufacturing Facility',
    description:
      'Own facility in Ambernath (E), Thane, Maharashtra equipped with machinery for direct manufacturing and reliable B2B supply.',
    metricLabel: 'Plant Location',
    metricValue: 'Ambernath (E), Thane',
  },
  {
    code: '05',
    span: 'col-span-1 md:col-span-2',
    title: 'Filtration & Sealing Solutions',
    description:
      'Practical, rugged welded screen filters, spin pack filters, and compressed wire mesh gaskets built for demanding plant operations.',
    metricLabel: 'Application Focus',
    metricValue: 'Filtration & Sealing',
  },
];
