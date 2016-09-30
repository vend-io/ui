import { SodaPage } from './app.po';

describe('soda App', function() {
  let page: SodaPage;

  beforeEach(() => {
    page = new SodaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
