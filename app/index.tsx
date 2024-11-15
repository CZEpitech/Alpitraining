import { Entypo, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';
import styles from './styles';
import activities from './activities'


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'activity' | 'notifications' | 'profile'>('home');



  const HomePage = () => (
    <ScrollView style={styles.feedContainer}>
      {activities.map((item) => (
        <View key={item.id} style={styles.activityCard}>
          <View style={styles.activityCardHeader}>
            <TouchableOpacity style={styles.activityAvatarContainer}>
              <Image source={{ uri: item.user.avatar }} style={styles.activityAvatar} />
            </TouchableOpacity>
            <View style={styles.activityHeaderText}>
              <Text style={styles.activityName}>{item.user.name}</Text>
              <Text style={styles.activitySubtitle}>{item.user.location}</Text>
              <Text style={styles.activitySubtitle}>{item.activity.date}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => setCurrentPage('activity')}>
            <Image source={{ uri: item.activity.image }} style={styles.activityCardImage} />
          </TouchableOpacity>
          <View style={styles.activityContent}>
            <Text style={styles.activityTitle}>{item.activity.title}</Text>
            <Text style={styles.activityDescription}>{item.activity.description}</Text>
          </View>
          <View style={styles.interactionSection}>
            <TouchableOpacity style={styles.interactionItem}>
              <Entypo name="heart" size={18} color="#FF6347" />
              <Text style={styles.interactionText}>Pikes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.interactionItem}>
              <FontAwesome5 name="comment-dots" size={18} color="#ccc" />
              <Text style={styles.interactionText}>Commenter</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );

  const ActivityPage = () => (
    <ScrollView style={styles.activityPage}>
      <Text style={styles.activityPageTitle}>Détails de l'Activité</Text>
      <View style={styles.activityHeader}>
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
            <Text style={styles.activitySubtitle}>Il y a 2 jours</Text>
          </View>
        </View>
        <Text style={styles.activityTitle}>Randonnée au Lac d'Annecy</Text>
        <Text style={styles.activityDescription}>
          15 km - 800 m D+ - 3h
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
              latitude: 45.899247,
              longitude: 6.129384,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }}
          >
            <Marker
              coordinate={{ latitude: 45.899247, longitude: 6.129384 }}
              title="Lac d'Annecy"
              description="Point de départ"
            />
            <Marker
              coordinate={{ latitude: 45.915, longitude: 6.135 }}
              title="Belvédère"
            />
            <Polyline
              coordinates={[
                { latitude: 45.899247, longitude: 6.129384 },
                { latitude: 45.915, longitude: 6.135 },
                { latitude: 45.899247, longitude: 6.129384 },
              ]}
              strokeColor="#32CD32"
              strokeWidth={4}
            />
          </MapView>
        </View>
        <View style={styles.stats}>
          <View style={styles.statItem}>
            <FontAwesome5 name="road" size={24} color="#1E90FF" />
            <Text style={styles.statValue}>15 km</Text>
            <Text style={styles.statLabel}>Distance</Text>
          </View>
          <View style={styles.statItem}>
            <FontAwesome5 name="mountain" size={24} color="#32CD32" />
            <Text style={styles.statValue}>800 m</Text>
            <Text style={styles.statLabel}>Dénivelé</Text>
          </View>
          <View style={styles.statItem}>
            <Ionicons name="time-outline" size={24} color="#FF8C00" />
            <Text style={styles.statValue}>3h</Text>
            <Text style={styles.statLabel}>Durée</Text>
          </View>
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
            <Text style={styles.commentName}>Sophie Laurent</Text>
            <Text style={styles.commentText}>Belle randonnée ! 🏞️</Text>
            <View style={styles.commentActions}>
              <TouchableOpacity style={styles.commentActionButton}>
                <Entypo name="thumbs-up" size={16} color="#FF6347" />
                <Text style={styles.commentActionText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.commentActionButton}>
                <Text style={styles.commentActionText}>Répondre</Text>
              </TouchableOpacity>
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
            <Text style={styles.commentName}>Lucas Moreau</Text>
            <Text style={styles.commentText}>J'aimerais y aller aussi !</Text>
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
  );

  const NotificationsPage = () => (
    <ScrollView style={styles.notificationsPage}>
      <View style={styles.notificationsHeader}>
        <Text style={styles.notificationsTitle}>Notifications</Text>
      </View>
      <View style={[styles.notificationItem, styles.shadow]}>
        <Entypo name="notification" size={24} color="#FF6347" style={styles.notificationIcon} />
        <Text style={styles.notificationText}>Votre randonnée a été publié !</Text>
      </View>
      <View style={[styles.notificationItem, styles.shadow]}>
        <Ionicons name="person-add" size={24} color="#1E90FF" style={styles.notificationIcon} />
        <Text style={styles.notificationText}>Nouvel ami ajouté : Claire.</Text>
      </View>
      <View style={[styles.notificationItem, styles.shadow]}>
        <FontAwesome5 name="bell" size={24} color="#32CD32" style={styles.notificationIcon} />
        <Text style={styles.notificationText}>Vous avez un nouveau message.</Text>
      </View>
    </ScrollView>
  );

  const ProfilePage = () => (
    <ScrollView style={styles.profilePage}>
      <View style={styles.profileHeader}>
        <Image
          source={{
            uri: 'https://img.freepik.com/photos-gratuite/gros-plan-homme-souriant-prenant-selfie_23-2149155156.jpg',
          }}
          style={styles.profileAvatar}
        />
        <Text style={styles.profileName}>Jonas Darbellay</Text>
        <Text style={styles.profileSubtitle}>Annecy, Haute-Savoie</Text>
      </View>
      <TouchableOpacity style={[styles.profileOption, styles.shadow]}>
        <Ionicons name="settings" size={24} color="#fff" />
        <Text style={styles.profileOptionText}>Paramètres</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.profileOption, styles.shadow]}>
        <Ionicons name="help-circle" size={24} color="#fff" />
        <Text style={styles.profileOptionText}>Aide</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.profileOption, styles.shadow]}>
        <Ionicons name="log-out" size={24} color="#fff" />
        <Text style={styles.profileOptionText}>Se déconnecter</Text>
      </TouchableOpacity>
    </ScrollView>
  );

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
      {currentPage === 'home' ? (
        <HomePage />
      ) : currentPage === 'activity' ? (
        <ActivityPage />
      ) : currentPage === 'notifications' ? (
        <NotificationsPage />
      ) : (
        <ProfilePage />
      )}
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
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setCurrentPage('home')}
        >
          <Ionicons
            name="home"
            size={28}
            color={currentPage === 'home' ? '#FF6347' : '#ccc'}
          />
          <Text
            style={
              currentPage === 'home' ? styles.navTextActive : styles.navText
            }
          >
            Accueil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setCurrentPage('activity')}
        >
          <FontAwesome5
            name="running"
            size={24}
            color={currentPage === 'activity' ? '#FF6347' : '#ccc'}
          />
          <Text
            style={
              currentPage === 'activity'
                ? styles.navTextActive
                : styles.navText
            }
          >
            Activité
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setCurrentPage('notifications')}
        >
          <Ionicons
            name="notifications"
            size={24}
            color={currentPage === 'notifications' ? '#FF6347' : '#ccc'}
          />
          <Text
            style={
              currentPage === 'notifications'
                ? styles.navTextActive
                : styles.navText
            }
          >
            Notifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setCurrentPage('profile')}
        >
          <Ionicons
            name="person"
            size={24}
            color={currentPage === 'profile' ? '#FF6347' : '#ccc'}
          />
          <Text
            style={
              currentPage === 'profile' ? styles.navTextActive : styles.navText
            }
          >
            Profil
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
