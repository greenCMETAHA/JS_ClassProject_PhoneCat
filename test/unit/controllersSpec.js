'use strict';


//Step 2 from our project

/* jasmine specs for controllers go here */
//describe('PhoneCat controllers', function() {
//
//  describe('PhoneListCtrl', function(){
//
//    beforeEach(module('phonecatApp'));
//
//    it('should create "phones" model with 3 phones', inject(function($controller) {
//      var scope = {},
//          ctrl = $controller('PhoneListCtrl', {$scope:scope});
//
//      expect(scope.phones.length).toBe(3);
//    }));
//  });
//
//
//});


//Step 4.
/* jasmine specs for controllers go here */
//describe('PhoneCat controllers', function() {
//
//  describe('PhoneListCtrl', function(){
//    var scope, ctrl;
//
//    beforeEach(module('phonecatApp'));
//
//    beforeEach(inject(function($controller) {
//      scope = {};
//      ctrl = $controller('PhoneListCtrl', {$scope:scope});
//    }));
//
//
//    it('should create "phones" model with 3 phones', function() {
//      expect(scope.phones.length).toBe(3);
//    });
//
//
//    it('should set the default value of orderProp model', function() {
//      expect(scope.orderProp).toBe('age');
//    });
//  });
//});

//Step 5
/* jasmine specs for controllers go here */
//describe('PhoneCat controllers', function() {
//
//    describe('PhoneListCtrl', function(){
//        var scope, ctrl, $httpBackend;
//
//        beforeEach(module('phonecatApp'));
//        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
//            $httpBackend = _$httpBackend_;
//            $httpBackend.expectGET('phones/phones.json')
//                .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
//
//            scope = $rootScope.$new();
//            ctrl = $controller('PhoneListCtrl', {$scope: scope});
//        }));
//
//
//        it('should create "phones" model with 2 phones fetched from xhr', function() {
//            expect(scope.phones).toBeUndefined();
//            $httpBackend.flush();
//
//            expect(scope.phones).toEqual([{name: 'Nexus S'},
//                {name: 'Motorola DROID'}]);
//        });
//
//
//        it('should set the default value of orderProp model', function() {
//            expect(scope.orderProp).toBe('age');
//        });
//    });
//
//  describe('PhoneDetailCtrl', function(){   //for Step 7
//  });
//});

//Step 8   // -- restart server!
//
//'use strict';
//
///* jasmine specs for controllers go here */
//describe('PhoneCat controllers', function() {
//
//    beforeEach(module('phonecatApp'));
//
//    describe('PhoneListCtrl', function () {
//        var scope, ctrl, $httpBackend;
//
//        beforeEach(inject(function (_$httpBackend_, $rootScope, $controller) {
//            $httpBackend = _$httpBackend_;
//            $httpBackend.expectGET('phones/phones.json').
//            respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
//
//            scope = $rootScope.$new();
//            ctrl = $controller('PhoneListCtrl', {$scope: scope});
//        }));
//
//
//        it('should create "phones" model with 2 phones fetched from xhr', function () {
//            expect(scope.phones).toBeUndefined();
//            $httpBackend.flush();
//
//            expect(scope.phones).toEqual([{name: 'Nexus S'},
//                {name: 'Motorola DROID'}]);
//        });
//
//
//        it('should set the default value of orderProp model', function () {
//            expect(scope.orderProp).toBe('age');
//        });
//    });
//
//    describe('PhoneDetailCtrl', function(){
//        var scope, $httpBackend, ctrl;
//
//        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
//            $httpBackend    = _$httpBackend_;
//            $httpBackend.expectGET('phones/nexus-s.json').respond({name:'Nexus S'});
//
//            $routeParams.phoneId = 'nexus-s';
//            scope = $rootScope.$new();
//            ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
//        }));
//
//
//        it('should fetch phone detail', function() {
//            expect(scope.phone).toBeUndefined();
//            $httpBackend.flush();
//
//            expect(scope.phone).toEqual({name:'Nexus S'});
//        });
//    });
//});

//Step 10.
//
//'use strict';
//
///* jasmine specs for controllers go here */
//describe('PhoneCat controllers', function() {
//
//    beforeEach(module('phonecatApp'));
//
//    describe('PhoneListCtrl', function(){
//        var scope, ctrl, $httpBackend;
//
//        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
//            $httpBackend = _$httpBackend_;
//            $httpBackend.expectGET('phones/phones.json').
//            respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
//
//            scope = $rootScope.$new();
//            ctrl = $controller('PhoneListCtrl', {$scope: scope});
//        }));
//
//
//        it('should create "phones" model with 2 phones fetched from xhr', function() {
//            expect(scope.phones).toBeUndefined();
//            $httpBackend.flush();
//
//            expect(scope.phones).toEqual([{name: 'Nexus S'},
//                {name: 'Motorola DROID'}]);
//        });
//
//
//        it('should set the default value of orderProp model', function() {
//            expect(scope.orderProp).toBe('age');
//        });
//    });
//
//
//    describe('PhoneDetailCtrl', function(){
//        var scope, $httpBackend, ctrl,
//            xyzPhoneData = function() {
//                return {
//                    name: 'phone xyz',
//                    images: ['image/url1.png', 'image/url2.png']
//                }
//            };
//
//
//        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
//            $httpBackend = _$httpBackend_;
//            $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());
//
//            $routeParams.phoneId = 'xyz';
//            scope = $rootScope.$new();
//            ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
//        }));
//
//
//        it('should fetch phone detail', function() {
//            expect(scope.phone).toBeUndefined();
//            $httpBackend.flush();
//
//            expect(scope.phone).toEqual(xyzPhoneData());
//        });
//    });
//});

//Step 11
//'use strict';
//
///* jasmine specs for controllers go here */
//describe('PhoneCat controllers', function() {
//
//    beforeEach(function(){
//        this.addMatchers({
//            toEqualData: function(expected) {
//                return angular.equals(this.actual, expected);
//            }
//        });
//    });
//
//    beforeEach(module('phonecatApp'));
//    beforeEach(module('phonecatServices'));
//
//    describe('PhoneListCtrl', function(){
//        var scope, ctrl, $httpBackend;
//
//        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
//            $httpBackend = _$httpBackend_;
//            $httpBackend.expectGET('phones/phones.json').
//            respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
//
//            scope = $rootScope.$new();
//            ctrl = $controller('PhoneListCtrl', {$scope: scope});
//        }));
//
//
//        it('should create "phones" model with 2 phones fetched from xhr', function() {
//            expect(scope.phones).toEqualData([]);
//            $httpBackend.flush();
//
//            expect(scope.phones).toEqualData(
//                [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
//        });
//
//
//        it('should set the default value of orderProp model', function() {
//            expect(scope.orderProp).toBe('age');
//        });
//    });
//
//
//    describe('PhoneDetailCtrl', function(){
//        var scope, $httpBackend, ctrl,
//            xyzPhoneData = function() {
//                return {
//                    name: 'phone xyz',
//                    images: ['image/url1.png', 'image/url2.png']
//                }
//            };
//
//
//        beforeEach(inject(function(_$httpBackend_, $rootScope, $routeParams, $controller) {
//            $httpBackend = _$httpBackend_;
//            $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());
//
//            $routeParams.phoneId = 'xyz';
//            scope = $rootScope.$new();
//            ctrl = $controller('PhoneDetailCtrl', {$scope: scope});
//        }));
//
//
//        it('should fetch phone detail', function() {
//            expect(scope.phone).toEqualData({});
//            $httpBackend.flush();
//
//            expect(scope.phone).toEqualData(xyzPhoneData());
//        });
//    });
//});
