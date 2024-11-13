import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141313',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#1E1E1E',
  },
  avatarContainer: {
    padding: 2,
    borderRadius: 25,
    backgroundColor: '#1E1E1E',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  headerText: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#aaa',
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  activityHeader: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    marginTop: 16,
    overflow: 'hidden',
  },
  activityHeaderTop: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  activityAvatarContainer: {
    padding: 2,
    borderRadius: 20,
    backgroundColor: '#1E1E1E',
  },
  activityAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  activityHeaderText: {
    flex: 1,
    marginLeft: 12,
  },
  activityName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  activitySubtitle: {
    fontSize: 14,
    color: '#aaa',
  },
  activityTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  activityDescription: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 4,
    paddingHorizontal: 16,
  },
  userMessage: {
    fontSize: 16,
    color: '#fff',
    marginTop: 12,
    paddingHorizontal: 16,
  },
  activityImage: {
    width: '100%',
    height: 200,
    marginTop: 16,
  },
  activityContent: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    marginTop: 16,
    overflow: 'hidden',
  },
  mapContainer: {
    height: 250,
    width: '100%',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    backgroundColor: '#1E1E1E',
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#fff',
  },
  statLabel: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#2A2A2A',
    marginHorizontal: 16,
  },
  interactionSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 14,
  },
  interactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  interactionText: {
    fontSize: 16,
    color: '#fff',
    marginLeft: 6,
  },
  commentsSection: {
    marginTop: 24,
  },
  commentItem: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  commentContent: {
    flex: 1,
  },
  commentName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  commentText: {
    fontSize: 15,
    color: '#ccc',
    marginTop: 4,
  },
  commentActions: {
    flexDirection: 'row',
    marginTop: 8,
  },
  commentActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  commentActionText: {
    fontSize: 14,
    color: '#FF6347',
    marginLeft: 4,
  },
  replyItem: {
    flexDirection: 'row',
    marginTop: 12,
    paddingLeft: 40,
  },
  replyAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  replyContent: {
    flex: 1,
  },
  replyName: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#fff',
  },
  replyText: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 2,
  },
  fabContainer: {
    position: 'absolute',
    bottom: 120,
    right: 20,
    alignItems: 'flex-end',
  },
  fabButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#FF6347',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#1c1b1b',
    borderRadius: 8,
    marginBottom: 10,
    paddingVertical: 10,
    width: 200,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  menuItemText: {
    color: '#fff',
    fontSize: 16,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    backgroundColor: '#1E1E1E',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 13,
    color: '#ccc',
    marginTop: 4,
  },
  navTextActive: {
    fontSize: 13,
    color: '#FF6347',
    marginTop: 4,
  },
});

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, styles.shadow]}>
        <TouchableOpacity style={styles.avatarContainer}>
          <Image
            source={{
              uri: 'https://img.freepik.com/photos-gratuite/gros-plan-homme-souriant-prenant-selfie_23-2149155156.jpg',
            }}
            style={styles.avatar}
          />
        </TouchableOpacity>
        <View style={styles.headerText}>
          <Text style={styles.name}>Jonas Darbellay</Text>
          <Text style={styles.subtitle}>Annecy, Haute-Savoie</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://www.alpitraining.com/app/themes/alpi-training-landing/dist/images/apple-touch-icon.png',
            }}
            style={styles.headerIcon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        <View style={[styles.activityHeader, styles.shadow]}>
          <View style={styles.activityHeaderTop}>
            <TouchableOpacity style={styles.activityAvatarContainer}>
              <Image
                source={{
                  uri: 'https://img.freepik.com/photos-gratuite/gros-plan-homme-souriant-prenant-selfie_23-2149155156.jpg',
                }}
                style={styles.activityAvatar}
              />
            </TouchableOpacity>
            <View style={styles.activityHeaderText}>
              <Text style={styles.activityName}>Jonas Darbellay</Text>
              <Text style={styles.activitySubtitle}>Le 12 Septembre à 14h</Text>
            </View>
          </View>
          <Text style={styles.activityTitle}>Trail en Montagne</Text>
          <Text style={styles.activityDescription}>
            42 km - 2500 m D+ - 5h30
          </Text>
          <Text style={styles.userMessage}>
            Je l&apos;ai fait c&apos;était compliqué 😅
          </Text>
          <Image
            source={{
              uri: 'https://www.forestryengland.uk/sites/default/files/media/david-marcu-69433-unsplash.jpg',
            }}
            style={styles.activityImage}
          />
        </View>
        <View style={[styles.activityContent, styles.shadow]}>
          <View style={styles.mapContainer}>
            <MapView
              style={styles.map}
              initialRegion={{
                latitude: 45.919,
                longitude: 6.095,
                latitudeDelta: 0.1,
                longitudeDelta: 0.1,
              }}
            >
              <Marker
                coordinate={{ latitude: 45.899247, longitude: 6.129384 }}
                title="Annecy"
                description="Point de départ"
              />
              <Marker
                coordinate={{ latitude: 45.942, longitude: 6.14 }}
                title="Argonay"
              />
              <Marker
                coordinate={{ latitude: 45.919, longitude: 6.06 }}
                title="Poisy"
              />
              <Polyline
                coordinates={[
                  { latitude: 45.899247, longitude: 6.129384 },
                  { latitude: 45.942, longitude: 6.14 },
                  { latitude: 45.919, longitude: 6.06 },
                  { latitude: 45.899247, longitude: 6.129384 },
                ]}
                strokeColor="#FF6347"
                strokeWidth={4}
              />
            </MapView>
          </View>
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <FontAwesome5 name="road" size={24} color="#1E90FF" />
              <Text style={styles.statValue}>42 km</Text>
              <Text style={styles.statLabel}>Distance</Text>
            </View>
            <View style={styles.statItem}>
              <FontAwesome5 name="mountain" size={24} color="#32CD32" />
              <Text style={styles.statValue}>2500 m</Text>
              <Text style={styles.statLabel}>Dénivelé</Text>
            </View>
            <View style={styles.statItem}>
              <Ionicons name="time-outline" size={24} color="#FF8C00" />
              <Text style={styles.statValue}>5h30</Text>
              <Text style={styles.statLabel}>Durée</Text>
            </View>
          </View>
          <View style={styles.separator} />
          <View style={styles.interactionSection}>
            <TouchableOpacity style={styles.interactionItem}>
              <Entypo name="heart" size={18} color="#FF6347" />
              <Text style={styles.interactionText}>40 Peaks</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interactionItem}>
              <FontAwesome5 name="comment-dots" size={18} color="#ccc" />
              <Text style={styles.interactionText}>6 Commentaires</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.commentsSection}>
          <View style={[styles.commentItem, styles.shadow]}>
            <Image
              source={{
                uri: 'https://media.istockphoto.com/id/973159306/fr/photo/mon-jeu-de-selfie-est-sur-le-point.jpg?s=612x612&w=0&k=20&c=FT63szl3xXysfH81uXpF6By8-2YD1Oy-G76v4jH1e5I=',
              }}
              style={styles.commentAvatar}
            />
            <View style={styles.commentContent}>
              <Text style={styles.commentName}>Marie Dupont</Text>
              <Text style={styles.commentText}>Félicitations ! 🎉</Text>
              <View style={styles.commentActions}>
                <TouchableOpacity style={styles.commentActionButton}>
                  <Entypo name="thumbs-up" size={16} color="#FF6347" />
                  <Text style={styles.commentActionText}>12</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.commentActionButton}>
                  <Text style={styles.commentActionText}>Répondre</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.replyItem}>
                <Image
                  source={{
                    uri: 'https://img.freepik.com/photos-gratuite/gros-plan-homme-souriant-prenant-selfie_23-2149155156.jpg',
                  }}
                  style={styles.replyAvatar}
                />
                <View style={styles.replyContent}>
                  <Text style={styles.replyName}>Jonas Darbellay</Text>
                  <Text style={styles.replyText}>Merci</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.commentItem, styles.shadow]}>
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2024/05/14/20/52/selfie-8762129_1280.jpg',
              }}
              style={styles.commentAvatar}
            />
            <View style={styles.commentContent}>
              <Text style={styles.commentName}>Paul Martin</Text>
              <Text style={styles.commentText}>Super performance 👏</Text>
              <View style={styles.commentActions}>
                <TouchableOpacity style={styles.commentActionButton}>
                  <Entypo name="thumbs-up" size={16} color="#FF6347" />
                  <Text style={styles.commentActionText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.commentActionButton}>
                  <Text style={styles.commentActionText}>Répondre</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.fabContainer}>
        {isMenuOpen && (
          <View style={styles.menu}>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Ajouter un nouveau post</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Enregistrer une session</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          style={styles.fabButton}
          onPress={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Ionicons
            name={isMenuOpen ? 'close' : 'add'}
            size={28}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      <View style={[styles.navbar, styles.shadow]}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home" size={28} color="#FF6347" />
          <Text style={styles.navTextActive}>Accueil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <FontAwesome5 name="running" size={24} color="#ccc" />
          <Text style={styles.navText}>Activité</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="notifications" size={24} color="#ccc" />
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person" size={24} color="#ccc" />
          <Text style={styles.navText}>Profil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
