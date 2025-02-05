import { Router } from 'express';

import github from './github';
import google from './google';
import facebook from './facebook';
import twitter from './twitter';
import apple from './apple';
import azuread from './azuread';
import windowslive from './windowslive';
import linkedin from './linkedin';
import spotify from './spotify';
import strava from './strava';
import gitlab from './gitlab';
import bitbucket from './bitbucket';
import discord from './discord';
import twitch from './twitch';
import workos from './workos';

const router = Router();

github(router);
google(router);
facebook(router);
twitter(router);
apple(router);
azuread(router);
windowslive(router);
linkedin(router);
spotify(router);
strava(router);
gitlab(router);
bitbucket(router);
discord(router);
twitch(router);
workos(router);

export default (parentRouter: Router) => {
  /**
   * GET /signin/provider/{provider}
   * @summary
   * @param {string} provider.path.required - name param description - enum:github,google,facebook,twitter,apple,azuread,windowslive,linkedin,spotify,strava,gitlab,bitbucket
   * @param {string} redirectUrl.query.required -
   * @return {string} 302 - Redirect to the provider's authentication page
   * @tags Authentication
   */

  /**
   * GET /signin/provider/{provider}/callback
   * @summary Oauth callback url, that will be used by the Oauth provider, to redirect to the client application. Attention: all providers are using a GET operation, except Apple and Azure AD that use POST
   * @param {string} provider.path.required - name param description - enum:github,google,facebook,twitter,apple,azuread,windowslive,linkedin,spotify,strava,gitlab,bitbucket
   * @param {string} redirectUrl.query.required
   * @return {string} 302 - Redirect to the initial url given as a query parameter in /signin/provider/{provider}
   * @tags Authentication
   */
  parentRouter.use('/signin/provider', router);
};
