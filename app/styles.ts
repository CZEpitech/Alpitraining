import { StyleSheet } from 'react-native';
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
  activityPage: {
    flex: 1,
    padding: 16,
    backgroundColor: '#141313',
  },
  activityPageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  notificationsPage: {
    flex: 1,
    padding: 16,
    backgroundColor: '#141313',
  },
  notificationsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  notificationsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  notificationIcon: {
    marginRight: 12,
  },
  notificationText: {
    color: '#fff',
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },
  profilePage: {
    flex: 1,
    padding: 16,
    backgroundColor: '#141313',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 12,
  },
  profileSubtitle: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 4,
  },
  profileOption: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  profileOptionText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 12,
  },
  feedContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  activityCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    marginTop: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  activityCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  activityCardImage: {
    width: '100%',
    height: 200,
  },
});

export default styles;