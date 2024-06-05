import React from 'react';
import './style/App.css';
import Header from './components/Header';
import Search from './components/Search';
import Info from './components/Info';

const API_KEY = "5d3ff5c251c778e2e4b21647e5baf516"

class App extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (e) =>{
        e.preventDefault();
        var city = e.target.elements.city.value;
        
        if(city){
            const api_url = await 
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();

            var sunset = data.sys.sunset;
            var date = new Date();
            date.setTime(sunset);
            var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            
        this.setState({
           temp: data.main.temp,
           city: data.name,
           country: data.sys.country, 
           pressure: data.main.pressure, 
           sunset: sunset_date, 
           error: undefined
        });
    }
        else{
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                error: "Введите название города"
             });
    }
}

    render(){
    return (
        <div className="wrapper">
            <div className='main'>
            <div className='container'>
               <div className='row'>
                    <div className='col-sm-5 info'>
                        <Header/>
                    </div>
                    <div className='col-sm-7 form'>
                        <Search weatherMethod={this.gettingWeather}/>
                        <Info
                            temp={this.state.temp}
                            city={this.state.city}
                            country={this.state.country}
                            pressure={this.state.pressure}
                            sunset={this.state.sunset}
                            error={this.state.error}
                        />
                    </div>
                </div> 
            </div>
        </div>
        </div>
    );
}
}

export default App;
