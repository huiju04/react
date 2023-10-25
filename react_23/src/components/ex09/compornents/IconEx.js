import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
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
          margin: "0px 0px 0px 280px",
        }}
      />
      <FontAwesomeIcon
        icon={faShuffle}
        style={{
          color: "white",
          fontSize: "20px",
          position: "relative",
          top: "520px",
          left: "-340px",
        }}
      />
      <FontAwesomeIcon
        icon={faBackward}
        style={{
          color: "white",
          fontSize: "20px",
          position: "relative",
          top: "473px",
          left: "100px",
        }}
      />
      <FontAwesomeIcon
        icon={faPause}
        style={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "pink",
          color: "white",
          fontSize: "20px",
          position: "relative",
          top: "485px",
          left: "147px",
        }}
      />
      <FontAwesomeIcon
        icon={faForward}
        style={{
          color: "white",
          fontSize: "20px",
          position: "relative",
          top: "473px",
          left: "197px",
        }}
      />
      <FontAwesomeIcon
        icon={faRetweet}
        style={{
          color: "white",
          fontSize: "20px",
          position: "relative",
          top: "473px",
          left: "247px",
        }}
      />
    </div>
  );
};
