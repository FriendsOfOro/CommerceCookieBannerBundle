# OroCommerceCookieBannerBundle

## Add a Cookie Banner to the Website (for v. 3.0 and higher)

To set up a cookie banner:

1. Download the OroCommerceCookieBannerBundle archived file. 
2. Unpack the downloaded file to **{application_name}/src/Oro/Bundle**.
3. Run the following commands:
 
   **For dev mode**

   * `rm -rf var/cache/*`
   * `php composer.phar install --prefer-dist --no-dev`
   * `php bin/console oro:platform:update --env=prod --force`
   * `php bin/console oro:message-queue:consume --env=dev`

   **For prod mode**

    * `rm -rf var/cache/*`
    * `php composer.phar install --prefer-dist --no-dev`
    * `php bin/console oro:platform:update --env=prod --force`
    * `php bin/console oro:message-queue:consume --env=prod`

4. Reload the application in the browser.

## Add a Cookie Banner to the Website (for v. 2.6 and lower)

To set up a cookie banner:

1. Download the OroCommerceCookieBannerBundle archived file. 
2. Unpack the downloaded file to **{application_name}/src/Oro/Bundle**.
3. Run the following commands:
 
   **For dev mode**
  
   * `rm -rf app/cache/*`
   * `php composer.phar install --prefer-dist --no-dev`
   * `php app/console oro:platform:update --env=prod --force`
   * `php app/console oro:message-queue:consume --env=dev`
   

   **For prod mode**

   * `rm -rf app/cache/*`
   * `php composer.phar install --prefer-dist --no-dev`
   * `php app/console oro:platform:update --env=prod --force`
   * `php app/console oro:message-queue:consume --env=prod`


4. Reload the application in the browser.


## Add a Translation

To add a translation to the cookie banner to present information in the desired language:

1. Run the following command (for v. 3.0 and higher):

   `php bin/console oro:translation:load --env=prod`

   Run the following command (for v. 2.6 and lower

   `php app/console oro:translation:load --env=prod`

2. In the management console, navigate to **System > Localization > Translations**.
3. Using filters, locate following translation keys:

   * *oro_cookie_banner.text*
   * *oro_cookie_banner.button_label*

4. Add translation for the banner text and label.
5. Click **Update Cache** on the top right.
6. Once cache is updated, the translated banner will be displayed in the storefront.




