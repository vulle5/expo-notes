import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

export const styles = StyleSheet.create({
  app: {
    margin: 12
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8
  },
  header2: {
    fontSize: 24,
    marginVertical: 8
  },
  text: {
    fontSize: 16
  },
  transparentContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 60 : 80
  }
});

export const appStyles = StyleSheet.create({
  newNote: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    marginTop: 12
  }
});

export const noteCardStyles = StyleSheet.create({
  noteCard: {
    elevation: 2,
    backgroundColor: '#fefefe',
    borderRadius: 4,
    marginVertical: 8,
    padding: 8
  },
  deleteButton: {
    position: 'absolute',
    right: 0,
    margin: 8
  }
});
