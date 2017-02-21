import { TesteGetPage } from './app.po';

describe('teste-get App', function() {
  let page: TesteGetPage;

  beforeEach(() => {
    page = new TesteGetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
