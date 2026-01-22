import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Верхняя часть с LifeScore */}
      <View style={styles.header}>
        <Text style={styles.title}>LifeScore</Text>
        <Text style={styles.score}>72</Text>
      </View>

      {/* Карточки атрибутов */}
      <ScrollView style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.emoji}>💪</Text>
          <Text style={styles.cardTitle}>Health</Text>
          <Text style={styles.cardValue}>85/100</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>🧠</Text>
          <Text style={styles.cardTitle}>Mind</Text>
          <Text style={styles.cardValue}>70/100</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>💰</Text>
          <Text style={styles.cardTitle}>Finance</Text>
          <Text style={styles.cardValue}>45/100</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>👥</Text>
          <Text style={styles.cardTitle}>Social</Text>
          <Text style={styles.cardValue}>90/100</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.emoji}>⚡</Text>
          <Text style={styles.cardTitle}>Energy</Text>
          <Text style={styles.cardValue}>60/100</Text>
        </View>
      </ScrollView>

      {/* Кнопка добавления */}
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      {/* Нижняя навигация */}
      <View style={styles.navBar}>
        <Text style={styles.navIcon}>🏠</Text>
        <Text style={styles.navIcon}>🎯</Text>
        <Text style={styles.navIcon}>📊</Text>
        <Text style={styles.navIcon}>👤</Text>
      </View>
    </SafeAreaView>
  );
}

// Стили (дизайн)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
  title: {
    fontSize: 34,
    color: '#FFFFFF',
    fontWeight: '600',
    fontFamily: 'Inter', // Это сработает, если шрифт есть
  },
  score: {
    fontSize: 80,
    color: '#32D74B',
    fontWeight: 'bold',
    marginTop: 10,
  },
  cardsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#2C2C2C',
    borderRadius: 16,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 24,
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
    flex: 1,
  },
  cardValue: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
    backgroundColor: '#32D74B',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#2C2C2C',
    borderTopWidth: 1,
    borderTopColor: '#404040',
  },
  navIcon: {
    fontSize: 24,
  },
});