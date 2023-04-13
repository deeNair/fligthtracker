const React = require('react');

function New(){
    return(
        <div>
            <h1> Enter Flight info</h1>
            <form action='/flights' method='POST'>
                airline:<input type="text" name="airline" />
                <br />
                <br />
                flightNo:<input type="text" name="flightNo"/>
                <br />
                <br />
               departs:<input type="datetime-local" value="2023-06-12T19:30" name="departs"/>
                <br />
                <br />
                <input type="submit" value="create new flight"/>

            </form>
            <h2><a href={`/flights`}>view all flights</a></h2>
        </div>
    )
}

module.exports=New;