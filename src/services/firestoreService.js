import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import {db} from "../firebase";

// Récupérer les documents
export const getDocuments = async (collectionName) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Ajouter un document
export const addDocument = async (collectionName, data) => {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
};

// Mettre à jour un document
export const updateDocument = async (collectionName, id, data) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data);
};

// Supprimer un document
export const deleteDocument = async (collectionName, id) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
};