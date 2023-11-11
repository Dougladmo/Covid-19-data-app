import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import BrasilCard from './components/BrasilCard';
import CovidDataComponent from './components/CovidDataComponent';

export default function App() {
  const [covidData, setCovidData] = useState(null);

  useEffect(() => {
    // Realize uma chamada à API COVID-19 para obter os dados mais recentes.
    fetch('https://api.apify.com/v2/key-value-stores/TyToNta7jGKkpszMZ/records/LATEST?disableRedirect=true')
      .then((res) => res.json())
      .then((data) => {
        setCovidData(data);

      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <BrasilCard state='Todo o Brasil' infecteds={covidData.infected} presunts={covidData.deceased} />
      <CovidDataComponent data={covidData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#490381',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 100,
    fontSize: 25,
  }
});
