import React from "react";

const male = (props) => {
    return (
        <div> 
          <container>
            <div className="boxmodelA" > MALE</div> 
            <div className="boxmodelB" > FEMALE</div>
            <br/> 
              <img 
               className="Male"  
               src="https://vignette.wikia.nocookie.net/gotascent/images/4/4e/Promotional_Art_-_Warrior_King.jpg/revision/latest?cb=20130517061037" 
               height="400" width="300" alt=" "
               onClick={props.onImageClick}
               href='https://www.youtube.com/watch?v=ldowKAPcnJE'
              />
              
              <img 
               className="Female"
               src="https://i.pinimg.com/originals/eb/4b/56/eb4b56205c9ed5cd384cde2b1962c34b.jpg" 
               height="400" width="300" alt=" " 
               onClick={props.onImageClick}
               href='https://www.youtube.com/watch?v=ldowKAPcnJE'
              />

            <br/> 
            <div className="boxmodel1" > CLICK IMAGE</div> 
            <div className="boxmodel2" > CLICK IMAGE</div> 
          </container>
        </div>
      );
  }

export default male;
