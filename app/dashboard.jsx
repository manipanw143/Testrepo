import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import CircularProgress from './circularprogess';
import { AddressTab, ContactTab, EducationTab, FamilyTab, JobTab, OverviewTab, PersonalTab } from './Tabcomponet';

const windowWidth = Dimensions.get('window').width;

const Dashboard = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'overview', title: 'Overview' },
    { key: 'personal', title: 'Personal' },
    { key: 'job', title: 'Job' },
    { key: 'contact', title: 'Contact' },
    { key: 'family', title: 'Family' },
    { key: 'education', title: 'Education' },
    { key: 'address', title: 'Address' },
  ]);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  const user = {
    name: 'John Doe',
    photo: 'https://via.placeholder.com/150',
    profileCompletion: 85,
    personalInfo: {
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      dateOfBirth: 'January 15, 1985',
      nationality: 'American',
      gender: 'Male',
    },
    jobInfo: {
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      experience: '10 years',
      skills: ['React Native', 'JavaScript', 'Node.js', 'Python'],
    },
    contactInfo: {
      email: 'john.doe@example.com',
      phone: '+1 (555) 123-4567',
      linkedin: 'linkedin.com/in/johndoe',
      github: 'github.com/johndoe',
    },
    familyInfo: {
      maritalStatus: 'Married',
      spouse: 'Jane Doe',
      children: 2,
    },
    education: [
      {
        degree: 'Master of Science in Computer Science',
        institution: 'Stanford University',
        year: '2010',
      },
      {
        degree: 'Bachelor of Science in Software Engineering',
        institution: 'MIT',
        year: '2008',
      },
    ],
    address: {
      street: '123 Tech Street',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      country: 'USA',
    },
  };

  const renderScene = SceneMap({
    overview: () => <OverviewTab user={user} />,
    personal: () => <PersonalTab user={user} />,
    job: () => <JobTab user={user} />,
    contact: () => <ContactTab user={user} />,
    family: () => <FamilyTab user={user} />,
    education: () => <EducationTab user={user} />,
    address: () => <AddressTab user={user} />,
  });

  if (!fontsLoaded) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImageContainer}>
          <Image source={{ uri: user.photo }} style={styles.profileImage} />
          <CircularProgress percentage={user.profileCompletion} />
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.completionText}>
          {user.profileCompletion}% Profile Completed
        </Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: windowWidth }}
        renderTabBar={props => (
          <TabBar
            {...props}
            scrollEnabled
            style={styles.tabBar}
            labelStyle={styles.tabLabel}
            indicatorStyle={styles.tabIndicator}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#4A90E2',
  },
  profileImageContainer: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  name: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 24,
    color: '#FFFFFF',
    marginTop: 10,
  },
  completionText: {
    fontFamily: 'Roboto_400Regular',
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
  },
  tabBar: {
    backgroundColor: '#4A90E2',
  },
  tabLabel: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 12,
  },
  tabIndicator: {
    backgroundColor: '#FFFFFF',
  },
});

export default Dashboard;

