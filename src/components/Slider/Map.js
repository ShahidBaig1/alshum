import React from "react";
import useStyles from "./Style";
import Data from "./Data";


function Slidesecmap() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.outer}>
        {Data.map((item) => {
          return (
            <div className={classes.inner}>
              <img src={item.img} />
              <h3> {item.title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Slidesecmap;
