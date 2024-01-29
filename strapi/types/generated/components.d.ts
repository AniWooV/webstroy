import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksAbout extends Schema.Component {
  collectionName: 'components_blocks_abouts';
  info: {
    displayName: 'about';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.String;
    video: Attribute.Media;
  };
}

export interface BlocksBaseClient extends Schema.Component {
  collectionName: 'components_blocks_base_clients';
  info: {
    displayName: 'baseClient';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface BlocksBaseReview extends Schema.Component {
  collectionName: 'components_blocks_base_reviews';
  info: {
    displayName: 'baseReview';
  };
  attributes: {
    title: Attribute.String;
    reviews: Attribute.Component<'cards.review-card', true>;
  };
}

export interface BlocksBaseTabImage extends Schema.Component {
  collectionName: 'components_blocks_base_tab_images';
  info: {
    displayName: 'baseTabImage';
  };
  attributes: {
    title: Attribute.String;
    tabs: Attribute.Component<'utils.tab', true>;
    cards: Attribute.Component<'cards.image-card', true>;
  };
}

export interface BlocksCarouselWithCards extends Schema.Component {
  collectionName: 'components_blocks_carousel_with_cards';
  info: {
    displayName: 'simpleImage';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    cards: Attribute.Component<'cards.image-card', true>;
  };
}

export interface BlocksSimpleIconCard extends Schema.Component {
  collectionName: 'components_blocks_simple_icon_cards';
  info: {
    displayName: 'baseIcon';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    cards: Attribute.Component<'cards.icon-card', true>;
  };
}

export interface BlocksSimpleImageBlock extends Schema.Component {
  collectionName: 'components_blocks_simple_image_blocks';
  info: {
    displayName: 'baseImage';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    cards: Attribute.Component<'cards.image-card', true>;
  };
}

export interface CardsClientCard extends Schema.Component {
  collectionName: 'components_cards_client_cards';
  info: {
    displayName: 'client';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
    logo: Attribute.Media;
    services: Attribute.Component<'utils.service', true>;
  };
}

export interface CardsCostOfServiceCard extends Schema.Component {
  collectionName: 'components_cards_cost_of_service_cards';
  info: {
    displayName: 'costOfService';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    points: Attribute.Component<'utils.point', true>;
    cost: Attribute.Decimal;
    url: Attribute.String;
  };
}

export interface CardsIconCard extends Schema.Component {
  collectionName: 'components_cards_icon_cards';
  info: {
    displayName: 'icon';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface CardsImageCard extends Schema.Component {
  collectionName: 'components_cards_image_cards';
  info: {
    displayName: 'image';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    image: Attribute.Media;
    url: Attribute.String;
  };
}

export interface CardsOfficeCard extends Schema.Component {
  collectionName: 'components_cards_office_cards';
  info: {
    displayName: 'office';
    description: '';
  };
  attributes: {
    country: Attribute.String;
  };
}

export interface CardsReviewCard extends Schema.Component {
  collectionName: 'components_cards_review_cards';
  info: {
    displayName: 'review';
    description: '';
  };
  attributes: {
    reviewer: Attribute.String;
    content: Attribute.Text;
    video: Attribute.Media;
    url: Attribute.String;
  };
}

export interface CardsSimpleCard extends Schema.Component {
  collectionName: 'components_cards_simple_cards';
  info: {
    displayName: 'simple';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
  };
}

export interface CardsTariffCard extends Schema.Component {
  collectionName: 'components_cards_tariff_cards';
  info: {
    displayName: 'tariff';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    deadlines: Attribute.String;
    mainPoints: Attribute.Component<'utils.point', true>;
    specialPointsTitle: Attribute.String;
    specialPoints: Attribute.Component<'utils.point', true>;
    cost: Attribute.Decimal;
    url: Attribute.String;
  };
}

export interface CardsTextCard extends Schema.Component {
  collectionName: 'components_cards_text_cards';
  info: {
    displayName: 'base';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
  };
}

export interface CardsTextLogoCard extends Schema.Component {
  collectionName: 'components_cards_text_logo_cards';
  info: {
    displayName: 'baseIcon';
    description: '';
  };
  attributes: {
    content: Attribute.Text;
    icon: Attribute.Media;
  };
}

export interface UtilsContact extends Schema.Component {
  collectionName: 'components_utils_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    title: Attribute.String;
    social: Attribute.Enumeration<['telegram', 'whatsup', 'behance', 'mail']>;
    url: Attribute.String;
  };
}

export interface UtilsImage extends Schema.Component {
  collectionName: 'components_utils_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface UtilsPoint extends Schema.Component {
  collectionName: 'components_utils_points';
  info: {
    displayName: 'point';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface UtilsService extends Schema.Component {
  collectionName: 'components_utils_services';
  info: {
    displayName: 'service';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface UtilsTab extends Schema.Component {
  collectionName: 'components_utils_tabs';
  info: {
    displayName: 'tab';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    url: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.about': BlocksAbout;
      'blocks.base-client': BlocksBaseClient;
      'blocks.base-review': BlocksBaseReview;
      'blocks.base-tab-image': BlocksBaseTabImage;
      'blocks.carousel-with-cards': BlocksCarouselWithCards;
      'blocks.simple-icon-card': BlocksSimpleIconCard;
      'blocks.simple-image-block': BlocksSimpleImageBlock;
      'cards.client-card': CardsClientCard;
      'cards.cost-of-service-card': CardsCostOfServiceCard;
      'cards.icon-card': CardsIconCard;
      'cards.image-card': CardsImageCard;
      'cards.office-card': CardsOfficeCard;
      'cards.review-card': CardsReviewCard;
      'cards.simple-card': CardsSimpleCard;
      'cards.tariff-card': CardsTariffCard;
      'cards.text-card': CardsTextCard;
      'cards.text-logo-card': CardsTextLogoCard;
      'utils.contact': UtilsContact;
      'utils.image': UtilsImage;
      'utils.point': UtilsPoint;
      'utils.service': UtilsService;
      'utils.tab': UtilsTab;
    }
  }
}
