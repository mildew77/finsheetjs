app.service('graph',  function(){

 this.test = function(){

  };

this.element = $('#plotDiv');

this.data=[];
this.options={
    series: {
        pie: {
            show: true
        }  ,      legend:{         
            container:$("#legend"),            
            noColumns: 0
        },

  }



};


this.plot=function(element,data,options){

	$.plot(element,data,options);
}


  
});