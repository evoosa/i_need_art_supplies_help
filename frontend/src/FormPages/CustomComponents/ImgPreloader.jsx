import React, {Component} from "react";

export function ImgPreloadComponent(props) {
    const {fileName} = props
    return (
        <link rel="prefetch"
              href={"https://art-supplies-images.pasten.life/images/" + fileName}
              as="image"
        />
    )

}

export class ImgPreloader extends Component {

    PreloadImgElements = (props) => {
        const imgFilenames = props.imgFilenames;
        return imgFilenames.map(function (imgFilename, index) {
            return <ImgPreloadComponent
                key={index}
                fileName={imgFilename}
            />
        })
    }


    render() {
        const imgFilenames = [
            "phone-lady_compressed.webp",
            "painting_compressed_50.webp",
            "sketching_compressed_50.webp",
            "writing_compressed_50.webp",
            "crafting_compressed_50.webp",
            "penscribble_compressed_50.webp",
            "instagram.webp",
            "o_transparent.webp"
        ]
        return (
            <React.Fragment>
                <div>
                    <this.PreloadImgElements
                        imgFilenames={imgFilenames}
                    />
                </div>
            </React.Fragment>
        );
    }
}

export default ImgPreloader;
