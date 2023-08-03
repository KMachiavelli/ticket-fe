import { FiltersIcon } from "../../../../assets/icons/FiltersIcon";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import {
  Controller,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { FormInputI, FormInputs } from "./types";

export const Filters = () => {
  const { register, handleSubmit, control, formState, watch } =
    useForm<FormInputI>({ defaultValues: { priceRange: [50, 250] } });

  const handleApplyFiltering: SubmitHandler<FormInputI> = (data) => {
    console.log(data);
    console.log(formState);
    console.log(watch()[FormInputs.PRICE_RANGE]);
  };

  const sortByOptions = ["title", "price"];

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
            {[0].map(() => (
              <option>none</option>
            ))}
          </select>
        </label>
        <label>
          <div className="filters__price-range">
            Price
            <p>{watch()[FormInputs.PRICE_RANGE][0]}</p>-
            <p>{watch()[FormInputs.PRICE_RANGE][1]}</p>$
          </div>
          <Controller
            name={FormInputs.PRICE_RANGE}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Slider
                className="filters__slider"
                min={10}
                max={500}
                range
                onChange={onChange}
                value={value}
              />
            )}
          />
        </label>
        <div className="filters__buttons">
          <button type="submit">Apply</button>
          <button type="button" className="btn--secondary">
            Reset
          </button>
        </div>
        <label>
          Sort by
          <select>
            {sortByOptions.map((option) => (
              <option>{option.toLocaleUpperCase()}</option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};
