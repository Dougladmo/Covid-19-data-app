import React, { useEffect } from 'react';
import { useState } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import RegionCard from './RegionCard';
import BrasilCard from './BrasilCard';

const CovidDataComponent = ({ data }) => {

  if (!data || !data.infectedByRegion) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      {data.infectedByRegion.map((region, index) => (
        <RegionCard presunts={data.deceasedByRegion[index].count} infecteds={data.infectedByRegion[index].count} region={region}  key={index} state={data.infectedByRegion[index].state} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#490381',
      width: '360px',
      padding: 20,
    },
    title: {
      marginTop: 100,
      fontSize: 25,
    }
  });
  

export default CovidDataComponent;