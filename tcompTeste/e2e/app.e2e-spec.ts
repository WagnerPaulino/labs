import { TcompTestePage } from './app.po';

describe('tcomp-teste App', () => {
  let page: TcompTestePage;

  beforeEach(() => {
    page = new TcompTestePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
