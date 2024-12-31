// DonationScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  TextInput,
  Alert 
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DonationScreen = ({ navigation }) => {
  const [amount, setAmount] = useState('');
  const [selectedTemple, setSelectedTemple] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const temples = [
    { id: 1, name: 'Lingarajapuram Temple', location: 'Bangalore' },
    { id: 2, name: 'Main Temple', location: 'Udaipur' }
  ];

  const paymentMethods = [
    { id: 'upi', name: 'UPI', icon: 'cellphone' },
    { id: 'card', name: 'Credit/Debit Card', icon: 'credit-card' },
    { id: 'netbanking', name: 'Net Banking', icon: 'bank' },
    { id: 'wallet', name: 'Digital Wallet', icon: 'wallet' }
  ];

  const predefinedAmounts = [101, 501, 1001, 2001, 5001];

  const handleDonation = () => {
    if (!amount || !selectedTemple || !selectedPaymentMethod) {
      Alert.alert('Required Fields', 'Please fill in all required fields');
      return;
    }
    
    // Here you would integrate with your payment gateway
    Alert.alert(
      'Confirm Donation',
      `Confirm donation of ₹${amount} to ${selectedTemple.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Confirm', 
          onPress: () => {
            // Implement payment gateway integration here
            console.log('Process payment', {
              amount,
              temple: selectedTemple,
              paymentMethod: selectedPaymentMethod
            });
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#4a90e2', '#357abd']}
        style={styles.header}
      >
        <Text style={styles.headerTitle}>Temple Donation</Text>
        <Text style={styles.headerSubtitle}>Support our heritage</Text>
      </LinearGradient>

      <View style={styles.content}>
        {/* Temple Selection */}
        <Text style={styles.sectionTitle}>Select Temple</Text>
        <View style={styles.templeContainer}>
          {temples.map(temple => (
            <TouchableOpacity
              key={temple.id}
              style={[
                styles.templeCard,
                selectedTemple?.id === temple.id && styles.selectedCard
              ]}
              onPress={() => setSelectedTemple(temple)}
            >
              <MaterialCommunityIcons name="temple-hindu" size={24} color="#4a90e2" />
              <Text style={styles.templeName}>{temple.name}</Text>
              <Text style={styles.templeLocation}>{temple.location}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Amount Selection */}
        <Text style={styles.sectionTitle}>Select Amount</Text>
        <View style={styles.amountContainer}>
          {predefinedAmounts.map((preAmount) => (
            <TouchableOpacity
              key={preAmount}
              style={[
                styles.amountButton,
                amount === preAmount.toString() && styles.selectedAmount
              ]}
              onPress={() => setAmount(preAmount.toString())}
            >
              <Text style={styles.amountText}>₹{preAmount}</Text>
            </TouchableOpacity>
          ))}
        </View>
        
        <TextInput
          style={styles.customAmount}
          placeholder="Enter custom amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        {/* Payment Method Selection */}
        <Text style={styles.sectionTitle}>Select Payment Method</Text>
        <View style={styles.paymentContainer}>
          {paymentMethods.map(method => (
            <TouchableOpacity
              key={method.id}
              style={[
                styles.paymentMethod,
                selectedPaymentMethod?.id === method.id && styles.selectedPayment
              ]}
              onPress={() => setSelectedPaymentMethod(method)}
            >
              <MaterialCommunityIcons name={method.icon} size={24} color="#4a90e2" />
              <Text style={styles.paymentText}>{method.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Donation Button */}
        <TouchableOpacity 
          style={styles.donateButton}
          onPress={handleDonation}
        >
          <LinearGradient
            colors={['#4CAF50', '#45a049']}
            style={styles.donateGradient}
          >
            <Text style={styles.donateText}>Proceed to Donate</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 12,
    color: '#333',
  },
  templeContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  templeCard: {
    width: '48%',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    elevation: 2,
  },
  selectedCard: {
    borderColor: '#4a90e2',
    borderWidth: 2,
  },
  templeName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  templeLocation: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  amountContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  amountButton: {
    width: '18%',
    padding: 12,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
  },
  selectedAmount: {
    backgroundColor: '#4a90e2',
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  customAmount: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 20,
    fontSize: 16,
  },
  paymentContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 8,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedPayment: {
    backgroundColor: '#f0f9ff',
  },
  paymentText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#333',
  },
  donateButton: {
    marginTop: 24,
    marginBottom: 32,
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
  },
  donateGradient: {
    padding: 16,
    alignItems: 'center',
  },
  donateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default DonationScreen;