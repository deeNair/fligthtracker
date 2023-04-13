const React = require('react');

function New(){
    return(
        <div style={{backgroundColor:'#F0F0F0',color:'black' }}>
            <h1 style={{backgroundColor:'#3C486B',color:'black',padding:'50px'}}> Enter Flight info</h1>
            <form action='/flights' method='POST'>
                Airline:<input type="text" name="airline" />
                <br />
                <br />
                FlightNo:<input type="text" name="flightNo"/>
                <br />
                <br />
               Departs:<input type="datetime-local" value="2023-06-12T19:30" name="departs"/>
                <br />
                <br />
                <input type="submit" value="create new flight"/>

            </form>
            <h2><a href={`/flights`}>view all flights</a></h2>
        </div>
    )
}

module.exports=New;