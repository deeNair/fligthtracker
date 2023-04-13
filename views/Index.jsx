const React= require('react');

function Index(props){
const {flights} = props;

console.log(flights);
    
return(
<div style={{backgroundColor:'#F0F0F0',color:'black' }}>
<h1 style={{backgroundColor:'#3C486B',color:'black',padding:'50px'}}>All Flights</h1>
<h2 ><a href={`/flights/new`}> Add Flights</a></h2>
<ul>
    {
      flights.map((flight,i)=>{
        return(

            <li key={flight._id}>
               <h1> {flight.airline}{' '}Airlines</h1> 
                <h2>Flight_Number:{flight.flightNo}</h2>
                <h3>Departure:{flight.departs.toString()}</h3>
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