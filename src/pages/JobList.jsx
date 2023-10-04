import { useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setError, setJob } from "../redux/slices/jobSlice";
import Filter from "../components/filter";

const JobList = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3030/jobs")
      .then((res) => {
        dispatch(setJob(res.data));
      })
      .catch(dispatch(setError()));
  }, []);

  return (
    <>
      <div>
        <div>
          <Filter/>
        </div>
        <section className="job-list">
          {!store.initialized && <p>Yükleniyor</p>}

          {store.initialized && !store.isError
            ? store.jobs?.map((dt, i) => <Card key={i} job={dt} />)
            : "No Data Found"}
        </section>
      </div>
    </>
  );
};

export default JobList;
