import React, { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/authContext'
import { doSignOut } from '../firebase/auth'
import "./Backend.css"
import { db, storage } from '../firebase/firebase'
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  serverTimestamp
} from "firebase/firestore"

import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage"

const Backend = () => {
  const { userLoggedIn, currentUser } = useAuth()

  const [files, setFiles] = useState([])
  const [filesFile, setFilesFile] = useState(null)
  const [filesTitle, setFilesTitle] = useState("")
  const [filesDescription, setFilesDescription] = useState("")

  const [activeTab, setActiveTab] = useState("concall")
  const [concallFile, setConcallFile] = useState(null)
  const [concallTitle, setConcallTitle] = useState("")
  const [concallCompany, setConcallCompany] = useState("")
  const [concallData, setConcallData] = useState([])

  const [videos, setVideos] = useState([])
  const [videoTitle, setVideoTitle] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [videoDescription, setVideoDescription] = useState("")

  const [books, setBooks] = useState([])
  const [bookName, setBookName] = useState("")
  const [bookDesc, setBookDesc] = useState("")

const [articles, setArticles] = useState([])
const [articleFile, setArticleFile] = useState(null)
const [articleTitle, setArticleTitle] = useState("")
const [articleDescription, setArticleDescription] = useState("")


  const handleLogout = async () => {
    await doSignOut()
  }

  // 🔥 FETCH DATA
  const fetchData = async () => {
    const filesSnap = await getDocs(collection(db, "files"))
    setFiles(filesSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })))

    const concallSnap = await getDocs(collection(db, "concallNotes"))
    setConcallData(concallSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })))

    const videoSnap = await getDocs(collection(db, "videos"))
    setVideos(videoSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })))

    const bookSnap = await getDocs(collection(db, "books"))
    setBooks(bookSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })))

    const articleSnap = await getDocs(collection(db, "articles"))
    setArticles(articleSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })))

  }

  useEffect(() => {
    fetchData()
  }, [])

    // 🔥 UPLOAD FILES
 const uploadFiles = async () => {
  if (!filesFile || !filesTitle) {
    return alert("File and title required")
  }

  try {
    const extension = filesFile.name.split('.').pop()
    const customName = `${Date.now()}_${filesTitle}.${extension}`

    const storageRef = ref(storage, `files/${customName}`)

    await uploadBytes(storageRef, filesFile)
    const url = await getDownloadURL(storageRef)

    await addDoc(collection(db, "files"), {
      title: filesTitle,
      description: filesDescription,
      fileName: customName,
      fileUrl: url,
      createdAt: serverTimestamp()
    })

    setFilesFile(null)
    setFilesTitle("")
    setFilesDescription("")

    fetchData()
    alert("Uploaded Successfully")
  } catch (error) {
    console.error(error)
    alert("Upload Failed")
  }
}



  // 🔥 UPLOAD CONCALL
  const uploadConcall = async () => {
    if (!concallFile) return alert("Select file")

    const storageRef = ref(storage, `concall/${concallFile.name}`)
    await uploadBytes(storageRef, concallFile)
    const url = await getDownloadURL(storageRef)

    await addDoc(collection(db, "concallNotes"), {
      title: concallTitle,
      company: concallCompany,
      pdfUrl: url,
      createdAt: serverTimestamp()
    })

    fetchData()
    alert("Uploaded Successfully")
  }
  // Upload Article
  const uploadArticle = async () => {
  if (!articleFile || !articleTitle) {
    return alert("File and Title required")
  }

  try {
    const extension = articleFile.name.split('.').pop()
    const customName = `${Date.now()}_${articleTitle}.${extension}`

    const storageRef = ref(storage, `articles/${customName}`)

    await uploadBytes(storageRef, articleFile)
    const url = await getDownloadURL(storageRef)

    await addDoc(collection(db, "articles"), {
      title: articleTitle,
      description: articleDescription,
      pdfUrl: url,
      fileName: customName,
      createdAt: serverTimestamp()
    })

    setArticleFile(null)
    setArticleTitle("")
    setArticleDescription("")

    fetchData()
    alert("Article Uploaded Successfully")
  } catch (error) {
    console.error(error)
    alert("Upload Failed")
  }
}


  // 🔥 ADD VIDEO
  const addVideo = async () => {
    await addDoc(collection(db, "videos"), {
      title: videoTitle,
      url: videoUrl,
      description: videoDescription,
      createdAt: serverTimestamp()
    })

    fetchData()
    alert("Video Added")
  }

  // 🔥 ADD BOOK
  const addBook = async () => {
    await addDoc(collection(db, "books"), {
      name: bookName,
      description: bookDesc,
      createdAt: serverTimestamp()
    })

    fetchData()
    alert("Book Added")
  }

  // 🔥 DELETE
  const deleteItem = async (collectionName, id) => {
    await deleteDoc(doc(db, collectionName, id))
    fetchData()
  }
if (!userLoggedIn) {
  return <Navigate to="/login" replace />;
}

 return (
  <div className="admin-container">

    {/* HEADER */}
    <div className="admin-header">
      <div>
        <h1>Purakilathe Lokam</h1>
        <p>{currentUser.email}</p>
      </div>

      <button onClick={handleLogout} className="logout-btn">
        GetOut
      </button>
    </div>

    {/* TABS */}
    <div className="admin-tabs">
      {["files","concall","articles","videos","books"].map(tab => (
        <button
          key={tab}
          className={`tab-btn ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab.toUpperCase()}
        </button>
      ))}
    </div>

    <div className="admin-content">

      {/* FILES */}
      {activeTab === "files" && (
        <div className="admin-card">
          <h2>Upload File</h2>

          <input type="file" onChange={(e)=>setFilesFile(e.target.files[0])} />
          <input type="text" placeholder="Title"
            onChange={(e)=>setFilesTitle(e.target.value)} />
          <textarea placeholder="Description"
            onChange={(e)=>setFilesDescription(e.target.value)} />

          <button onClick={uploadFiles} className="primary-btn">
            Upload
          </button>

          <div className="admin-list">
            {files.map(item => (
              <div key={item.id} className="admin-list-item">
                <a href={item.fileUrl} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
                <button
                  onClick={()=>deleteItem("files", item.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CONCALL */}
      {activeTab === "concall" && (
        <div className="admin-card">
          <h2>Upload Concall</h2>

          <input type="file" onChange={(e)=>setConcallFile(e.target.files[0])} />
          <input type="text" placeholder="Title"
            onChange={(e)=>setConcallTitle(e.target.value)} />
          <input type="text" placeholder="Company"
            onChange={(e)=>setConcallCompany(e.target.value)} />

          <button onClick={uploadConcall} className="primary-btn">
            Upload
          </button>

          <div className="admin-list">
            {concallData.map(item => (
              <div key={item.id} className="admin-list-item">
                <a href={item.pdfUrl} target="_blank" rel="noreferrer">
                  {item.title}
                </a>
                <button
                  onClick={()=>deleteItem("concallNotes", item.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ARTICLES */}
      {activeTab === "articles" && (
        <div className="admin-card">
          <h2>Upload Article</h2>

          <input type="file"
            accept="application/pdf"
            onChange={(e)=>setArticleFile(e.target.files[0])} />

          <input type="text" placeholder="Title"
            onChange={(e)=>setArticleTitle(e.target.value)} />

          <textarea placeholder="Description"
            onChange={(e)=>setArticleDescription(e.target.value)} />

          <button onClick={uploadArticle} className="primary-btn">
            Upload
          </button>

          <div className="admin-list">
            {articles.map(a => (
              <div key={a.id} className="admin-list-item">
                <a href={a.pdfUrl} target="_blank" rel="noreferrer">
                  {a.title}
                </a>
                <button
                  onClick={()=>deleteItem("articles", a.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIDEOS */}
      {activeTab === "videos" && (
        <div className="admin-card">
          <h2>Add Video</h2>

          <input type="text" placeholder="Title"
            onChange={(e)=>setVideoTitle(e.target.value)} />

          <input type="text" placeholder="Video URL"
            onChange={(e)=>setVideoUrl(e.target.value)} />

          <textarea placeholder="Description"
            onChange={(e)=>setVideoDescription(e.target.value)} />

          <button onClick={addVideo} className="primary-btn">
            Add
          </button>

          <div className="admin-list">
            {videos.map(v => (
              <div key={v.id} className="admin-list-item">
                <a href={v.url} target="_blank" rel="noreferrer">
                  {v.title}
                </a>
                <button
                  onClick={()=>deleteItem("videos", v.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* BOOKS */}
      {activeTab === "books" && (
        <div className="admin-card">
          <h2>Add Book</h2>

          <input type="text" placeholder="Book Name"
            onChange={(e)=>setBookName(e.target.value)} />

          <textarea placeholder="Description"
            onChange={(e)=>setBookDesc(e.target.value)} />

          <button onClick={addBook} className="primary-btn">
            Add
          </button>

          <div className="admin-list">
            {books.map(b => (
              <div key={b.id} className="admin-list-item">
                <span>{b.name}</span>
                <button
                  onClick={()=>deleteItem("books", b.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  </div>
)
}

export default Backend
