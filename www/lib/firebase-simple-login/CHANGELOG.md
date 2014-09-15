v1.6.3
-------------
Release Date: 2014-08-15

  * The callback argument for `createUser()`, `changePassword()`, `sendPasswordResetEmail()`, and `removeUser()` is now optional.
  * Fixed issue where we accidentally formatted error messages twice resulting in wrong error messages.
  * Fixed bug where we assumed a script tag existed for the JSONP transport.
  * Removed `displayName` from the anonymous authentication user payload.

v1.6.2
-------------
Release Date: 2014-07-18

  * Fixed bug in PhoneGap, Trigger.io, and Windows Metro transports which caused response payloads with an "&" in them to be improperly handled, resulting in an "UNKNOWN ERROR".

v1.6.1
-------------
Release Date: 2014-06-20

  * Add (internal) option to keep pop-up window alive after communicating reply to opener.
  * Fixed issue where we accidentally formatted error messages twice resulting in wrong error messages.

v1.6.0
-------------
Release Date: 2014-06-12

  * NOTE: This update modifies the Firebase Simple Login persistence, so updating to this version will have the effect
          of blowing away your users' existing, persisted sessions.
  * Remove dependency on cookies / SJCL to better support the PhoneGap / Cordova environments.
  * Increase the PhoneGap / Cordova InAppBrowser timeout from 40 to 120 seconds (thanks @VishalRJoshi).

v1.5.0
-------------
Release Date: 2014-06-02

  * Persona provider officially removed

v1.4.1
-------------
Release Date: 2014-04-29

  * Add Persona provider deprecation warning (will be removed on 2014-06-02)

v1.4.0
-------------
Release Date: 2014-04-17

  * Fixes issue with cross-domain XHR in IE9
  * Return Promises/A+ standards-compliant promises (using RSVP) from all asynchronous login / user management methods
  * Expose `FirebaseSimpleLogin.VERSION` attribute in the client for programmatic detection

v1.3.2
-------------
Release Date: 2014-03-30

  * Fixes issue with session persistence ([#22](https://github.com/firebase/firebase-simple-login/issues/22))

v1.3.1
-------------
Release Date: 2014-03-29

  * Add support for `isTemporaryPassword` flag when logging in using the email / password provider ([#17](https://github.com/firebase/firebase-simple-login/issues/17))
  * Reduce filesize by using a custom XHR integration ([#13](https://github.com/firebase/firebase-simple-login/issues/13))

v1.3.0
-------------
Release Date: 2014-02-28

  * Add support for Google / Google+ authentication ([#1](https://github.com/firebase/firebase-simple-login/issues/1))
  * Enable automatic redirect-based OAuth for iOS standalone apps, Chrome on iOS, and the Twitter / Facebook iOS preview panes ([#7](https://github.com/firebase/firebase-simple-login/issues/7))
  * Enable optional redirect-based OAuth via the `preferRedirect: true` flag for all OAuth-based `.login(...)` methods  ([#10](https://github.com/firebase/firebase-simple-login/issues/10))
  * Support extra options for Mozilla Persona login ([#8](https://github.com/firebase/firebase-simple-login/issues/8))

v1.2.5
-------------
Release Date: 2014-02-05

* Fix bug impacting persisting sessions across page refreshes

v1.2.4
-------------
Release Date: 2014-02-05

* Adds support for Windows Metro applications via WebAuthenticationBroker

v1.2.3
-------------
Release Date: 2014-01-27

* Fix intermittent eventing issues with multiple clients on a single page

v1.2.2
-------------
Release Date: 2014-01-24

* Fix [#5 - sessionLengthDays not used when setting the session in attemptAuth](https://github.com/firebase/firebase-simple-login/issues/5)

v1.2.1
-------------
Release Date: 2014-01-19

* Fix [#4 - Persona not working](https://github.com/firebase/firebase-simple-login/pull/4)

v1.2.0
-------------
Release Date: 2014-01-15

  * Add support for password resets (see [https://www.firebase.com/docs/javascript/simplelogin/sendpasswordresetemail.html](https://www.firebase.com/docs/javascript/simplelogin/sendpasswordresetemail.html))
