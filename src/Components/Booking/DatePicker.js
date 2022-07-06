import { useEffect, useRef, useState } from "react";
import { DateRange } from "react-date-range";

import format from "date-fns/format";
import { addDays } from "date-fns";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

import "./DatePicker.css";

import { FaRegCalendarAlt } from "react-icons/fa";

const DateRangePickerComp = () => {
  // date state
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide dropdown on outside click
  const hideOnClickOutside = (e) => {
    // console.log(refOne.current)
    // console.log(e.target)
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="calendarWrap ">
      <div className="d-lg-flex d-md-flex">
        <button className="date-btn" onClick={() => setOpen((open) => !open)}>
          <FaRegCalendarAlt size={34} />
          <span>
            <h6>Check in</h6>
            <input
              value={`${format(range[0].startDate, "MM/dd/yyyy")} `}
              readOnly
              className="inputBox"
            />
          </span>
        </button>

        <button className="date-btn" onClick={() => setOpen((open) => !open)}>
          <span>
            <FaRegCalendarAlt size={34} />
          </span>
          <span className="d-flex flex-column">
            <h6>Check out</h6>
            <input
              value={` ${format(range[0].endDate, "MM/dd/yyyy")}`}
              readOnly
              className="inputBox input-box"
            />
          </span>
        </button>
      </div>

      <div ref={refOne}>
        {open && (
          <DateRange
            onChange={(item) => setRange([item.selection])}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={range}
            months={1}
            direction="horizontal"
            className="calendarElement"
            retainEndDateOnFirstSelection={true}
          />
        )}
      </div>
    </div>
  );
};

export default DateRangePickerComp;
