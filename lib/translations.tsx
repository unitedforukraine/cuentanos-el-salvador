import { Custom404Strings } from '@ircsignpost/signpost-base/dist/src/404-page';
import { ArticleContentStrings } from '@ircsignpost/signpost-base/dist/src/article-content';
import { ArticlePageStrings } from '@ircsignpost/signpost-base/dist/src/article-page';
import { CategoryStrings } from '@ircsignpost/signpost-base/dist/src/category-page';
import { CookieBannerStrings } from '@ircsignpost/signpost-base/dist/src/cookie-banner';
import { ErrorProps } from '@ircsignpost/signpost-base/dist/src/error';
import { HeaderBannerStrings } from '@ircsignpost/signpost-base/dist/src/header-banner';
import { HomePageStrings } from '@ircsignpost/signpost-base/dist/src/home-page';
import { CardsListStrings } from '@ircsignpost/signpost-base/dist/src/home-page-cards-list';
import { SearchBarStrings } from '@ircsignpost/signpost-base/dist/src/search-bar';
import { SearchResultsPageStrings } from '@ircsignpost/signpost-base/dist/src/search-results-page';
import { SearchResultsStrings } from '@ircsignpost/signpost-base/dist/src/search-results-page-content';
import { SectionStrings } from '@ircsignpost/signpost-base/dist/src/section-page';
import { ServiceMapStrings } from '@ircsignpost/signpost-base/dist/src/service-map';
import { ShareButtonStrings } from '@ircsignpost/signpost-base/dist/src/share-button';

import { CustomMenuOverlayStrings } from './menu';
import { SocialMediaLinks } from './social-media';

/** General strings used on various pages. */
export const COMMON_DYNAMIC_CONTENT_PLACEHOLDERS = [
  // Header strings.
  'default_menu_home_title',
  'default_information_title',
  'default_menu_about_title',
  // Cookie banner strings.
  'default_cookie_banner',
  'default_accept',
  'default_reject',
  // General strings.
  'default_search_hint',
  'default_share',
  'default_share_notification_text',
  'default_download',
  'default_last_updated',
  'default_article_reader_title',
  'default_banner_link_share_title',
];

export const HOME_PAGE_DYNAMIC_CONTENT_PLACEHOLDERS = [
  // Header banner and social media strings.
  'CuentaNos_ElSalvador_mission_statement',
  'default_banner_social_media_title',
  'default_banner_social_media_description',
  'default_banner_facebook_title',
  'default_banner_messenger_title',
  'default_banner_whatsapp_title',
  'default_banner_instagram_title',
  'CuentaNos_ElSalvador_facebook_link',
  'CuentaNos_ElSalvador_whatsapp_link',
  'CuentaNos_ElSalvador_messenger_link',
  'CuentaNos_ElSalvador_instagram_link',
  // Main body strings.
  'default_information_title',
  'default_information_description',
  'default_service_map_title',
  'default_service_map_description',
  'default_service_map_select_region',
  'default_service_map_all_regions',
  'default_service_map_select_city',
  'default_service_map_all_cities',
  'default_service_map_select_services',
  'default_services_list_count_of',
  'default_services_list_count_services',
  'default_service_map_map_tab',
  'default_service_map_list_tab',
  'default_service_map_all_services',
  'DEFAULT_SERVICE_MAP_ALL_REGIONS_OPTION',
  'DEFAULT_SERVICE_MAP_ALL_CITIES_OPTION',
  'DEFAULT_SERVICE_MAP_ALL_CATEGORIES_OPTION',
  'default_service_map_my_location_option',
];

export const CATEGORY_PLACEHOLDERS = ['default_select_topic'];

export const SECTION_PLACEHOLDERS = ['default_select_topic'];

export const SEARCH_RESULTS_PLACEHOLDERS = [
  'default_search_results_found',
  'default_all_results_tab',
  'default_information_results_tab',
  'default_services_results_tab',
];

export const ERROR_DYNAMIC_CONTENT_PLACEHOLDERS = [
  'default_error_indicator',
  'default_error_page_does_not_exist',
  'default_error_page_under_construction',
  'default_error_translation_missing',
  'default_error_home_button_title',
];

export function populateSocialMediaLinks(dynamicContent: {
  [key: string]: string;
}): SocialMediaLinks {
  return {
    facebookLink: {
      title: dynamicContent['default_banner_facebook_title'],
      href: dynamicContent['CuentaNos_ElSalvador_facebook_link'],
    },
    whatsappLink: {
      title: dynamicContent['default_banner_whatsapp_title'],
      href: dynamicContent['CuentaNos_ElSalvador_whatsapp_link'],
    },
    messengerLink: {
      title: dynamicContent['default_banner_messenger_title'],
      href: dynamicContent['CuentaNos_ElSalvador_messenger_link'],
    },
    instagramLink: {
      title: dynamicContent['default_banner_instagram_title'],
      href: dynamicContent['CuentaNos_ElSalvador_instagram_link'],
    },
  };
}

export function populateHeaderBannerStrings(dynamicContent: {
  [key: string]: string;
}): HeaderBannerStrings {
  return {
    welcomeTitle: dynamicContent['CuentaNos_ElSalvador_mission_statement'],
    socialMediaTitle: dynamicContent['default_banner_social_media_title'],
    socialMediaDescription:
      dynamicContent['default_banner_social_media_description'],
  };
}

export function populateServiceMapStrings(dynamicContent: {
  [key: string]: string;
}): ServiceMapStrings {
  return {
    title: dynamicContent['default_service_map_title'],
    description: dynamicContent['default_service_map_description'],
    selectRegionTitle: dynamicContent['default_service_map_select_region'],
    regionDefaultValue: dynamicContent['default_service_map_all_regions'],
    selectCityTitle: dynamicContent['default_service_map_select_city'],
    cityDefaultValue: dynamicContent['default_service_map_all_cities'],
    selectServiceTitle: dynamicContent['default_service_map_all_services'],
    serviceDefaultValue: dynamicContent['default_service_map_select_services'],
    serviceListStringOf: dynamicContent['default_services_list_count_of'],
    serviceListStringServices:
      dynamicContent['default_services_list_count_services'],
    mapTab: dynamicContent['default_service_map_map_tab'],
    listTab: dynamicContent['default_service_map_list_tab'],
    allRegionsOption: dynamicContent['DEFAULT_SERVICE_MAP_ALL_REGIONS_OPTION'],
    allCitiesOption: dynamicContent['DEFAULT_SERVICE_MAP_ALL_CITIES_OPTION'],
    allCategoriesOption:
      dynamicContent['DEFAULT_SERVICE_MAP_ALL_CATEGORIES_OPTION'],
    myLocationOption: dynamicContent['default_service_map_my_location_option'],
  };
}

/** Populate localized categories section strings from Dynamic content. */
export function populateCategoriesSectionStrings(dynamicContent: {
  [key: string]: string;
}): CardsListStrings {
  return {
    title: dynamicContent['default_information_title'],
    description: dynamicContent['default_information_description'],
  };
}

export function populateCookieBannerStrings(dynamicContent: {
  [key: string]: string;
}): CookieBannerStrings {
  return {
    content: dynamicContent['default_cookie_banner'],
    accept: dynamicContent['default_accept'],
    reject: dynamicContent['default_reject'],
  };
}

export function getLastUpdatedLabel(dynamicContent: {
  [key: string]: string;
}): string {
  return dynamicContent['default_last_updated'];
}

export function getShareButtonStrings(dynamicContent: {
  [key: string]: string;
}): ShareButtonStrings {
  return {
    label: dynamicContent['default_share'],
    notificationText: dynamicContent['default_share_notification_text'],
    linkShareButton: dynamicContent['default_banner_link_share_title'],
  };
}

export function generateArticleErrorProps(dynamicContent: {
  [key: string]: string;
}): ErrorProps {
  return {
    title: dynamicContent['default_error_indicator'],
    subtitle: dynamicContent['default_error_page_under_construction'],
    description: dynamicContent['default_error_translation_missing'],
    homeButtonLabel: dynamicContent['default_error_home_button_title'],
  };
}

export function generate404ErrorProps(dynamicContent: {
  [key: string]: string;
}): ErrorProps {
  return {
    title: dynamicContent['default_error_indicator'],
    subtitle: dynamicContent['default_error_page_does_not_exist'],
    homeButtonLabel: dynamicContent['default_error_home_button_title'],
  };
}

export function populateSearchResultsStrings(dynamicContent: {
  [key: string]: string;
}): SearchResultsStrings {
  return {
    lastEditedLabel: dynamicContent['default_last_updated'],
    resultSummaryStringTemplate: (
      firstOnPage: number,
      lastOnPage: number,
      totalCount: number,
      query: string
    ) => {
      return `${totalCount} ${dynamicContent['default_search_results_found']} "${query}"`;
    },
  };
}

export function getSelectTopicLabel(dynamicContent: {
  [key: string]: string;
}): string {
  return dynamicContent['default_select_topic'];
}

// TODO(annkats): add populateServiceMapStrings() once Service map becomes a Shared component.

export function populateArticleContentStrings(dynamicContent: {
  [key: string]: string;
}): ArticleContentStrings {
  return {
    textReaderTitle: dynamicContent['default_article_reader_title'],
    shareButtonStrings: getShareButtonStrings(dynamicContent),
  };
}

export function populateMenuOverlayStrings(dynamicContent: {
  [key: string]: string;
}): CustomMenuOverlayStrings {
  return {
    home: dynamicContent['default_menu_home_title'],
    information: dynamicContent['default_information_title'],
    about: dynamicContent['default_menu_about_title'],
  };
}

export function populateHomePageStrings(dynamicContent: {
  [key: string]: string;
}): HomePageStrings {
  return {
    cardsListStrings: populateCategoriesSectionStrings(dynamicContent),
    cookieBannerStrings: populateCookieBannerStrings(dynamicContent),
    serviceMapStrings: populateServiceMapStrings(dynamicContent),
    searchBarStrings: populateSearchBarStrings(dynamicContent),
  };
}

export function populateSearchBarStrings(dynamicContent: {
  [key: string]: string;
}): SearchBarStrings {
  return {
    searchHint: dynamicContent['default_search_hint'],
  };
}

export function populateCategoryStrings(dynamicContent: {
  [key: string]: string;
}): CategoryStrings {
  return {
    cookieBannerStrings: populateCookieBannerStrings(dynamicContent),
    selectTopicLabel: getSelectTopicLabel(dynamicContent),
    searchBarStrings: populateSearchBarStrings(dynamicContent),
  };
}

export function populateSectionStrings(dynamicContent: {
  [key: string]: string;
}): SectionStrings {
  return {
    cookieBannerStrings: populateCookieBannerStrings(dynamicContent),
    selectTopicLabel: getSelectTopicLabel(dynamicContent),
    searchBarStrings: populateSearchBarStrings(dynamicContent),
  };
}

export function populateCustom404Strings(dynamicContent: {
  [key: string]: string;
}): Custom404Strings {
  return {
    errorStrings: generate404ErrorProps(dynamicContent),
    cookieBannerStrings: populateCookieBannerStrings(dynamicContent),
    searchBarStrings: populateSearchBarStrings(dynamicContent),
  };
}

export function populateSearchResultsPageStrings(dynamicContent: {
  [key: string]: string;
}): SearchResultsPageStrings {
  return {
    searchBarStrings: populateSearchBarStrings(dynamicContent),
    lastEditedLabel: getLastUpdatedLabel(dynamicContent),
    resultsFoundForQuery: dynamicContent['default_search_results_found'],
    allResultsTabString: dynamicContent['default_all_results_tab'],
    informationTabString: dynamicContent['default_information_results_tab'],
    servicesTabString: dynamicContent['default_services_results_tab'],
  };
}

export function populateArticlePageStrings(dynamicContent: {
  [key: string]: string;
}): ArticlePageStrings {
  return {
    articleContentStrings: populateArticleContentStrings(dynamicContent),
    searchBarStrings: populateSearchBarStrings(dynamicContent),
    cookieBannerStrings: populateCookieBannerStrings(dynamicContent),
    articleErrorStrings: generateArticleErrorProps(dynamicContent),
    lastUpdatedLabel: getLastUpdatedLabel(dynamicContent),
  };
}
