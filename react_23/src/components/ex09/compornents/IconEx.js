import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faShuffle } from "@fortawesome/free-solid-svg-icons";
// import { faBackward } from "@fortawesome/free-solid-svg-icons";
// import { faPause } from "@fortawesome/free-solid-svg-icons";
// import { faForward } from "@fortawesome/free-solid-svg-icons";
// import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const IconEx = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faChevronDown}
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          backgroundColor: "white",
          margin: "0px 0px 0px 25px",
        }}
      />

      <FontAwesomeIcon
        icon={faBars}
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          color: "white",
          border: "1px solid white",
          margin: "0px 0px 0px 180px",
        }}
      />
      {/* <FontAwesomeIcon icon={faShuffle} style={{ color: "pink" }} /> */}
      {/* <FontAwesomeIcon icon={faBackward} style={{ color: "pink" }} /> */}
      {/* <FontAwesomeIcon icon={faPause} style={{ color: "pink" }} /> */}
      {/* <FontAwesomeIcon icon={faForward} style={{ color: "pink" }} /> */}
      {/* <FontAwesomeIcon icon={faRetweet} style={{ color: "pink" }} /> */}
    </div>
  );
};
