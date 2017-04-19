angular.module("gccweb",["ngRoute","ngResource","angular-inview"]).controller("documentController",["$scope",function(e){e.elementInView=function(e,t){e&&t.element.removeClass("fade")}}]),angular.module("gccweb").config(["$routeProvider","$locationProvider",function(e,t){t.hashPrefix(""),e.when("/",{templateUrl:"assets/templates/home.html"}).when("/about",{templateUrl:"assets/templates/about/about.html"}).when("/about/ami",{templateUrl:"assets/templates/about/ami.html"}).when("/about/staff",{templateUrl:"assets/templates/about/staff.html"}).when("/about/believe",{templateUrl:"assets/templates/about/believe.html"}).when("/about/imnew",{templateUrl:"assets/templates/about/imnew.html"}).when("/familygroup",{templateUrl:"assets/templates/familygroup/familygroup.html"}).when("/giving",{templateUrl:"assets/templates/giving.html"}).when("/ministries",{templateUrl:"assets/templates/ministries/ministries.html"})}]),angular.module("gccweb").directive("ministryInfo",["$rootScope",function(e){return{restrict:"E",templateUrl:"assets/templates/ministries/info.html",scope:{list:"=",currentIndex:"=",row:"="},link:function(t,n,r){e.$on("tileClick",function(e,r){if(t.row==r.row){var o=t.findIndex(t.row,r.col),l=t.list[o];t.name=l.name,t.pic=l.pic,t.coordinator=l.coordinator,t.contact=l.contact,t.privileges=l.privileges,t.timeCommitment=l.timeCommitment,t.$apply(),n.show(),$("body").animate({scrollTop:n.offset().top-100},500)}else n.hide()})},controller:["$scope",function(e){e.findIndex=function(e,t){return 4*e+t}}]}}]),angular.module("gccweb").directive("ministryTile",["$rootScope",function(e){return{restrict:"E",templateUrl:"assets/templates/ministries/tile.html",scope:{name:"=",pic:"=",row:"=",col:"="},link:function(t,n,r){n.on("click",function(){e.$emit("tileClick",{row:t.row,col:t.col})})}}}]),angular.module("gccweb").directive("siteFooter",function(){return{restrict:"E",templateUrl:"assets/templates/siteFooter.html"}}),angular.module("gccweb").directive("siteNav",function(){return{restrict:"E",templateUrl:"assets/templates/siteNav.html"}}),angular.module("gccweb").controller("staffController",["$scope","Staff",function(e,t){e.staffList=t.query()}]).controller("believeController",["$scope","Believe",function(e,t){e.believeList=t.query(),e.tab=-1,e.select=function(t){e.tab==t?e.tab=-1:e.tab=t}}]),angular.module("gccweb").controller("mainAnnouncementsController",["$scope","MainAnnouncement",function(e,t){e.ma=t.query()}]).controller("smallAnnouncementsController",["$scope","SmallAnnouncement",function(e,t){e.sa=t.query()}]).controller("memoryVerseController",["$scope","MemoryVerse",function(e,t){var n=t.query(function(){e.mv=n[0]})}]),angular.module("gccweb").controller("ministryController",["$scope","Ministry",function(e,t){e.ministriesList=t.query(function(){e.getSizeArray=function(){return Array(Math.ceil(e.ministriesList.length/4))},e.getRow=function(t){var n=4*t,r=n+4,o=e.ministriesList.slice(n,r);return o}})}]),angular.module("gccweb").factory("Staff",["$resource",function(e){return e("/staff",{},{})}]).factory("Believe",["$resource",function(e){return e("/believe",{},{})}]),angular.module("gccweb").factory("MainAnnouncement",["$resource",function(e){return e("/mainAnnouncement",{},{})}]).factory("SmallAnnouncement",["$resource",function(e){return e("/smallAnnouncement",{},{})}]).factory("MemoryVerse",["$resource",function(e){return e("/memoryVerse",{},{})}]),angular.module("gccweb").factory("Ministry",["$resource",function(e){return e("/ministry",{},{})}]);