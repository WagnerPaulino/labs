import { TcompMaterialPage } from './app.po';

describe('tcomp-material App', () => {
  let page: TcompMaterialPage;

  beforeEach(() => {
    page = new TcompMaterialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
