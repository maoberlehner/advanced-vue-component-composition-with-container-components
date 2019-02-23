import ArticleTeaserContainerIntegration from '../../src/components/ArticleTeaserContainer.integration';
import ProductTeaserContainerIntegration from '../../src/components/ProductTeaserContainer.integration';

describe(`Homepage`, () => {
  const context = { url: `/` };

  ProductTeaserContainerIntegration(context);
  ArticleTeaserContainerIntegration(context);
});
