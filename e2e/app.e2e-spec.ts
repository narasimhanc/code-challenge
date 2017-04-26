import { CodeAssessmentPage } from './app.po';

describe('code-assessment App', () => {
  let page: CodeAssessmentPage;

  beforeEach(() => {
    page = new CodeAssessmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
