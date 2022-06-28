import React, {Component} from "react";

function PreloadImgElements(props) {
    const {imgFilenames} = props
    return imgFilenames.map(function (imgFilename) {
        return <img
            key={imgFilename}
            style={{"display": "none"}}
            alt={imgFilename}
            src={process.env.REACT_APP_IMAGES_S3_BUCKET_PATH + imgFilename}
        />
    })
}

export class ArtSuppliesImgPreloader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            filenames: []
        };
    }

    GetArtSuppliesImagesFilenamesFromServer = () => {
        return fetch(process.env.REACT_APP_BACKEND_URL + 'get_all_art_supplies_filenames')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.GetArtSuppliesImagesFilenamesFromServer().then((responseData) => {
            this.setState({filenames: responseData.filenames})
        });
    }

    render() {
        if (this.state.filenames.length === 0) {
            return (
                <h1 hidden>fetching art supplies images</h1>
            )
        } else {
            return (
                <React.Fragment>
                    <div>
                        <PreloadImgElements
                            imgFilenames={this.state.filenames}
                        />
                    </div>
                </React.Fragment>
            );
        }
    }
}

export class WebsiteAssetImgsPreloader extends Component {
    render() {
        const imgFilenames = [
            "phone-lady_compressed.webp",
            "painting_compressed_50.webp",
            "sketching_compressed_50.webp",
            "writing_compressed_50.webp",
            "crafting_compressed_50.webp",
            "penscribble_compressed_50.webp",
            "instagram.webp",
            "o_transparent_compressed.webp",
            "linkedin_icon.webp"
        ]

        return (
            <React.Fragment>
                <div>
                    <PreloadImgElements
                        imgFilenames={imgFilenames}
                    />
                </div>
            </React.Fragment>
        );
    }
}
