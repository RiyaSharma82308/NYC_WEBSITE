import right_arrow from "../images/right_arrow.png"
const Modal = ({ clickedImg, setClickedImg, handelRotationRight }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };
  return (
    <>
      <div className="overlay-container-2">
        <div onClick={handleClick}>
          <img
            style={{
              width: "28.65vw",
              height: "35.97vw",
              marginTop: "-17.09vw",
              marginLeft: "-5.7vw",
            }}
            src={clickedImg}
            alt="loading.."
          />
          <div onClick={handelRotationRight} className="overlay-arrows_right" style={{marginLeft: "25.27vw", marginTop:"2.63vw"}}>
            <div>
            <img src={right_arrow} style={{ marginLeft: "2.9vw", width:"2.53vw", height:"2.15vw" }}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
