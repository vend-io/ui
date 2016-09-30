import { VendUiPage } from './app.po';

describe('vend-ui App', function() {
  let page: VendUiPage;

  beforeEach(() => {
    page = new VendUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
