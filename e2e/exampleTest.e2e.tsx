import {expect} from 'detox';

describe('Example test', () => {
  beforeEach(async () => {
    await device.launchApp();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.text('Auth screen'))).toBeVisible();
  });

  it('should view tabs screen after tap', async () => {
    await element(by.id('login_button')).tap();
    await expect(element(by.text('Tab screen'))).toBeVisible();
  });

  it('should move through the tabs', async () => {
    await element(by.id('tab_button_One')).tap();
    await element(by.id('tab_button_Two')).tap();
    await element(by.id('tab_button_Three')).tap();
    await element(by.id('tab_button_Zero')).tap();
  });

  it('should logout', async () => {
    await element(by.id('logout_button')).tap();
    await expect(element(by.text('Auth screen'))).toBeVisible();
  });
});
