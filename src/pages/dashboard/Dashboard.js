import React, { useState } from "react";
import "./dashboard.scss";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import axios from "axios";
import storage from "../../firebase";

function Dashboard() {
  const [movie, setMovie] = useState();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [genre, setGenre] = useState("");
  const [category, setCategory] = useState("null");
  const [releasedYear, setReleasedYear] = useState("");
  const [ageLimit, setAgeLimit] = useState("");
  const [duration, setDuration] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [video, setVideo] = useState(null);
  const [uploaded, setUploaded] = useState(0);

  const upload = (items) => {
    items.forEach((item) => {
      const fileName = new Date().getTime() + item.label + item.file.name;
      const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            setMovie((prev) => {
              return { ...prev, [item.label]: url };
            });
            setUploaded((prev) => prev + 1);
          });
        }
      );
    });
  };

  const handleUpload = (e) => {
    e.preventDefault();
    upload([
      { file: thumbnail, label: "thumbnail" },
      { file: trailer, label: "trailer" },
      { file: video, label: "video" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post("/movies/create", {
        title,
        desc,
        genre,
        category,
        releasedYear,
        ageLimit,
        duration,
        thumbnail: movie.thumbnail,
        trailer: movie.trailer,
        video: movie.video,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="dw">
      <div className="dashBoardPage">
        <div className="dashCol1">
          <div className="dashCol1Item">
            <span className="col1IItemSpan">Movie Name</span>
            <input
              className="col1ItemInput"
              type="text"
              name="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="dashCol1Item">
            <span className="col1IItemSpan">Movie Description</span>
            <textarea
              className="col1ItemInput col1ItemInputDesc"
              type="text"
              name="description"
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div className="dashCol1Item">
            <span className="col1IItemSpan">Movie Genre</span>

            <select
              className="col1ItemInput"
              name="genre"
              id=""
              onChange={(e) => setGenre(e.target.value)}
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

              <option className="optSelected" value="Comedy">
                Comedy
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
              onChange={(e) => setCategory(e.target.value)}
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
              onChange={(e) => setReleasedYear(e.target.value)}
            />
          </div>

          <div className="dashCol1Item">
            <span className="col1IItemSpan">Age limit</span>
            <select
              className="col1ItemInput"
              name="ageLimit"
              id=""
              onChange={(e) => setAgeLimit(e.target.value)}
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
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
        </div>

        <div className="dashCol2">
          <span className="co2ItemSpan">Thumbnail Image</span>
          <label htmlFor="fileInput" className="thumbnailDiv">
            {thumbnail ? (
              <img
                src={URL.createObjectURL(thumbnail)}
                alt=""
                className="thumbNailImg"
              />
            ) : (
              <img src="" alt="" className="thumbNailImg" />
            )}
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
            {trailer ? (
              <img
                src={URL.createObjectURL(trailer)}
                alt=""
                className="thumbNailImg"
              />
            ) : (
              <img src="" alt="" className="thumbNailImg" />
            )}
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
            {video ? (
              <img
                src={URL.createObjectURL(video)}
                alt=""
                className="thumbNailImg"
              />
            ) : (
              <img
                src=""
                alt=""
                className="thumbNailImg"
              />
            )}
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
      {uploaded === 3 ? (
        <button className="dashboardUploadBut" onClick={handleSubmit}>
          create
        </button>
      ) : (
        <button className="dashboardUploadBut" onClick={handleUpload}>
          upload
        </button>
      )}
    </form>
  );
}

export default Dashboard;
