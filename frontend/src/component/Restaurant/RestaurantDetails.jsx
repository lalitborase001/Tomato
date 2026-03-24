import { Divider, Grid } from '@mui/material'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react'

export const categories = [
  "pizza",
  "biryani",
  "burger",
  "chicken",
  "rice"
];

export const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegetarian only", value: "vegetarian" },
  { label: "Non-Vegetarian", value: "non_vegetarian" },
  { label: "Seasonal", value: "seasonal" }
];
const RestaurantDetails = () => {
  const [foodType, setFoodType] = React.useState("all");
  const handleFilter = (e) => {
    console.log(e.target.value,e.target.name);
  }  
  return (
    <div className='px-5 lg:px-20'>
      <section>
        <h3 className="text-gray-500 py-2 mt-10">Home/india/indian fast food</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3x93xzfbgthudigv2.jpg"
                alt="banner"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3x93xzfbgthudigv2.jpg"
                alt="banner"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="http://res.cloudinary.com/dcpesbd8q/image/upload/v1707802815/ux3x93xzfbgthudigv2.jpg"
                alt="banner"
              />
            </Grid>
          </Grid>
        </div>
        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">Indian Fast Food</h1>   
          <p className="text-gray-500 mt-1 line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cum at porro, natus facere eveniet laborum, odio molestiae consequatur dolore suscipit nulla a, dolorum exercitationem eum? Atque numquam autem repellat.
          </p>
          <div className="space-y-3 mt-3">   
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>
                Mumbai, Maharashtra, India
              </span>
            </p>
            <p className="text-gray-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>
                Mon-Sun: 10:00 AM - 11:00 PM(Today)
              </span>
            </p>
          </div> 
        </div>
      </section>
      <Divider />

      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter ">
          <div className="box space-y-5 lg:sticky top-28 p-5 shadow-md">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>

              <FormControl className="py-5 space-y-5" component="fieldset">
                <RadioGroup onChange= {handleFilter} name ="foodType" value={foodType}>
                  {foodTypes.map((item) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider/>
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>

              <FormControl className="py-5 space-y-5" component="fieldset">
                <RadioGroup onChange= {handleFilter} name ="foodType" value={foodType}>
                  {categories.map((item) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          menu
        </div>
      </section>

    </div>
  );
}

export default RestaurantDetails