import { TrelloFrontPage } from './app.po';

describe('trello-front App', function() {
  let page: TrelloFrontPage;

  beforeEach(() => {
    page = new TrelloFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
