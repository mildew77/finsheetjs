describe('Testing a Hello World controller', function() {
  var $scope = null;
  var ctrl = null;

  //you need to indicate your module in a test
  beforeEach(module('portfolioComposition'));

  beforeEach(inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    ctrl = $controller('MainCtrl', {
      
      $scope: $scope
    });
  }));

  it('should say hallo to the World', function() {
    expect($scope.name).toEqual('World');
  });
  
   
  it('Check First Symbol', function() {
    expect($scope.assets[0].Symbol).toEqual('vfinx');
  });  
   it('Confirm that assets is hooked up', function() {
     expect($scope.assets.length).toEqual(20);
  
    for(i=0;i<$scope.assets.length;i++){
      expect($scope.assets[i].Symbol).not.toBeNull();
      expect($scope.assets[i].Description).not.toBeNull();
      expect($scope.assets[i].Color).not.toBeNull();
    }
  }); 
  //Make sure
    it('Confirm that asset percent sum is a number', function() {
      expect(12).toEqual(jasmine.any(Number));
    expect($scope.sum()).toEqual(jasmine.any(Number));
  }); 

});