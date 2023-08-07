import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputI, FormInputs } from "./types";
import { useAppDispatch } from "../../../../store/hooks";
import { fetchGetTickets } from "../../../../reducers/tickets";
import { useEffect } from "react";
import {
  DEFAULT_INPUTS_VALUES,
  DISTRIBUTOR_OPTIONS,
  SORT_OPTIONS,
} from "./const";

export const Filters = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit, watch, setValue, getValues, reset } =
    useForm<FormInputI>({ defaultValues: DEFAULT_INPUTS_VALUES });

  useEffect(() => {
    dispatch(fetchGetTickets(getValues()));
  }, []);

  const handleSliderChange = (vals: number[] | number) => {
    if (Array.isArray(vals)) {
      const [minPrice, maxPrice] = vals;
      setValue(FormInputs.MIN_PRICE, minPrice);
      setValue(FormInputs.MAX_PRICE, maxPrice);
    }
  };

  const handleApplyFiltering: SubmitHandler<FormInputI> = (data) => {
    dispatch(fetchGetTickets(data));
  };

  const handleResetFiltering = () => {
    reset(DEFAULT_INPUTS_VALUES);
    console.log(getValues());
    dispatch(fetchGetTickets(getValues()));
  };

  return (
    <div className="filters">
      <div className="filters__chimney" />
      <div className="filters__heading">
        <h2>FILTERS</h2>
      </div>
      <form
        onSubmit={handleSubmit(handleApplyFiltering)}
        className="filters__box"
      >
        <label>
          Title
          <input {...register(FormInputs.TITLE)} placeholder="Title" />
        </label>
        <label>
          Date
          <input {...register(FormInputs.DATE)} type="date" />
        </label>
        <label>
          Distributor
          <select {...register(FormInputs.DISTRIBUTOR)} defaultValue="none">
            {DISTRIBUTOR_OPTIONS.map(([label, option]) => (
              <option label={label}>{option}</option>
            ))}
          </select>
        </label>
        <label>
          <div className="filters__price-range">
            Price
            <p>{watch()[FormInputs.MIN_PRICE]}</p>-
            <p>{watch()[FormInputs.MAX_PRICE]}</p>$
          </div>
          <Slider
            className="filters__slider"
            min={10}
            max={500}
            range
            onChange={handleSliderChange}
            value={[getValues().minPrice, getValues().maxPrice]}
          />
        </label>
        <div className="filters__buttons">
          <button type="submit">Apply</button>
          <button
            onClick={handleResetFiltering}
            type="button"
            className="btn--secondary"
          >
            Reset
          </button>
        </div>
        <label>
          Sort by
          <select {...register(FormInputs.SORT_ORDER)}>
            {SORT_OPTIONS.map(([_, option]) => (
              <option>{option}</option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};
