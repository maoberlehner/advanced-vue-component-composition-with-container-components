import ArticleListingContainerIntegration from '../../src/components/ArticleListingContainer.integration';
import ProductTeaserContainerIntegration from '../../src/components/ProductTeaserContainer.integration';

describe(`Articles`, () => {
  const context = { url: `/articles` };

  ArticleListingContainerIntegration(context);
  ProductTeaserContainerIntegration(context);
});
