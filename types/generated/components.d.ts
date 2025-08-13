import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBrandCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_brand_cards';
  info: {
    displayName: 'BrandCard';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface BlocksBrandSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_brand_sections';
  info: {
    displayName: 'BrandSection';
  };
  attributes: {
    brands: Schema.Attribute.Component<'blocks.brand-card', true>;
    footerText: Schema.Attribute.RichText;
  };
}

export interface BlocksBulletPoint extends Struct.ComponentSchema {
  collectionName: 'components_blocks_bullet_points';
  info: {
    description: '';
    displayName: 'BulletPoint';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface BlocksButtons extends Struct.ComponentSchema {
  collectionName: 'components_blocks_buttons';
  info: {
    description: '';
    displayName: 'Buttons';
  };
  attributes: {
    isLinkExternal: Schema.Attribute.Boolean;
    label: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface BlocksCardItems extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_items';
  info: {
    description: '';
    displayName: 'CardItems';
  };
  attributes: {
    CardItems: Schema.Attribute.Component<'blocks.card-single', true>;
  };
}

export interface BlocksCardSingle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_singles';
  info: {
    description: '';
    displayName: 'CardSingle';
  };
  attributes: {
    bulletHeading: Schema.Attribute.Component<'blocks.separate-heading', false>;
    bullets: Schema.Attribute.Component<'blocks.separate-heading', true>;
    Button: Schema.Attribute.Component<'blocks.buttons', false>;
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksCarousel extends Struct.ComponentSchema {
  collectionName: 'components_blocks_carousels';
  info: {
    displayName: 'Carousel';
  };
  attributes: {
    autoplay: Schema.Attribute.Boolean;
    images: Schema.Attribute.Component<'blocks.media', true>;
    interval: Schema.Attribute.Integer;
  };
}

export interface BlocksCategoryGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_category_grids';
  info: {
    displayName: 'CategoryGrid';
  };
  attributes: {
    categories: Schema.Attribute.Component<'blocks.category-item', true>;
  };
}

export interface BlocksCategoryItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_category_items';
  info: {
    displayName: 'CategoryItem';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
  };
}

export interface BlocksCityName extends Struct.ComponentSchema {
  collectionName: 'components_blocks_city_names';
  info: {
    description: '';
    displayName: 'CityName';
  };
  attributes: {
    CityName: Schema.Attribute.String;
    Places: Schema.Attribute.JSON;
  };
}

export interface BlocksContentImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_images';
  info: {
    displayName: 'ContentImage';
  };
  attributes: {
    heading: Schema.Attribute.String;
    media: Schema.Attribute.Component<'blocks.media', true>;
  };
}

export interface BlocksContentItems extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_items';
  info: {
    description: '';
    displayName: 'ContentItems';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksContryName extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contry_names';
  info: {
    description: '';
    displayName: 'CountryName';
  };
  attributes: {
    CityName: Schema.Attribute.Component<'blocks.city-name', true>;
    CountryName: Schema.Attribute.String;
  };
}

export interface BlocksCxrBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cxr_blocks';
  info: {
    description: '';
    displayName: 'CXRBlock';
  };
  attributes: {
    BackgroundColor: Schema.Attribute.Enumeration<['white', 'dark green']>;
    CXRCards: Schema.Attribute.Component<'blocks.cxr-cards', true>;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksCxrCards extends Struct.ComponentSchema {
  collectionName: 'components_blocks_cxr_cards';
  info: {
    displayName: 'CXRCards';
  };
  attributes: {
    column_span: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksDarkGreenItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_dark_green_items';
  info: {
    displayName: 'DarkGreenItem';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.RichText;
  };
}

export interface BlocksDarkGreenSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_dark_green_sections';
  info: {
    displayName: 'DarkGreenSection';
  };
  attributes: {
    content: Schema.Attribute.Component<'blocks.dark-green-item', true>;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksEgypt extends Struct.ComponentSchema {
  collectionName: 'components_blocks_egypts';
  info: {
    displayName: 'Egypt';
  };
  attributes: {
    Cario: Schema.Attribute.JSON;
  };
}

export interface BlocksExploreMoreBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_explore_more_blocks';
  info: {
    description: '';
    displayName: 'ExploreMoreBlock';
  };
  attributes: {
    Buttons: Schema.Attribute.Component<'blocks.buttons', true>;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFactBox extends Struct.ComponentSchema {
  collectionName: 'components_blocks_fact_boxes';
  info: {
    description: '';
    displayName: 'FactBox';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'blocks.bullet-point', true>;
    displayType: Schema.Attribute.Enumeration<['fact', 'bullet']>;
    facts: Schema.Attribute.Component<'blocks.key-value', true>;
    lineColor: Schema.Attribute.Enumeration<['green', 'gray']>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFaqBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_blocks';
  info: {
    description: '';
    displayName: 'FaqBlock';
  };
  attributes: {
    FaqItems: Schema.Attribute.Component<'blocks.faq-items', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFaqItems extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faq_items';
  info: {
    displayName: 'FaqItems';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
  };
}

export interface BlocksFutureRetail extends Struct.ComponentSchema {
  collectionName: 'components_blocks_future_retails';
  info: {
    description: '';
    displayName: 'FutureRetail';
  };
  attributes: {
    BulletPoint: Schema.Attribute.Component<'blocks.bullet-point', true>;
    Button: Schema.Attribute.Component<'blocks.buttons', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subheading: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    description: '';
    displayName: 'HeroSection';
  };
  attributes: {
    autoSlide: Schema.Attribute.Boolean;
    overlayColor: Schema.Attribute.String;
    overlayEnabled: Schema.Attribute.Boolean;
    slideInterval: Schema.Attribute.Integer;
    slides: Schema.Attribute.Component<'blocks.slides', true>;
  };
}

export interface BlocksInnovate extends Struct.ComponentSchema {
  collectionName: 'components_blocks_innovates';
  info: {
    description: '';
    displayName: 'Innovate';
  };
  attributes: {
    heading: Schema.Attribute.String;
    InnovateCard: Schema.Attribute.Component<'blocks.innovate-card', true>;
    subheading: Schema.Attribute.Text;
  };
}

export interface BlocksInnovateCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_innovate_cards';
  info: {
    description: '';
    displayName: 'InnovateCard';
  };
  attributes: {
    buttonLink: Schema.Attribute.String;
    buttonText: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksKeyValue extends Struct.ComponentSchema {
  collectionName: 'components_blocks_key_values';
  info: {
    displayName: 'KeyValue';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.RichText;
  };
}

export interface BlocksMdxContent extends Struct.ComponentSchema {
  collectionName: 'components_blocks_mdx_contents';
  info: {
    description: '';
    displayName: 'mdx-content';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    lastUpdated: Schema.Attribute.Date;
  };
}

export interface BlocksMedia extends Struct.ComponentSchema {
  collectionName: 'components_blocks_media';
  info: {
    description: '';
    displayName: 'Media';
  };
  attributes: {
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface BlocksMilestoneBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_milestone_blocks';
  info: {
    displayName: 'MilestoneBlock';
  };
  attributes: {
    heading: Schema.Attribute.String;
    MilestoneItems: Schema.Attribute.Component<'blocks.timeline-item', true>;
  };
}

export interface BlocksNewsRoom extends Struct.ComponentSchema {
  collectionName: 'components_blocks_news_rooms';
  info: {
    description: '';
    displayName: 'NewsRoom';
  };
  attributes: {
    Button: Schema.Attribute.Component<'blocks.buttons', false>;
    heading: Schema.Attribute.String;
    limit: Schema.Attribute.Integer;
    subheading: Schema.Attribute.String;
  };
}

export interface BlocksProfileCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_profile_cards';
  info: {
    description: '';
    displayName: 'ProfileCard';
  };
  attributes: {
    featured: Schema.Attribute.Boolean;
    fields: Schema.Attribute.Component<'blocks.profile-field', true>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksProfileField extends Struct.ComponentSchema {
  collectionName: 'components_blocks_profile_fields';
  info: {
    displayName: 'ProfileField';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    label: Schema.Attribute.String;
  };
}

export interface BlocksProfileGrid extends Struct.ComponentSchema {
  collectionName: 'components_blocks_profile_grids';
  info: {
    displayName: 'ProfileGrid';
  };
  attributes: {
    profiles: Schema.Attribute.Component<'blocks.profile-card', true>;
  };
}

export interface BlocksProgramGoal extends Struct.ComponentSchema {
  collectionName: 'components_blocks_program_goals';
  info: {
    displayName: 'ProgramGoal';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'blocks.program-goal-item', true>;
    summary: Schema.Attribute.RichText;
  };
}

export interface BlocksProgramGoalItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_program_goal_items';
  info: {
    displayName: 'ProgramGoalItem';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'blocks.bullet-point', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksPurposeItems extends Struct.ComponentSchema {
  collectionName: 'components_blocks_purpose_items';
  info: {
    description: '';
    displayName: 'PurposeItems';
  };
  attributes: {
    PurposeItems: Schema.Attribute.Component<'blocks.purpose-single', true>;
  };
}

export interface BlocksPurposeSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_purpose_sections';
  info: {
    description: '';
    displayName: 'PurposeSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    PurposeItems: Schema.Attribute.Component<'blocks.purpose-single', true>;
  };
}

export interface BlocksPurposeSingle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_purpose_singles';
  info: {
    displayName: 'PurposeSingle';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
  };
}

export interface BlocksSeparateHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_separate_headings';
  info: {
    displayName: 'SeparateHeading';
  };
  attributes: {
    heading: Schema.Attribute.RichText;
  };
}

export interface BlocksShopOption extends Struct.ComponentSchema {
  collectionName: 'components_blocks_shop_options';
  info: {
    description: '';
    displayName: 'ShopOption';
  };
  attributes: {
    description: Schema.Attribute.Text;
    highlighted: Schema.Attribute.Boolean;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksShopSmart extends Struct.ComponentSchema {
  collectionName: 'components_blocks_shop_smarts';
  info: {
    description: '';
    displayName: 'ShopSmart';
  };
  attributes: {
    heading: Schema.Attribute.String;
    ShopOption: Schema.Attribute.Component<'blocks.shop-option', true>;
    subheading: Schema.Attribute.String;
  };
}

export interface BlocksSimpleText extends Struct.ComponentSchema {
  collectionName: 'components_blocks_simple_texts';
  info: {
    description: '';
    displayName: 'SimpleText';
  };
  attributes: {
    TextBlock: Schema.Attribute.String;
  };
}

export interface BlocksSlides extends Struct.ComponentSchema {
  collectionName: 'components_blocks_slides';
  info: {
    description: '';
    displayName: 'Slides';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'blocks.buttons', true>;
    label: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subtitle: Schema.Attribute.RichText;
    title: Schema.Attribute.RichText;
  };
}

export interface BlocksSustainableCardItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sustainable_card_items';
  info: {
    displayName: 'SustainableCardItem';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksSustainableCards extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sustainable_cards';
  info: {
    displayName: 'SustainableCards';
  };
  attributes: {
    sustainable_card_items: Schema.Attribute.Component<
      'blocks.sustainable-card-item',
      true
    >;
  };
}

export interface BlocksTimelineItem extends Struct.ComponentSchema {
  collectionName: 'components_blocks_timeline_items';
  info: {
    displayName: 'TimelineItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    year: Schema.Attribute.String;
  };
}

export interface BlocksTimelineSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_timeline_sections';
  info: {
    description: '';
    displayName: 'TimelineSection';
  };
  attributes: {
    Buttons: Schema.Attribute.Component<'blocks.buttons', true>;
    heading: Schema.Attribute.String;
    subheading: Schema.Attribute.Text;
    TimelineItem: Schema.Attribute.Component<'blocks.timeline-item', true>;
  };
}

export interface BlocksTopMenu extends Struct.ComponentSchema {
  collectionName: 'components_blocks_top_menus';
  info: {
    displayName: 'Top Menu';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface BlocksTwoColumn extends Struct.ComponentSchema {
  collectionName: 'components_blocks_two_columns';
  info: {
    displayName: 'TwoColumn';
  };
  attributes: {
    leftText: Schema.Attribute.RichText;
    rightText: Schema.Attribute.RichText;
  };
}

export interface BlocksWasteCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_waste_cards';
  info: {
    displayName: 'WasteCard';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.Text;
  };
}

export interface BlocksWasteSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_waste_sections';
  info: {
    displayName: 'WasteSection';
  };
  attributes: {
    cards: Schema.Attribute.Component<'blocks.waste-card', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.brand-card': BlocksBrandCard;
      'blocks.brand-section': BlocksBrandSection;
      'blocks.bullet-point': BlocksBulletPoint;
      'blocks.buttons': BlocksButtons;
      'blocks.card-items': BlocksCardItems;
      'blocks.card-single': BlocksCardSingle;
      'blocks.carousel': BlocksCarousel;
      'blocks.category-grid': BlocksCategoryGrid;
      'blocks.category-item': BlocksCategoryItem;
      'blocks.city-name': BlocksCityName;
      'blocks.content-image': BlocksContentImage;
      'blocks.content-items': BlocksContentItems;
      'blocks.contry-name': BlocksContryName;
      'blocks.cxr-block': BlocksCxrBlock;
      'blocks.cxr-cards': BlocksCxrCards;
      'blocks.dark-green-item': BlocksDarkGreenItem;
      'blocks.dark-green-section': BlocksDarkGreenSection;
      'blocks.egypt': BlocksEgypt;
      'blocks.explore-more-block': BlocksExploreMoreBlock;
      'blocks.fact-box': BlocksFactBox;
      'blocks.faq-block': BlocksFaqBlock;
      'blocks.faq-items': BlocksFaqItems;
      'blocks.future-retail': BlocksFutureRetail;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.innovate': BlocksInnovate;
      'blocks.innovate-card': BlocksInnovateCard;
      'blocks.key-value': BlocksKeyValue;
      'blocks.mdx-content': BlocksMdxContent;
      'blocks.media': BlocksMedia;
      'blocks.milestone-block': BlocksMilestoneBlock;
      'blocks.news-room': BlocksNewsRoom;
      'blocks.profile-card': BlocksProfileCard;
      'blocks.profile-field': BlocksProfileField;
      'blocks.profile-grid': BlocksProfileGrid;
      'blocks.program-goal': BlocksProgramGoal;
      'blocks.program-goal-item': BlocksProgramGoalItem;
      'blocks.purpose-items': BlocksPurposeItems;
      'blocks.purpose-section': BlocksPurposeSection;
      'blocks.purpose-single': BlocksPurposeSingle;
      'blocks.separate-heading': BlocksSeparateHeading;
      'blocks.shop-option': BlocksShopOption;
      'blocks.shop-smart': BlocksShopSmart;
      'blocks.simple-text': BlocksSimpleText;
      'blocks.slides': BlocksSlides;
      'blocks.sustainable-card-item': BlocksSustainableCardItem;
      'blocks.sustainable-cards': BlocksSustainableCards;
      'blocks.timeline-item': BlocksTimelineItem;
      'blocks.timeline-section': BlocksTimelineSection;
      'blocks.top-menu': BlocksTopMenu;
      'blocks.two-column': BlocksTwoColumn;
      'blocks.waste-card': BlocksWasteCard;
      'blocks.waste-section': BlocksWasteSection;
    }
  }
}
