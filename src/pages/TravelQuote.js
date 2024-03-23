import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import "./TravelQuote.css";

const TravelQuote = () => {
  return (
    <div className="travelquote">
      <img className="path-20-icon5" alt="" src="/path-20.svg" />
      <div className="back-container">
        <img className="back-icon2" alt="" src="/back@2x.png" />
        <div className="back2">Back</div>
      </div>
      <div className="request-travel-quote">REQUEST TRAVEL QUOTE</div>
      <div className="travelquoteframe">
        <div className="frame">
          <div className="frame1">
            <div className="frame2">
              <div className="frame3">
                <b className="indicates-a-required">
                  * indicates a required field.
                </b>
              </div>
              <div className="frame4">
                <div className="travel-information">TRAVEL INFORMATION</div>
              </div>
            </div>
            <div className="frame5">
              <div className="frame6">
                <div className="frame7">
                  <b className="choose-type-of">Choose type of trip *</b>
                  <b className="choose-duration-of">
                    Choose duration of your stay *
                  </b>
                </div>
              </div>
              <div className="frame8">
                <TextField
                  className="rectangle-textfield"
                  color="primary"
                  name="tripType"
                  placeholder="Type of trip"
                  required={true}
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": { height: "70.5px" },
                    width: "554px",
                  }}
                />
                <TextField
                  className="frame-child31"
                  color="primary"
                  name="durationOfStay"
                  placeholder="How many days will you stay ?"
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": { height: "70.5px" },
                    width: "554px",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="frame9">
            <div className="frame10">
              <div className="frame11">
                <div className="frame12">
                  <div className="frame13">
                    <b className="budget-per-person">
                      Budget per person (excluding international flights) *
                    </b>
                    <b className="estimated-arrival-date">
                      Estimated arrival date *
                    </b>
                  </div>
                </div>
                <div className="frame14">
                  <TextField
                    className="frame-child32"
                    color="primary"
                    name="budgetPerPerson"
                    placeholder="Budget per person"
                    required={true}
                    variant="outlined"
                    sx={{
                      "& .MuiInputBase-root": { height: "70.5px" },
                      width: "554px",
                    }}
                  />
                  <TextField
                    className="frame-child33"
                    color="primary"
                    name="arrivalDate"
                    variant="outlined"
                    type="date"
                    sx={{
                      "& .MuiInputBase-root": { height: "70.5px" },
                      width: "554px",
                    }}
                  />
                </div>
              </div>
              <div className="frame15">
                <div className="frame16">
                  <div className="travellers-age">{`TRAVELLERS & AGE`}</div>
                </div>
                <div className="frame17">
                  <b className="number-of-adults">Number of Adults *</b>
                </div>
              </div>
            </div>
            <div className="frame18">
              <TextField
                className="frame19"
                color="primary"
                name="numberOfAdults"
                placeholder="Number of Adults"
                required={true}
                variant="outlined"
                sx={{
                  "& .MuiInputBase-root": { height: "70.5px" },
                  width: "557.2px",
                }}
              />
              <div className="frame20">
                <div className="frame21">
                  <b className="number-of-children">Number of Children *</b>
                </div>
                <TextField
                  className="frame22"
                  color="primary"
                  name="numberOfChildren"
                  placeholder="Number of Children"
                  required={true}
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": { height: "70.5px" },
                    width: "554px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="frame23">
          <div className="frame24">
            <div className="frame25">
              <div className="frame26">
                <div className="frame27">
                  <div className="frame28">
                    <div className="do-you-have">
                      DO YOU HAVE ANY PREFERENCES FOR YOUR TRIP?
                    </div>
                  </div>
                  <TextField
                    className="frame29"
                    color="primary"
                    name="preferences"
                    rows={15}
                    maxRows={15}
                    placeholder="Any peferences ?"
                    required={true}
                    sx={{ width: 1137.9 }}
                    variant="outlined"
                    multiline
                  />
                </div>
                <div className="frame30">
                  <div className="your-contact-details-wrapper">
                    <div className="your-contact-details">
                      YOUR CONTACT DETAILS
                    </div>
                  </div>
                </div>
              </div>
              <div className="frame31">
                <div className="frame32">
                  <b className="first-name">First Name*</b>
                  <b className="last-name">Last Name*</b>
                </div>
              </div>
            </div>
            <div className="frame33">
              <TextField className="frame34" type="text" />
            </div>
          </div>
          <div className="frame35">
            <div className="frame36">
              <div className="frame37">
                <div className="frame38">
                  <b className="email">Email*</b>
                </div>
                <div className="frame39">
                  <TextField
                    className="frame-child34"
                    color="primary"
                    label="Email"
                    placeholder="Email"
                    required={true}
                    variant="outlined"
                    type="email"
                    sx={{
                      "& .MuiInputBase-root": { height: "70.5px" },
                      width: "1147.7px",
                    }}
                  />
                </div>
              </div>
              <div className="frame40">
                <div className="frame41">
                  <div className="frame42">
                    <b className="phone-number">Phone number*</b>
                    <b className="country">Country*</b>
                  </div>
                </div>
                <div className="frame43">
                  <div className="frame44">
                    <TextField
                      className="frame-child35"
                      color="primary"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      required={true}
                      variant="outlined"
                      sx={{
                        "& .MuiInputBase-root": { height: "70.5px" },
                        width: "554px",
                      }}
                    />
                    <TextField
                      className="frame-child36"
                      color="primary"
                      name="country"
                      placeholder="Country"
                      required={true}
                      variant="outlined"
                      sx={{
                        "& .MuiInputBase-root": { height: "70.5px" },
                        width: "554px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="frame45">
              <Button
                className="frame46"
                disableElevation={true}
                color="primary"
                variant="contained"
                sx={{
                  borderRadius: "0px 0px 0px 0px",
                  width: 1149.3,
                  height: 70.5,
                }}
              >
                REQUEST TRAVEL QUOTE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelQuote;
