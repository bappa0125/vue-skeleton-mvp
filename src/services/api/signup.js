import axios from 'axios'
import firebase from 'firebase'
import 'firebase/firestore'
import '@firebase/auth'
import firebaseConfig from './firebaseConfig'
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default {
  userSignUp(payload) {
    console.log(`The name is ${payload.name}`)
    // return firebase.auth.createUserWithEmailAndPassword(payload.email,payload.password)
    return firebaseApp
      .auth()
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(success => {
        const responseJson = JSON.stringify(success)
        console.log('createUserWithEmailAndPassword.responseJson', responseJson)
        response.send(responseJson)
      })
      .catch(error => {
        const errorJson = JSON.stringify(error)
        console.log('createUserWithEmailAndPassword.errorJson', errorJson)
        response.send(errorJson)
      })
    // return axios.post('/register', payload)
  }
}
