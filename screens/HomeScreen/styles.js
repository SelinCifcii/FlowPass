import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  topview: {
    paddingTop: 60,
    paddingHorizontal: 24,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  greeting: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#2d2d2d",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    marginBottom: 30,
    zIndex: 1,
  },
  searchTitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 12,
  },
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2d2d2d",
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 50,
    zIndex: 1,
  },
  bottomview: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 20,
  },
  statsCard: {
    backgroundColor: "#2d2d2d",
    marginHorizontal: 24,
    padding: 20,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  statInfo: {
    marginLeft: 12,
  },
  statLabel: {
    fontSize: 14,
    color: "#666",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 4,
  },
  divider: {
    width: 1,
    backgroundColor: "#666",
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginHorizontal: 24,
    marginTop: 30,
    marginBottom: 16,
  },
  transportList: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  transportCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2d2d2d",
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  transportInfo: {
    flex: 1,
  },
  transportName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
  transportDetail: {
    flexDirection: "row",
    alignItems: "center",
  },
  transportTime: {
    fontSize: 14,
    color: "#666",
    marginLeft: 4,
  },
});