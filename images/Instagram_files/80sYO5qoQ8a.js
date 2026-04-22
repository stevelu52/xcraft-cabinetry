;/*FB_PKG_DELIM*/

__d("CAALoginIGLegalReportingGatingUtils",["PolarisIsLoggedIn","gkx"],(function(t,n,r,o,a,i,l){"use strict";function e(){if(o("PolarisIsLoggedIn").isLoggedIn())return!1;var e=s();return e!=null}function s(){return r("gkx")("5380")?"DSA":r("gkx")("1196")?"UKOSA":r("gkx")("20053")?"CA_SMT":null}l.isLoggedOutFRXEligible=e,l.getLoggedOutReportingVariantForUser=s}),98);