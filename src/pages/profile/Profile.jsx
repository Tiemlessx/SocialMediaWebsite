import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src="assets/post/3.jpg" alt="" />
              <img className="profileUserImg" src="assets/post/7.jpg" alt="" />
            </div>
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Name</h4>
            <span className="profileInfoDesc">Hello</span>
          </div>
          <div className="profileRightBottom"></div>
          <Feed />
          <Rightbar />
        </div>
      </div>
    </>
  );
}
