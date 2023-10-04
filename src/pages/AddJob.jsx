import { statusOption, typeOptions } from "../helpers/constants";
import { useDispatch } from "react-redux";
import { addJob } from "../redux/slices/jobSlice";
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";




const AddJob = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const newJob = Object.fromEntries(form.entries());
    if (!newJob.type || !newJob.status) {
      toast.info("Tüm alanları doldurunuz");
      return;
    }
    newJob.id = v4();
    axios
      .post("http://localhost:3030/jobs", newJob)
      .then((res) => {
        console.log(res);
        toast.success("ekleme işlemi başarılı");
        dispatch(addJob(newJob));
        navigate("/");
      })
      .catch(() => {
        toast.error("işlem sırasında hata oluştu");
      });
  };
  return (
    <div className="add-sec">
      <h2>Yeni İş Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="">Pozisyon</label>
          <input type="text" required name="position" />
        </div>
        <div className="field">
          <label htmlFor="">Şirket</label>
          <input type="text" required name="company" />
        </div>
        <div className="field">
          <label htmlFor="">Lokasyon</label>
          <input type="text" required name="location" />
        </div>
        <div className="field">
          <label htmlFor="">Durum</label>
          <select name="status">
            <option>Seçiniz</option>
            {statusOption?.map((status, i) => (
              <option key={i}>{status}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="">Tür</label>
          <select name="type">
            <option>Seçiniz</option>
            {typeOptions?.map((type, i) => (
              <option key={i}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <button>Ekle</button>
        </div>
      </form>
      
    </div>
  );
};

export default AddJob;
