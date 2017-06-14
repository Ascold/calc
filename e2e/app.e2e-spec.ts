import { CalcPage } from './app.po';

describe('calc App', () => {
  let page: CalcPage;

  beforeEach(() => {
    page = new CalcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
