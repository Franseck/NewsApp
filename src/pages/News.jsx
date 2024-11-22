
import {  Box,  Button,  Card,  CardActions,  CardContent,  CardMedia,  Typography,} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/NewsSlice";
import { useEffect } from "react";
import loadingGif from "../assets/loading.gif"




const News = () => {

 const dispatch= useDispatch();
const { news,loading } = useSelector((state) => state.NewsSlice);

 useEffect(()=>{

dispatch(getData());

 },[])


  return (
    <>
      {loading ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          <img src={loadingGif} alt="" height="500px" width="700px"/>
        </Box>
      ) : (
        <Box
          xs={{ d: "flex"  }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
          sx={{backgroundColor:"bisque"}}
        >
          {news.map((a, index) => (
            <Card key={index} sx={{ maxWidth: 345, maxHeight: 600, m: 5, backgroundColor:"burlywood"  }}>
              <CardMedia component="img" image={a.urlToImage} height="250" />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {a.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {a.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button class="but" size="small">CLEAR</Button>

                <Button class="but"  size="small" href={a.url} target="_blank">
                  DETAIL
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
