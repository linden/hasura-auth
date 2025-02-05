import { castBooleanEnv, castStringArrayEnv, castStringEnv } from '@config';

export const PROVIDERS = {
  get github() {
    return !castBooleanEnv('AUTH_PROVIDER_GITHUB_ENABLED')
      ? null
      : {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_GITHUB_CLIENT_ID');
          },
          get clientSecret() {
            return castStringEnv('AUTH_PROVIDER_GITHUB_CLIENT_SECRET');
          },
          get authorizationURL() {
            return castStringEnv('AUTH_PROVIDER_GITHUB_AUTHORIZATION_URL');
          },
          get tokenURL() {
            return castStringEnv('AUTH_PROVIDER_GITHUB_TOKEN_URL');
          },
          get userProfileURL() {
            return castStringEnv('AUTH_PROVIDER_GITHUB_USER_PROFILE_URL');
          },
          get scope() {
            return castStringArrayEnv('AUTH_PROVIDER_GITHUB_SCOPE', [
              'user:email',
            ]);
          },
        };
  },

  get google() {
    return !castBooleanEnv('AUTH_PROVIDER_GOOGLE_ENABLED')
      ? null
      : {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_GOOGLE_CLIENT_ID');
          },
          get clientSecret() {
            return castStringEnv('AUTH_PROVIDER_GOOGLE_CLIENT_SECRET');
          },
          get scope() {
            return castStringArrayEnv('AUTH_PROVIDER_GOOGLE_SCOPE', [
              'email',
              'profile',
            ]);
          },
        };
  },

  get facebook() {
    return !castBooleanEnv('AUTH_PROVIDER_FACEBOOK_ENABLED')
      ? null
      : {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_FACEBOOK_CLIENT_ID');
          },
          get clientSecret() {
            return castStringEnv('AUTH_PROVIDER_FACEBOOK_CLIENT_SECRET');
          },
          get profileFields() {
            return castStringArrayEnv('AUTH_PROVIDER_FACEBOOK_PROFILE_FIELDS', [
              'email',
              'photos',
              'displayName',
            ]);
          },
          get scope() {
            return castStringArrayEnv('AUTH_PROVIDER_FACEBOOK_SCOPE', [
              'email',
            ]);
          },
        };
  },

  get twitter() {
    return !castBooleanEnv('AUTH_PROVIDER_TWITTER_ENABLED')
      ? null
      : {
          get consumerKey() {
            return castStringEnv('AUTH_PROVIDER_TWITTER_CONSUMER_KEY');
          },
          get consumerSecret() {
            return castStringEnv('AUTH_PROVIDER_TWITTER_CONSUMER_SECRET');
          },
        };
  },

  get linkedin() {
    return !castBooleanEnv('AUTH_PROVIDER_LINKEDIN_ENABLED')
      ? null
      : {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_LINKEDIN_CLIENT_ID');
          },
          get clientSecret() {
            return castStringEnv('AUTH_PROVIDER_LINKEDIN_CLIENT_SECRET');
          },
          get scope() {
            return castStringArrayEnv('AUTH_PROVIDER_LINKEDIN_SCOPE', [
              'r_emailaddress',
              'r_liteprofile',
            ]);
          },
        };
  },

  get apple() {
    if (!castBooleanEnv('AUTH_PROVIDER_APPLE_ENABLED')) {
      return null;
    } else {
      try {
        return {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_APPLE_CLIENT_ID');
          },
          get teamID() {
            return castStringEnv('AUTH_PROVIDER_APPLE_TEAM_ID');
          },
          get keyID() {
            return castStringEnv('AUTH_PROVIDER_APPLE_KEY_ID');
          },
          get privateKeyString() {
            return castStringEnv('AUTH_PROVIDER_APPLE_PRIVATE_KEY').replace(
              /\\n/g,
              '\n'
            );
          },
          get scope() {
            return castStringArrayEnv('AUTH_PROVIDER_APPLE_SCOPE', [
              'name',
              'email',
            ]);
          },
        };
      } catch (e) {
        throw new Error(`Invalid Apple OAuth Key file`);
      }
    }
  },

  get windowslive() {
    return !castBooleanEnv('AUTH_PROVIDER_WINDOWS_LIVE_ENABLED')
      ? null
      : {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_WINDOWS_LIVE_CLIENT_ID');
          },
          get clientSecret() {
            return castStringEnv('AUTH_PROVIDER_WINDOWS_LIVE_CLIENT_SECRET');
          },
          get scope() {
            return castStringArrayEnv('AUTH_PROVIDER_WINDOWS_LIVE_SCOPE', [
              'wl.basic',
              'wl.emails',
            ]);
          },
        };
  },

  get spotify() {
    return !castBooleanEnv('AUTH_PROVIDER_SPOTIFY_ENABLED')
      ? null
      : {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_SPOTIFY_CLIENT_ID');
          },
          get clientSecret() {
            return castStringEnv('AUTH_PROVIDER_SPOTIFY_CLIENT_SECRET');
          },
          get scope() {
            return castStringArrayEnv('AUTH_PROVIDER_SPOTIFY_SCOPE', [
              'user-read-email',
              'user-read-private',
            ]);
          },
        };
  },

  get gitlab() {
    return !castBooleanEnv('AUTH_PROVIDER_GITLAB_ENABLED')
      ? null
      : {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_GITLAB_CLIENT_ID');
          },
          get clientSecret() {
            return castStringEnv('AUTH_PROVIDER_GITLAB_CLIENT_SECRET');
          },
          get baseUrl() {
            return castStringEnv('AUTH_PROVIDER_GITLAB_BASE_URL');
          },
          get scope() {
            return castStringArrayEnv('AUTH_PROVIDER_GITLAB_SCOPE', [
              'read_user',
            ]);
          },
        };
  },

  get bitbucket() {
    return !castBooleanEnv('AUTH_PROVIDER_BITBUCKET_ENABLED')
      ? null
      : {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_BITBUCKET_CLIENT_ID');
          },
          get clientSecret() {
            return castStringEnv('AUTH_PROVIDER_BITBUCKET_CLIENT_SECRET');
          },
        };
  },

  get strava() {
    return !castBooleanEnv('AUTH_PROVIDER_STRAVA_ENABLED')
      ? null
      : {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_STRAVA_CLIENT_ID');
          },
          get clientSecret() {
            return castStringEnv('AUTH_PROVIDER_STRAVA_CLIENT_SECRET');
          },
          get scope() {
            return castStringArrayEnv('AUTH_PROVIDER_STRAVA_SCOPE', [
              'profile:read_all',
            ]);
          },
        };
  },

  get discord() {
    return !castBooleanEnv('AUTH_PROVIDER_DISCORD_ENABLED')
      ? null
      : {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_DISCORD_CLIENT_ID');
          },
          get clientSecret() {
            return castStringEnv('AUTH_PROVIDER_DISCORD_CLIENT_SECRET');
          },
          get scope() {
            return castStringArrayEnv('AUTH_PROVIDER_DISCORD_SCOPE', [
              'identify',
              'email',
            ]);
          },
        };
  },

  get twitch() {
    return !castBooleanEnv('AUTH_PROVIDER_TWITCH_ENABLED')
      ? null
      : {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_TWITCH_CLIENT_ID');
          },
          get clientSecret() {
            return castStringEnv('AUTH_PROVIDER_TWITCH_CLIENT_SECRET');
          },
          get scope() {
            return castStringArrayEnv('AUTH_PROVIDER_TWITCH_SCOPE', [
              'user:read:email',
            ]);
          },
        };
  },

  get workos() {
    return !castBooleanEnv('AUTH_PROVIDER_WORKOS_ENABLED')
      ? null
      : {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_WORKOS_CLIENT_ID');
          },
          get clientSecret() {
            return castStringEnv('AUTH_PROVIDER_WORKOS_CLIENT_SECRET');
          },
          get defaultDomain() {
            return castStringEnv('AUTH_PROVIDER_WORKOKS_DEFAULT_DOMAIN');
          },
          get defaultOrganization() {
            return castStringEnv('AUTH_PROVIDER_WORKOS_DEFAULT_ORGANIZATION');
          },
          get defaultConnection() {
            return castStringEnv('AUTH_PROVIDER_WORKOS_DEFAULT_CONNECTION');
          },
        };
  },
  get azuread() {
    return !castBooleanEnv('AUTH_PROVIDER_AZUREAD_ENABLED')
      ? null
      : {
          get clientID() {
            return castStringEnv('AUTH_PROVIDER_AZUREAD_CLIENT_ID');
          },
          get clientSecret() {
            return castStringEnv('AUTH_PROVIDER_AZUREAD_CLIENT_SECRET');
          },
          get tenant() {
            return castStringEnv('AUTH_PROVIDER_AZUREAD_TENANT');
          },
        };
  },
};
