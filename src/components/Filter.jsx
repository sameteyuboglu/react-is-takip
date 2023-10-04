import { useDispatch } from "react-redux";
import { sortOptions, statusOption, typeOptions } from "../helpers/constants";
import { clearSearch, filterBySearch } from "../redux/slices/jobSlice";
import { useRef } from "react";

const Filter = () => {
  const dispatch = useDispatch();
  const companyRef = useRef();
  const statusRef = useRef();
  const typeRef = useRef();
  const sortRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const filter = Object.fromEntries(form.entries());
    dispatch(filterBySearch(filter));
  };
  const clearFilter = () => {
    companyRef.target.value = "";
    statusRef.target.value = "Seçiniz";
    typeRef.target.value = "Seçiniz";
    sortRef.target.value = "";
    dispatch(clearSearch());
  };
  return (
    <>
      <div className="filter-sec">
        <h2>Search</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor=""></label>
            <input
              type="text"
              name="company"
              placeholder="örn:amazon"
              ref={companyRef}
            />
          </div>
          <div>
            <label htmlFor=""></label>
            <select name="status" defaultValue={""}>
              <option value="">Seçiniz</option>
              {statusOption.map((x, i) => (
                <option value={x} key={i}>
                  {x}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor=""></label>
            <select name="type" defaultValue={""}>
              <option value="">Seçiniz</option>
              {typeOptions.map((x, i) => (
                <option value={x} key={i}>
                  {x}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor=""></label>
            <select name="sort" defaultValue={""}>
              <option disabled value="">
                Seçiniz
              </option>
              {sortOptions.map((x, i) => (
                <option value={x} key={i}>
                  {x}
                </option>
              ))}
            </select>
          </div>
          <button type="submit"> Filter</button>
          <button type="button" onClick={clearFilter}>
            Clear Filter
          </button>
        </form>
      </div>
    </>
  );
};

export default Filter;
