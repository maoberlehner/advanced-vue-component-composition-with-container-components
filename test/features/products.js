import ArticleTeaserContainerIntegration from '../../src/components/ArticleTeaserContainer.integration';
import ProductListingContainerIntegration from '../../src/components/ProductListingContainer.integration';

describe(`Products`, () => {
  const context = { url: `/products` };

  ProductListingContainerIntegration(context);
  ArticleTeaserContainerIntegration(context);
});
