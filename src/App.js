import './App.css';
import ReactWeather, {useOpenWeather} from 'react-open-weather';

function App () {
    const {data, isLoading, errorMessage} = useOpenWeather({
        key: 'a93f5ae9362313665d7333a5494ff13e', // just the dummy data. will be removed
        lat: '13.7495868', lon: '90.3905', lang: 'en', unit: 'metric', // values are (metric, standard, imperial)
    });
    return (<div className = "App">
        <ReactWeather
            isLoading = {isLoading}
            errorMessage = {errorMessage}
            data = {data}
            lang = "en"
            locationLabel = "Nairobi"
            unitsLabels = {{temperature: 'C', windSpeed: 'Km/h'}}
            showForecast
        />
    </div>);
}

export default App;
