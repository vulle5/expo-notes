import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  app: {
    margin: 16
  },
  header: {
    fontSize: 32,
    marginVertical: 8
  },
  header2: {
    fontSize: 24,
    marginVertical: 8
  },
  text: {
    fontSize: 16
  },
  newNote: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4
  }
});

export const newNoteStyles = StyleSheet.create({
  newNote: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4
  }
});

export const noteCardStyles = StyleSheet.create({
  noteCard: {
    elevation: 2,
    backgroundColor: '#fefefe',
    borderRadius: 4,
    marginVertical: 8,
    padding: 8
  }
});
