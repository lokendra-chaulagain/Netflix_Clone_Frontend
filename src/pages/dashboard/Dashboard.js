import React, { useState } from "react";
import "./dashboard.scss";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import axios from "axios";

function Dashboard() {
  const [movie, setMovie] = useState(null);
  //   const [title, setTitle] = useState(null);
  //   const [description, setDescription] = useState(null);
  //   const [genre, setGenre] = useState(null);
  //   const [category, setCategory] = useState(null);
  //   const [releasedYear, setReleasedYear] = useState(null);
  //   const [ageLimit, setAgeLimit] = useState(null);
  //   const [duration, setDuration] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);

  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const fileName1 = new Date().getTime() + thumbnail?.name;
    // const fileName2 = new Date().getTime() + trailer?.name;
    const fileName3 = new Date().getTime() + video.name;
    // const storage1 = getStorage(app);
    // const storage2 = getStorage(app);
    const storage3 = getStorage(app);
    // const storageRef1 = ref(storage1, fileName1);
    // const storageRef2 = ref(storage2, fileName2);
    const storageRef3 = ref(storage3, fileName3);
    // const uploadTask1 = uploadBytesResumable(storageRef1, thumbnail);
    // const uploadTask2 = uploadBytesResumable(storageRef2, trailer);
    const uploadTask3 = uploadBytesResumable(storageRef3, video);

    //Thumbnail
    // uploadTask1.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progress =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

    //     console.log("Upload is " + progress + "% done");
    //     switch (snapshot.state) {
    //       case "paused":
    //         console.log("Upload is paused");
    //         break;
    //       case "running":
    //         console.log("Upload is running");
    //         break;
    //       default:
    //     }
    //   },
    //   (error) => {},
    //   () => {
    //     getDownloadURL(uploadTask1.snapshot.ref).then((downloadURL1) => {
    //       setThumbnail(downloadURL1);
    //     });
    //   }
    // );
    // const a =thumbnail;
    

    //Trailer
    // uploadTask2.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progress =
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

    //     console.log("Upload is " + progress + "% done");
    //     switch (snapshot.state) {
    //       case "paused":
    //         console.log("Upload is paused");
    //         break;
    //       case "running":
    //         console.log("Upload is running");
    //         break;
    //       default:
    //     }
    //   },
    //   (error) => {},
    //   () => {
    //     getDownloadURL(uploadTask2.snapshot.ref).then((downloadURL2) => {
    //       setTrailer(downloadURL2);
    //     });
    //   }
    // );
    // const b=trailer;

    //Video
    uploadTask3.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask3.snapshot.ref).then((downloadURL3) => {
          setVideo(downloadURL3);
        //   const c=video;
          try {
            axios.post("/movies/create", {
            //   title: movie.title,
            //   description: movie.description,
            //   genre: movie.genre,
            //   category: movie.category,
            //   releasedYear: movie.releasedYear,
            //   ageLimit: movie.ageLimit,
            //   duration: movie.duration,
            //   thumbnail: a,
            //   trailer: b,
              video: downloadURL3,
            });
          } catch (error) {
            console.log(error);
          }
        });
      }
    );
   
  };

  return (
    <form className="dw" onSubmit={handleSubmit}>
      <div className="dashBoardPage">
        <div className="dashCol1">
          <div className="dashCol1Item">
            <span className="col1IItemSpan">Movie Name</span>
            <input
              className="col1ItemInput"
              type="text"
              name="title"
              onChange={handleChange}
            />
          </div>

          <div className="dashCol1Item">
            <span className="col1IItemSpan">Movie Description</span>
            <textarea
              className="col1ItemInput col1ItemInputDesc"
              type="text"
              name="description"
              onChange={handleChange}
            />
          </div>

          <div className="dashCol1Item">
            <span className="col1IItemSpan">Movie Genre</span>

            <select
              className="col1ItemInput"
              name="genre"
              id=""
              onChange={handleChange}
            >
              <option value="" disabled selected={true}>
                Select
              </option>
              <option className="optSelected" value="Adventure">
                Adventure
              </option>
              <option className="optSelected" value="Crime">
                Crime
              </option>
              <option className="optSelected" value="Fantasy">
                Fantasy
              </option>
              <option className="optSelected" value="Horror">
                Horror
              </option>
              <option className="optSelected" value="Romance">
                Romance
              </option>
              <option className="optSelected" value="Science-Fiction">
                Science-Fiction
              </option>
              <option className="optSelected" value="Thriller">
                Thriller
              </option>
              <option className="optSelected" value="Western">
                Western
              </option>
              <option className="optSelected" value="Animation">
                Animation
              </option>
              <option className="optSelected" value="Drama">
                Drama
              </option>
              <option className="optSelected" value="Documentary">
                Documentary
              </option>
            </select>
          </div>

          <div className="dashCol1Item">
            <span className="col1IItemSpan">Movie Category</span>

            <select
              className="col1ItemInput"
              name="category"
              id=""
              onChange={handleChange}
            >
              <option value="" disabled selected={true}>
                Select
              </option>
              <option value="movies">Movies</option>
              <option value="series">Series</option>
              <option value="kids">Kids</option>
            </select>
          </div>

          <div className="dashCol1Item">
            <span className="col1IItemSpan">Movie Released year</span>
            <input
              className="col1ItemInput"
              name="releasedYear"
              min="1900"
              max="2099"
              maxLength={4}
              minLength={4}
              type="number"
              defaultValue={1999}
              onChange={handleChange}
            />
          </div>

          <div className="dashCol1Item">
            <span className="col1IItemSpan">Age limit</span>
            <select
              className="col1ItemInput"
              name="ageLimit"
              id=""
              onChange={handleChange}
            >
              <option value="" disabled selected={true}>
                Select
              </option>
              <option value="16+">16+</option>
              <option value="18+">18+</option>
              <option value="Everyone">Everyone</option>
            </select>
          </div>

          <div className="dashCol1Item">
            <span className="col1IItemSpan">Duration (1h 32min 54sec)</span>
            <input
              className="col1ItemInput"
              type="text"
              name="duration"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="dashCol2">
          <span className="co2ItemSpan">Thumbnail Image</span>
          <label htmlFor="fileInput" className="thumbnailDiv">
            <img src="/assets/bgImg.jpg" alt="" className="thumbNailImg" />
            <AddPhotoAlternateIcon className="dashboardIcon" />
            <input
              type="file"
              style={{ display: " none" }}
              id="fileInput"
              name="thumbnail"
              onChange={(e) => setThumbnail(e.target.files[0])}
            />
          </label>

          <span className="co2ItemSpan">Trailer Video</span>
          <label htmlFor="fileInput2" className="thumbnailDiv">
            <img src="/assets/bgImg.jpg" alt="" className="thumbNailImg" />
            <VideoCallIcon className="dashboardIcon" />
            <input
              type="file"
              style={{ display: " none" }}
              id="fileInput2"
              name="trailer"
              onChange={(e) => setTrailer(e.target.files[0])}
            />
          </label>

          <span className="co2ItemSpan">Full Movie</span>
          <label htmlFor="fileInput3" className="thumbnailDiv">
            <img src="/assets/bgImg.jpg" alt="" className="thumbNailImg" />
            <VideoCallIcon className="dashboardIcon" />
            <input
              type="file"
              style={{ display: " none" }}
              id="fileInput3"
              name="movie"
              onChange={(e) => setVideo(e.target.files[0])}
            />
          </label>
        </div>
      </div>
      <button className="dashboardUploadBut" type="submit">
        Upload
      </button>
    </form>
  );
}

export default Dashboard;
