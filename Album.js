import React from 'react';
import { View, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Album = () => {
  const albumImages = [
    { source: require('./images/album01.jpg'), id: 1 },
    { source: require('./images/album02.jpg'), id: 2 },
    { source: require('./images/album03.jpg'), id: 3 },
    { source: require('./images/album04.png'), id: 4 },
    { source: require('./images/album05.png'), id: 5 },
    { source: require('./images/album06.png'), id: 6 },
    // Agrega más imágenes de álbum aquí
  ];

  const handleImagePress = (id) => {
    // Acción al hacer clic en la imagen (puedes agregar funcionalidad aquí)
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Buscar en el álbum..."
          style={styles.searchInput}
        />
      </View>
      <View style={styles.albumImages}>
        {albumImages.map((image) => (
          <TouchableOpacity
            key={image.id}
            style={styles.albumImageContainer}
            onPress={() => handleImagePress(image.id)}
          >
            <Image
              source={image.source}
              style={styles.albumImage}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 5,
  },
  albumImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  albumImageContainer: {
    width: '32%', // 3 imágenes en una fila
    aspectRatio: 1,
    marginBottom: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  albumImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default Album;
