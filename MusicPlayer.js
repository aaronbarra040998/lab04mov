import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const MusicPlayer = () => {
  const playlist = [
    { artist: 'Stromae', title: 'Alors on danse', albumCover: require('./images/stromae.png') },
    { artist: 'Stromae', title: 'Fils de joie', albumCover: require('./images/stromae.png') },
    { artist: 'Stromae', title: 'Papaoutai', albumCover: require('./images/stromae.png') },
    { artist: 'Rammstein', title: 'Du Hast', albumCover: require('./images/rammstein.jpg') },
    { artist: 'Rammstein', title: 'Sonne', albumCover: require('./images/rammstein.jpg') },
    { artist: 'Rammstein', title: 'Engel', albumCover: require('./images/rammstein.jpg') },
    { artist: 'System Of A Down', title: 'Innervision', albumCover: require('./images/system.png') },
    { artist: 'System Of A Down', title: 'Chop Suey!', albumCover: require('./images/system.png') },
    { artist: 'System Of A Down', title: 'Aerials', albumCover: require('./images/system.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.albumInfo}>
        <Image
          source={require('./images/cubierta.png')}
          style={styles.albumCover}
        />
        <View style={styles.songDetails}>
          <Text style={styles.songTitle}>Self Control</Text>
          <Text style={styles.artist}>Laura Branigan</Text>
        </View>
      </View>
      <View style={styles.controls}>
      <TouchableOpacity style={styles.controlButton}>
          <Image
            source={require('./images/play_button4.png')}
            style={styles.controlIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Image
            source={require('./images/play_button2.png')}
            style={styles.controlIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Image
            source={require('./images/play_button1.png')}
            style={styles.controlIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Image
            source={require('./images/play_button3.png')}
            style={styles.controlIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Image
            source={require('./images/play_button5.png')}
            style={styles.controlIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar canciones..."
          style={styles.searchInput}
        />
      </View>
      <View style={styles.playlistContainer}>
        <ScrollView>
          {playlist.map((song, index) => (
            <TouchableOpacity
              key={index}
              style={styles.songContainer}
              onPress={() => {}}
            >
              <Image
                source={song.albumCover}
                style={styles.playlistImage}
              />
              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>{song.title}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  albumInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  albumCover: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 3, // agrega bordes redondeados si lo deseas
    resizeMode: 'cover', // ajusta el modo de redimensionamiento según lo que necesites
    // Agrega más estilos según tus preferencias
  },
  songDetails: {
    flex: 1,
  },
  songTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  artist: {
    fontSize: 16,
    color: 'gray',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  controlButton: {
    marginHorizontal: 20,
  },
  controlIcon: {
    width: 40,
    height: 40,
  },
  searchContainer: {
    width: '100%',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  playlistContainer: {
    flex: 1,
    width: '100%',
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  playlistImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  songInfo: {
    flex: 1,
  },
});

export default MusicPlayer;
