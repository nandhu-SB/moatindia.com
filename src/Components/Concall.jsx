import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Concall.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const Concall = () => {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [articleFiles, setArticleFiles] = useState([]);
  const[readingList, setReadingList] = useState([]);

useEffect(() => {
  const fetchConcallFiles = async () => {
    const querySnapshot = await getDocs(collection(db, "concallNotes"));

    const files = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    setPdfFiles(files);
  };

  fetchConcallFiles();
}, []);

const fetchReadingList = async () => {
  const querySnapshot = await getDocs(collection(db, "books"));
  const books = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  setReadingList(books);
};

useEffect(() => {
  fetchReadingList();
}, []);


const fetchArticleFiles = async () => {
  const querySnapshot = await getDocs(collection(db, "articles"));

  const files = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  setArticleFiles(files);
};

useEffect(() => {
  fetchArticleFiles();
}, []);


  return (
    <div>
      <Navbar />

      <div className="concall-container">
        <h3>Analysis Reports</h3>
        <div className="concall-list">
        {pdfFiles.map(({ id, title, pdfUrl }) => (
          <div
            key={id}
            className="concall-item"
            onClick={() => window.open(pdfUrl, "_blank")}
          >
            <div className="concall-card">
              <h4 className="concall-title">{title}</h4>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="concall-container">
        <h3>Articles</h3>
        <div className="concall-list">
        {articleFiles.map(({ id, title, pdfUrl,description }) => (
          <div
            key={id}
            className="concall-item"
            onClick={() => window.open(pdfUrl, "_blank")}
          >
            <div className="concall-card">
              <h4 className="concall-title">{title}</h4>
              <p className="book-description">{description}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
        <div className="book-container">
        <h3>Reading List</h3>
        <p> Here we suggest some of many interesting books and resources for further reading.</p>
        <div className="book-list">
        {readingList.map(({ id, name, description}) => (
          <div
            key={id}
            className="book-item"
            onClick={() => window.open(pdfUrl, "_blank")}
          >
            <div className="book-card">
              <h4 className="book-title">{name}</h4>
              <p className="book-description">{description}</p>
            </div>
          </div>
        ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Concall;
