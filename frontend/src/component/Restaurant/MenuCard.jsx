import {Accordion,AccordionSummary,AccordionDetails} from "@mui/material";
import React from 'react'
import {
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@mui/material";
import { Button } from "@mui/material";
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
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
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
  demo.map((item)=> (
    <div key={item.category}>
      <FormGroup>
        {item.ingredients.map((ingredient)=> (
          <FormControlLabel
            key={ingredient}
            control={<Checkbox onChange={() => handleCheckboxChange(ingredient)} />}
            label={ingredient}
          />
        ))}
      </FormGroup>
    </div>
  ))
}
          </div>
          <div className="pt-5">
            <Button variant="contained" disabled={false} type="submit">{true ? "Add to Cart" : "Out of Stock"}</Button>
          </div>
        </form>
      </AccordionDetails>
    </Accordion>
  );
}

export default MenuCard