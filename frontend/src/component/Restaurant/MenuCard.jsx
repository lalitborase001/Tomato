import {Accordion,AccordionSummary,AccordionDetails} from "@mui/material";
import React from 'react'
import {
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const demo = [
  {
    category: "Nuts & seeds",
    ingredients: ["Cashews"]
  },
  {
    category: "Protein",
    ingredients: ["Ground Beef", "Bacon Strips"]
  },
];
const MenuCard = () => {
  const handleCheckboxChange = (value) => {
    console.log(value);
  }
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <div className="lg:flex items-center justify-between">
          <div className="lg:flex items-center lg:gap-5" >
            <img
              className="w-[7rem] h-[7rem]"
              src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1708317657/no8xfzdhsrdy4ezmcczr.jpg"
              alt="food"
            />
            <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
              <p className="font-semibold text-xl">Burger</p>
              <p>499</p>
              <p className="text-gray-400">nice food</p>
            </div>
          </div>
        </div>
      </AccordionSummary>

      <AccordionDetails>
        <form>
          <div className="flex gap-5 flex-wrap">
            {
              demo.map((item)=> 
                <div>
                  <FormGroup>
{item.ingredients.map((item)=>   (    <FormControlLabel
                      control={<Checkbox onChange= {() => handleCheckboxChange(item) } />}
                      label={"item"}
                    />))}
                    
                  </FormGroup>
                </div>
              ))}
          </div>
          <div className="pt-55">
            <Button variant="contained" disabled={false} type="submit">{true ? "Add to Cart" : "Out of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}

export default MenuCard