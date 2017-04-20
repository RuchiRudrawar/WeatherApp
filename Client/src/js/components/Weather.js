var React=require('react');
var WeatherChild=require('./WeatherChild.js');
var check=false;
var Weather=React.createClass({
getInitialState :function()
{
return({weatherData:[]});
},
getWeatherData:function()
{  
$.ajax({
url:'http://api.openweathermap.org/data/2.5/forecast?q='+this.refs.city.value+'&appid=5f1da6128a807b99bd3625d84cc3ac98',
dataType:'json',
async:false,
type:'GET',
success:function(data)
{
  check=true;
  this.setState({weatherData:data});

}.bind(this),
error: function(xhr, status, err) {
   console.error(err.toString());
 }.bind(this),

});

},
render:function()
{
var finalData;
if(check)
{
  finalData=<WeatherChild cityData={this.state.weatherData} />
}
console.log("data1");
console.log(this.state.weatherData);
return(

        <div className="form-group" id="search">
        <h3>Enter City Name</h3><input type="text" className="form-control"  ref="city" id="t12"/>
        <button type="submit" onClick={this.getWeatherData} className="btn btn-default" id="button">Search</button>
     {finalData}

        </div>)

}
})
module.exports=Weather;
