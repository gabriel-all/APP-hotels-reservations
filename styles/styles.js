import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#0A0F2C', // Azul bem escuro
  },
  hoteisContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'center',
  },
  hoteisText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4FC3F7', // Azul claro
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#4FC3F7',
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4FC3F7',
    marginBottom: 20,
    textAlign: 'left',
    marginLeft: 16,
  },
  fieldContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  fieldTitle: {
    color: '#4FC3F7',
    marginBottom: 5,
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#1A237E', // Azul escuro intermediário
    color: '#fff',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#1A237E',
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    color: '#fff',
  },
  button: {
    height: 50,
    backgroundColor: '#4FC3F7',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginHorizontal: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#0A0F2C',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
  },
  sectionImage: {
    width: 100,
    height: 120,
    marginRight: 10,
  },
  sectionText: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4FC3F7',
  },
  sectionInfo: {
    fontSize: 16,
    color: '#FFF',
  },
  sectionPadel: {
    justifyContent: 'flex-start',
  },
  sectionFutebol: {
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  socialButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  orText: {
    color: '#4FC3F7',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: '#283593',
    padding: 15,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'dotted',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4FC3F7',
  },
  status: {
    marginTop: 10,
    fontSize: 16,
    color: '#FFF',
  },
  map: {
    height: 200,
    marginTop: 10,
  },
  courtCard: {
    borderWidth: 1,
    borderColor: '#4FC3F7',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#1A237E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  courtCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#4FC3F7',
  },
  courtCardText: {
    fontSize: 10,
    color: '#4FC3F7',
  },
  numCourts: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  size: {
    fontSize: 16,
    marginBottom: 5,
    color: '#fff',
  },
  rating: {
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;
