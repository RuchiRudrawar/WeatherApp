var React=require('react');

var WeatherGrandChild=React.createClass({

 render:function(){
 return(<div className="container-fluid">
 <table className="table table-bordered table-inverse" >

 <tr>
 <th>Date</th>
 <th>DESCRIPTION</th>
 <th>HUMIDITY</th> 
 <th>PRESSURE</th>
 <th>TEMPERATURE</th>
 <th>TEMPERATURE MIN</th>
 <th>TEMPERATURE MAX</th>
 </tr>
 <tr>
 <td>{this.props.dt_txt}</td> 
 <td>{this.props.description}</td>
 <td>{this.props.humidity}</td>
 <td>{this.props.pressure}</td>
 <td>{this.props.temp}</td>
 <td>{this.props.temp_min}</td>
 <td>{this.props.temp_max}</td>
 </tr>
 <br/>
 </table>
 </div>
)
}
});
 module.exports=WeatherGrandChild;
