"use strict";
var application = require("application");
var platform = require("platform");
var utils = require("utils/utils");
function setStatusBarColors() {
    // Make the iOS status bar transparent with white text.
    // See https://github.com/burkeholland/nativescript-statusbar/issues/2
    // for details on the technique used.
    if (application.ios) {
        var AppDelegate = UIResponder.extend({
            applicationDidFinishLaunchingWithOptions: function () {
                utils.ios.getter(UIApplication, UIApplication.sharedApplication).statusBarStyle = UIStatusBarStyle.LightContent;
                return true;
            }
        }, {
            name: "AppDelegate",
            protocols: [UIApplicationDelegate]
        });
        application.ios.delegate = AppDelegate;
    }
    // Make the Android status bar transparent.
    // See http://bradmartin.net/2016/03/10/fullscreen-and-navigation-bar-color-in-a-nativescript-android-app/
    // for details on the technique used.
    if (application.android) {
        application.android.onActivityStarted = function () {
            if (application.android && platform.device.sdkVersion >= "21") {
                var View = android.view.View;
                var window_1 = application.android.startActivity.getWindow();
                window_1.setStatusBarColor(0x000000);
                var decorView = window_1.getDecorView();
                decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_STABLE
                    | View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION
                    | View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN
                    | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY);
            }
        };
    }
}
exports.setStatusBarColors = setStatusBarColors;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWJhci11dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHVzLWJhci11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLFdBQVcsV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUMzQyxJQUFZLFFBQVEsV0FBTSxVQUFVLENBQUMsQ0FBQTtBQUNyQyxJQUFZLEtBQUssV0FBTSxhQUFhLENBQUMsQ0FBQTtBQVFyQztJQUNFLHVEQUF1RDtJQUN2RCxzRUFBc0U7SUFDdEUscUNBQXFDO0lBQ3JDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLElBQUksV0FBVyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUM7WUFDbkMsd0NBQXdDLEVBQUU7Z0JBQ3hDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxjQUFjLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxDQUFDO2dCQUNoSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2QsQ0FBQztTQUNGLEVBQUU7WUFDQyxJQUFJLEVBQUUsYUFBYTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztTQUNuQyxDQUFDLENBQUM7UUFDTCxXQUFXLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7SUFDekMsQ0FBQztJQUVELDJDQUEyQztJQUMzQywwR0FBMEc7SUFDMUcscUNBQXFDO0lBQ3JDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLFdBQVcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEdBQUc7WUFDdEMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDN0IsSUFBSSxRQUFNLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQzNELFFBQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFFbkMsSUFBSSxTQUFTLEdBQUcsUUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUN0QyxTQUFTLENBQUMscUJBQXFCLENBQzdCLElBQUksQ0FBQyw0QkFBNEI7c0JBQy9CLElBQUksQ0FBQyxxQ0FBcUM7c0JBQzFDLElBQUksQ0FBQyxnQ0FBZ0M7c0JBQ3JDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzVDLENBQUM7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0FBQ0gsQ0FBQztBQXBDZSwwQkFBa0IscUJBb0NqQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYXBwbGljYXRpb24gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBwbGF0Zm9ybSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gXCJ1dGlscy91dGlsc1wiO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XG5kZWNsYXJlIHZhciBVSVJlc3BvbmRlcjogYW55O1xuZGVjbGFyZSB2YXIgVUlTdGF0dXNCYXJTdHlsZTogYW55O1xuZGVjbGFyZSB2YXIgVUlBcHBsaWNhdGlvbjogYW55O1xuZGVjbGFyZSB2YXIgVUlBcHBsaWNhdGlvbkRlbGVnYXRlOiBhbnk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdGF0dXNCYXJDb2xvcnMoKSB7XG4gIC8vIE1ha2UgdGhlIGlPUyBzdGF0dXMgYmFyIHRyYW5zcGFyZW50IHdpdGggd2hpdGUgdGV4dC5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9idXJrZWhvbGxhbmQvbmF0aXZlc2NyaXB0LXN0YXR1c2Jhci9pc3N1ZXMvMlxuICAvLyBmb3IgZGV0YWlscyBvbiB0aGUgdGVjaG5pcXVlIHVzZWQuXG4gIGlmIChhcHBsaWNhdGlvbi5pb3MpIHtcbiAgICBsZXQgQXBwRGVsZWdhdGUgPSBVSVJlc3BvbmRlci5leHRlbmQoe1xuICAgICAgYXBwbGljYXRpb25EaWRGaW5pc2hMYXVuY2hpbmdXaXRoT3B0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHV0aWxzLmlvcy5nZXR0ZXIoVUlBcHBsaWNhdGlvbiwgVUlBcHBsaWNhdGlvbi5zaGFyZWRBcHBsaWNhdGlvbikuc3RhdHVzQmFyU3R5bGUgPSBVSVN0YXR1c0JhclN0eWxlLkxpZ2h0Q29udGVudDtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAgICBuYW1lOiBcIkFwcERlbGVnYXRlXCIsXG4gICAgICAgIHByb3RvY29sczogW1VJQXBwbGljYXRpb25EZWxlZ2F0ZV1cbiAgICAgIH0pO1xuICAgIGFwcGxpY2F0aW9uLmlvcy5kZWxlZ2F0ZSA9IEFwcERlbGVnYXRlO1xuICB9XG5cbiAgLy8gTWFrZSB0aGUgQW5kcm9pZCBzdGF0dXMgYmFyIHRyYW5zcGFyZW50LlxuICAvLyBTZWUgaHR0cDovL2JyYWRtYXJ0aW4ubmV0LzIwMTYvMDMvMTAvZnVsbHNjcmVlbi1hbmQtbmF2aWdhdGlvbi1iYXItY29sb3ItaW4tYS1uYXRpdmVzY3JpcHQtYW5kcm9pZC1hcHAvXG4gIC8vIGZvciBkZXRhaWxzIG9uIHRoZSB0ZWNobmlxdWUgdXNlZC5cbiAgaWYgKGFwcGxpY2F0aW9uLmFuZHJvaWQpIHtcbiAgICBhcHBsaWNhdGlvbi5hbmRyb2lkLm9uQWN0aXZpdHlTdGFydGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoYXBwbGljYXRpb24uYW5kcm9pZCAmJiBwbGF0Zm9ybS5kZXZpY2Uuc2RrVmVyc2lvbiA+PSBcIjIxXCIpIHtcbiAgICAgICAgbGV0IFZpZXcgPSBhbmRyb2lkLnZpZXcuVmlldztcbiAgICAgICAgbGV0IHdpbmRvdyA9IGFwcGxpY2F0aW9uLmFuZHJvaWQuc3RhcnRBY3Rpdml0eS5nZXRXaW5kb3coKTtcbiAgICAgICAgd2luZG93LnNldFN0YXR1c0JhckNvbG9yKDB4MDAwMDAwKTtcblxuICAgICAgICBsZXQgZGVjb3JWaWV3ID0gd2luZG93LmdldERlY29yVmlldygpO1xuICAgICAgICBkZWNvclZpZXcuc2V0U3lzdGVtVWlWaXNpYmlsaXR5KFxuICAgICAgICAgIFZpZXcuU1lTVEVNX1VJX0ZMQUdfTEFZT1VUX1NUQUJMRVxuICAgICAgICAgIHwgVmlldy5TWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OXG4gICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0xBWU9VVF9GVUxMU0NSRUVOXG4gICAgICAgICAgfCBWaWV3LlNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1kpO1xuICAgICAgfVxuICAgIH07XG4gIH1cbn0iXX0=