import { AngualrSwitchableGridPage } from './app.po';

describe('angualr-switchable-grid App', function() {
  let page: AngualrSwitchableGridPage;

  beforeEach(() => {
    page = new AngualrSwitchableGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
