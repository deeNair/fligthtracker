const React= require('react');

function Index(props){
const {flights} = props;

console.log(flights);
    
return(
<div>
<h1>All Flights</h1>
<h2><a href={`/flights/new`}> Add Flights</a></h2>
<ul>
    {
      flights.map((flight,i)=>{
        return(

            <li key={flight._id}>
               <h1> Airline:{flight.airline}{' '}</h1> 
                <h2>Flightno:{flight.flightNo}</h2>
                <h3></h3>Departs at:{flight.departs.toString()}
            </li>
            //not static methods, works only on instances.
            //{new Date(flight.departs).toLocaleDateString()}
            
        )
      })
      }
    
</ul>

</div>

    )
}

module.exports= Index;