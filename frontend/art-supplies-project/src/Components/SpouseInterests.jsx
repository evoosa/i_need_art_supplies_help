import React from "react";
import {withStyles} from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "./Typography";
import {Component} from "react";

const styles = (theme) => ({
    root: {
        marginTop: 8,
        marginBottom: 4
    },
    images: {
        marginTop: 8,
        display: "flex",
        flexWrap: "wrap"
    },
    imageWrapper: {
        position: "relative",
        display: "block",
        padding: 0,
        borderRadius: 0,
        height: "40vh",
        [theme.breakpoints.down("sm")]: {
            width: "100% !important",
            height: 100
        },
        "&:hover": {
            zIndex: 1
        },
        "&:hover $imageBackdrop": {
            opacity: 0.15
        },
        "&:hover $imageMarked": {
            opacity: 0
        },
        "&:hover $imageTitle": {
            border: "4px solid currentColor"
        }
    },
    imageButton: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: theme.palette.common.white
    },
    imageSrc: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: "cover",
        backgroundPosition: "center 40%"
    },
    imageBackdrop: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        background: theme.palette.common.black,
        opacity: 0.5,
        transition: theme.transitions.create("opacity")
    },
    imageTitle: {
        position: "relative",
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`
    },
    imageMarked: {
        height: 3,
        width: 18,
        background: theme.palette.common.white,
        position: "absolute",
        bottom: -2,
        left: "calc(50% - 9px)",
        transition: theme.transitions.create("opacity")
    }
});

const images = [
    {
        url:
            "https://img.republicworld.com/republic-prod/stories/images/15953260525f16be649b3cf.jpg",
        title: "Painting",
        width: "100%",
        siteurl: "/screens/index"
    },
    {
        url:
            "https://pyxis.nymag.com/v1/imgs/160/7b8/be9b71674a92129013428120b1a0c699b7-howtogetintodrawing.rsquare.w1200.jpg",
        title: "Sketching",
        width: "100%",
        siteurl: "/screens/index3"
    },
    {
        url:
            "https://blog.papermart.com/wp-content/uploads/2017/06/2017_blog_CraftingEssentials_thumb_300x300.jpg",
        title: "Crafting",
        width: "100%",
        siteurl: "/screens/index4"
    },
    {
        url:
            "https://cdn.cnn.com/cnnnext/dam/assets/200416164101-3-underscored-creative-writing-lead.jpg",
        title: "Writing",
        width: "100%",
        siteurl: "/screens/index5"
    }
];


export class SpouseInterests extends Component {

    render() {
        // const {classes} = props;
        const {classes} = this.props;
        return (
            <Container className={styles.root} component="section">
                <Typography variant="h4" marked="center" align="center" component="h2">
                    material-ui ButtonBase Sample
                </Typography>
                <div className={styles.images}>
                    {images.map((image) => (
                        <ButtonBase
                            key={image.title}
                            className={classes.imageWrapper}
                            style={{
                                width: image.width
                            }}
                            //component={RouterLink} to={image.siteurl}
                        >
                            <div
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${image.url})`
                                }}
                            />
                            <div className={classes.imageBackdrop}/>
                            <div className={classes.imageButton}>
                                <Typography
                                    component="h4"
                                    variant="h5"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                    {image.title}
                                    <div className={classes.imageMarked}/>
                                </Typography>
                            </div>
                        </ButtonBase>
                    ))}
                </div>
            </Container>
        );
    };
}

// function SpouseInterests(props) {}

// App.propTypes = {
//     classes: PropTypes.object.isRequired
// };

export default withStyles(styles)(SpouseInterests);
