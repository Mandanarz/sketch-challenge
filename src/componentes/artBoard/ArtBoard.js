import React from "react";
import "./ArtBoard.css";
import { getNameFromUrl } from "../../utilities/urls";

class ArtBoard extends React.Component {
  getNameFromUrl = (param) => {
    return param.replace(/-/g, " ");
  };

  getArtBoardData = () => {
    let item = null;
    const param =
      this.props.match && this.props.match.params
        ? this.props.match.params.id
        : null;
    if (this.props.data && param) {
      const name = getNameFromUrl(param);
      item = this.props.data.find((el) => {
        return el.name === name;
      });
    }
    return item;
  };

  getImageFile = (data) => {
    let file = "";
    if (data && data.files && Array.isArray(data.files)) {
      file = data.files.find((el) => el.scale === 2);
    }
    return file;
  };

  render = () => {
    const artBoardData = this.getArtBoardData();
    const imageFile = this.getImageFile(artBoardData);
    if (artBoardData && imageFile) {
      return (
        <div className="align-center">
          <img className="big" src={imageFile.url} alt={artBoardData.name} />
        </div>
      );
    } else {
      return <p>Artboard was not found</p>;
    }
  };
}

export default ArtBoard;
